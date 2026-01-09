<?php
require_once __DIR__ . '/_inc/bootstrap.php';
require_once __DIR__ . '/_inc/layout.php';

$configPath = dirname(__DIR__) . '/config.php';
if (!file_exists($configPath)) {
    render_header('Install');
    echo '<div class="admin-card">Create <strong>public/config.php</strong> first.</div>';
    render_footer();
    exit;
}

require_once $configPath;

$setupKey = defined('APP_SETUP_KEY') ? APP_SETUP_KEY : '';
if ($setupKey && (!isset($_GET['key']) || $_GET['key'] !== $setupKey)) {
    http_response_code(403);
    render_header('Install');
    echo '<div class="admin-card">Invalid setup key.</div>';
    render_footer();
    exit;
}

$message = '';
$hasDb = (bool)$pdo;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $pdo) {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $seed = isset($_POST['seed']);

    if ($username === '' || $password === '') {
        $message = 'Username and password are required.';
    } else {
        $pdo->exec('CREATE TABLE IF NOT EXISTS admins (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(64) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )');

        $pdo->exec('CREATE TABLE IF NOT EXISTS products (
            id VARCHAR(64) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10,2) NOT NULL,
            offer_price DECIMAL(10,2) NOT NULL,
            category VARCHAR(64),
            images TEXT,
            image_alt VARCHAR(255),
            seo_title VARCHAR(255),
            seo_description TEXT,
            is_active TINYINT(1) DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )');

        $pdo->exec('CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_ref VARCHAR(32) UNIQUE NOT NULL,
            stripe_session_id VARCHAR(255),
            stripe_payment_intent_id VARCHAR(255),
            email VARCHAR(255),
            customer_name VARCHAR(255),
            customer_phone VARCHAR(64),
            shipping_address TEXT,
            amount_total INT,
            amount_refunded INT DEFAULT 0,
            currency VARCHAR(8),
            payment_status VARCHAR(32),
            refund_status VARCHAR(32),
            fulfillment_status VARCHAR(32) DEFAULT "pending",
            tracking_url VARCHAR(255),
            status VARCHAR(32) DEFAULT "pending",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )');

        $pdo->exec('CREATE TABLE IF NOT EXISTS order_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_id INT NOT NULL,
            product_id VARCHAR(64),
            product_name VARCHAR(255),
            quantity INT,
            unit_amount INT,
            line_total INT,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
        )');

        $stmt = $pdo->prepare('INSERT IGNORE INTO admins (username, password_hash) VALUES (?, ?)');
        $stmt->execute([$username, password_hash($password, PASSWORD_DEFAULT)]);

        if ($seed) {
            $products = [
                ['tee-rise', 'Rise Tee', 'Premium cotton tee with the Scendent crest front and center.', 55, 45, 'Tees', ['/images/scendent_product_tee.svg']],
                ['tee-send-it', 'Send It Tee', 'A bold reminder to go beyond what feels possible.', 55, 45, 'Tees', ['/images/scendent_product_tee.svg']],
                ['hoodie-ascend', 'Ascend Hoodie', 'Heavyweight fleece hoodie built for late nights and big goals.', 110, 95, 'Hoodies', ['/images/scendent_product_hoodie.svg']],
                ['hoodie-nightshift', 'Nightshift Hoodie', 'Brushed fleece with a relaxed fit and subtle Scendent mark.', 110, 95, 'Hoodies', ['/images/scendent_product_hoodie.svg']],
                ['cap-crest', 'Crest Cap', 'Structured cap with an adjustable back strap.', 45, 35, 'Caps', ['/images/scendent_product_cap.svg']],
                ['cap-forest', 'Forest Cap', 'Deep green cap for everyday wear and outdoor sessions.', 45, 35, 'Caps', ['/images/scendent_product_cap.svg']],
                ['tote-crew', 'Crew Tote', 'Canvas tote for daily carry and gym runs.', 40, 30, 'Accessories', ['/images/scendent_product_tote.svg']],
                ['sticker-pack', 'Mindset Sticker Pack', 'Weather-resistant stickers for laptops, bottles, and boards.', 18, 12, 'Stickers', ['/images/scendent_product_sticker.svg']],
                ['bundle-core', 'Core Merch Bundle', 'Tee + cap + sticker pack at drop pricing.', 115, 95, 'Bundle', ['/images/scendent_product_bundle.svg']],
                ['bundle-impact', 'Impact Bundle', 'Hoodie + tote + sticker pack to fuel the mission.', 160, 140, 'Bundle', ['/images/scendent_product_bundle.svg']],
            ];

            $insert = $pdo->prepare('INSERT IGNORE INTO products (id, name, description, price, offer_price, category, images, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, 1)');
            foreach ($products as $product) {
                $insert->execute([
                    $product[0],
                    $product[1],
                    $product[2],
                    $product[3],
                    $product[4],
                    $product[5],
                    json_encode($product[6]),
                ]);
            }
        }

        $message = 'Install complete. You can now log in.';
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && !$pdo) {
    $message = 'Database connection failed. Check config.php credentials.';
}

render_header('Install');
?>
<div class="admin-card">
    <h2>Admin Setup</h2>
    <p class="admin-muted">Create the database tables and an admin login.</p>
    <?php if ($message): ?>
        <p class="admin-muted"><?php echo htmlspecialchars($message); ?></p>
    <?php endif; ?>
    <form method="post" class="admin-form">
        <label>Admin Username</label>
        <input type="text" name="username" required>

        <label>Admin Password</label>
        <input type="password" name="password" required>

        <label>
            <input type="checkbox" name="seed" value="1" checked>
            Seed starter products
        </label>

        <div style="margin-top: 18px;">
            <button class="admin-button primary" type="submit" <?php echo $hasDb ? '' : 'disabled'; ?>>Run setup</button>
        </div>
    </form>
    <p class="admin-muted" style="margin-top: 16px;">
        After setup, delete or protect this file.
    </p>
</div>
<?php
render_footer();

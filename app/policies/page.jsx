import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Scendent Policies | Shipping, Returns, Support",
  description:
    "Scendent shipping, returns, and support policies for merch orders in New Zealand.",
};

const PoliciesPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-3xl">
          <p className="section-kicker">Policies</p>
          <h1 className="section-title mt-2">Returns, shipping, and support</h1>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Straightforward information about returns, shipping, and how we look after
            the Scendent community.
          </p>
        </div>

        <div className="mt-10 space-y-10 max-w-3xl text-sm md:text-base text-ink-500">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Returns</h2>
            <p>
              Change of mind returns are accepted on unworn, unused merch within 14 days
              of delivery. Items must be in original condition with tags attached.
            </p>
            <p>
              Return shipping costs are the responsibility of the customer. Original
              shipping fees are not refundable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Faulty or incorrect items</h2>
            <p>
              If your order arrives damaged, faulty, or incorrect, contact us within 7 days
              with your order number and a photo. We will arrange a replacement or refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Consumer Guarantees Act (NZ)</h2>
            <p>
              Our goods come with guarantees that cannot be excluded under the Consumer
              Guarantees Act 1993. You are entitled to a replacement or refund for a major
              failure and to compensation for any other reasonably foreseeable loss or damage.
            </p>
            <p>
              This policy is in addition to your rights under the CGA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Shipping</h2>
            <p>
              In-stock merch ships within 2-5 business days across New Zealand. Tracking
              is provided once dispatched.
            </p>
            <p>
              If you have a time-sensitive order, email us before purchasing and we will
              do our best to help.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Contact</h2>
            <p>
              For any questions about returns or your order, email us at
              <span className="text-ink-900"> hello@scendent.co.nz</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliciesPage;


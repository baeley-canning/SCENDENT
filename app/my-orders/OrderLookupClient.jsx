"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const statusStyles = {
  paid: "border-sage-500/40 bg-sage-500/15 text-sage-300",
  pending: "border-sage-500/25 bg-linen-100/80 text-ink-700",
  failed: "border-rose-500/30 bg-rose-500/15 text-rose-300",
  refunded: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  refunding: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  expired: "border-ink-900/20 bg-linen-100 text-ink-500",
};

const formatMoney = (amount, currency) => {
  const code = (currency || "nzd").toLowerCase();
  const symbol = code === "nzd" ? "NZ$" : "$";
  return `${symbol}${(Number(amount || 0) / 100).toFixed(2)}`;
};

const OrderLookupClient = () => {
  const searchParams = useSearchParams();
  const [orderRef, setOrderRef] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  useEffect(() => {
    const ref = (searchParams.get("ref") || "").trim();
    const emailParam = (searchParams.get("email") || "").trim();
    if (ref) setOrderRef(ref);
    if (emailParam) setEmail(emailParam);
  }, [searchParams]);

  const statusClass = useMemo(() => {
    const status = (result?.status || "pending").toLowerCase();
    return statusStyles[status] || statusStyles.pending;
  }, [result]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setResult(null);
    setIsLoading(true);

    try {
      const token = typeof document !== "undefined"
        ? document.querySelector('textarea[name="cf-turnstile-response"]')?.value || ""
        : "";
      const response = await fetch(`${basePath}/api/order-lookup.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderRef: orderRef.trim(),
          email: email.trim(),
          company,
          turnstileToken: token,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to find that order.");
      }
      setResult(data);
    } catch (fetchError) {
      setError(fetchError?.message || "Unable to find that order.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-14 min-h-screen section-animate">
        <div className="space-y-6 max-w-3xl">
          <div>
            <h2 className="text-2xl font-medium text-ink-900 uppercase tracking-[0.18em] font-display">Order lookup</h2>
            <p className="text-sm md:text-base text-ink-700 mt-2">
              We keep checkout simple with no accounts. Use your order reference and the
              email from checkout to view your merch order status.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-surface px-6 py-6 space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-ink-500 font-accent">Order reference</label>
              <input
                type="text"
                value={orderRef}
                onChange={(event) => setOrderRef(event.target.value)}
                placeholder="SC12AB34"
                className="mt-2 w-full rounded-sm border border-sage-500/30 bg-linen-100/90 px-4 py-3 text-sm text-ink-700"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-ink-500 font-accent">Checkout email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-sm border border-sage-500/30 bg-linen-100/90 px-4 py-3 text-sm text-ink-700"
                required
              />
            </div>
            <div className="hidden" aria-hidden="true">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
            {turnstileSiteKey ? (
              <>
                <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
                <div className="cf-turnstile" data-sitekey={turnstileSiteKey}></div>
              </>
            ) : null}
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? "Checking..." : "Check order"}
            </button>
            {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          </form>

          {result ? (
            <div className="card-surface px-6 py-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-500 font-accent">Order</p>
                  <p className="text-lg font-semibold text-ink-900">{result.orderRef}</p>
                  <p className="text-xs text-ink-500 mt-1">{result.createdAt}</p>
                </div>
                <span className={`inline-flex items-center rounded-sm border px-3 py-1 text-xs uppercase tracking-[0.3em] ${statusClass}`}>
                  {result.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="rounded-sm border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium uppercase tracking-[0.16em] text-xs font-accent">Total</p>
                  <p className="mt-2 text-ink-700">{formatMoney(result.amountTotal, result.currency)}</p>
                  {result.amountRefunded ? (
                    <p className="text-xs text-ink-500 mt-2">
                      Refunded: {formatMoney(result.amountRefunded, result.currency)}
                    </p>
                  ) : null}
                </div>
                <div className="rounded-sm border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium uppercase tracking-[0.16em] text-xs font-accent">Payment</p>
                  <p className="mt-2 text-ink-700">{result.paymentStatus || "Pending"}</p>
                  {result.refundStatus ? (
                    <p className="text-xs text-ink-500 mt-2">Refund: {result.refundStatus}</p>
                  ) : null}
                </div>
                <div className="rounded-sm border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium uppercase tracking-[0.16em] text-xs font-accent">Fulfillment</p>
                  <p className="mt-2 text-ink-700">{result.fulfillmentStatus || "Pending"}</p>
                  {result.trackingUrl ? (
                    <a
                      className="mt-2 inline-flex text-xs text-ink-700 underline underline-offset-4"
                      href={result.trackingUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      Tracking link
                    </a>
                  ) : (
                    <p className="text-xs text-ink-500 mt-2">Tracking appears after dispatch.</p>
                  )}
                </div>
                <div className="rounded-sm border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium uppercase tracking-[0.16em] text-xs font-accent">Shipping</p>
                  <p className="mt-2 text-ink-700 whitespace-pre-line">
                    {result.shippingAddress || "Not yet available."}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-ink-900 uppercase tracking-[0.16em] font-accent">Items</p>
                <div className="mt-3 space-y-2">
                  {(result.items || []).map((item, index) => (
                    <div key={`${item.product_name}-${index}`} className="flex items-center justify-between text-sm text-ink-700">
                      <span>{item.product_name} x {item.quantity}</span>
                      <span>{formatMoney(item.line_total, result.currency)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          <div className="rounded-sm border border-sage-500/20 bg-linen-100/90 p-5 text-sm text-ink-700">
            <p className="text-ink-900 font-medium uppercase tracking-[0.18em] text-xs font-accent">Need help?</p>
            <p className="mt-2">
              Email{" "}
              <a className="text-ink-900 hover:text-ink-700 transition" href="mailto:hello@scendent.co.nz">
                hello@scendent.co.nz
              </a>{" "}
              with your order reference and we will help.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderLookupClient;


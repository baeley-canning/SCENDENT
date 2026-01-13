import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 pt-8 pb-14 section-animate" id="contact">
      <p className="section-kicker">Get in touch</p>
      <h1 className="md:text-4xl text-2xl font-medium uppercase tracking-[0.18em]">
        Stay close to the Scendent movement
      </h1>
      <p className="md:text-base text-ink-700 max-w-2xl">
        Merch drops, event invites, and mental health resources. We only send what
        helps you show up.
      </p>
      <p className="text-sm text-ink-700 pb-6 uppercase tracking-[0.22em]">
        Prefer email?{" "}
        <a className="text-ink-900 hover:text-ink-700 transition" href="mailto:hello@scendent.co.nz">
          hello@scendent.co.nz
        </a>
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-sage-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-4 text-ink-700 bg-linen-100/90"
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
        />
        <button className="md:px-12 px-8 h-full text-linen-50 bg-sage-500 rounded-md rounded-l-none hover:bg-sage-600 transition text-[11px] uppercase tracking-[0.32em] font-semibold">
          Get updates
        </button>
      </div>
      <p className="text-xs text-ink-500 uppercase tracking-[0.28em]">No spam. Unsubscribe anytime.</p>
    </div>
  );
};

export default NewsLetter;


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Scendent FAQ | Merch, Media, Mission",
  description:
    "Answers about Scendent merch, media services, events, and how the mission funds youth mental health support.",
};

const faqs = [
  {
    question: "Where does the money go?",
    answer:
      "Scendent is a social enterprise. A significant portion of profits from merch, events, and media services is reinvested into youth mental health initiatives and the Scendent trust.",
  },
  {
    question: "What sizes do you offer?",
    answer:
      "Most apparel drops run from XS to 3XL. Each product page includes fit guidance and sizing notes.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "In-stock merch ships within 2-5 business days across New Zealand. You will receive tracking once dispatched.",
  },
  {
    question: "Can I return merch?",
    answer:
      "Unworn items can be returned within 14 days. Items must be in original condition with tags attached. See our returns policy for full details.",
  },
  {
    question: "Do you offer media services?",
    answer:
      "Yes. Scendent Media delivers content creation, social strategy, and training programs for purpose-led brands. Visit the Media Services page to learn more.",
  },
  {
    question: "How do Scendent events work?",
    answer:
      "Events are community-led spaces for storytelling, learning, and connection. Some are ticketed fundraisers while others are free. Event details are shared on our Events page.",
  },
  {
    question: "Is Scendent a crisis support service?",
    answer:
      "No. If you or someone you know needs urgent help in New Zealand, call 111 or free call/text 1737 to talk to a trained counsellor.",
  },
  {
    question: "How can I collaborate or sponsor?",
    answer:
      "We love partnerships. Email hello@scendent.co.nz with your idea and we will get back to you.",
  },
];

const FaqPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-3xl">
          <p className="section-kicker">FAQ</p>
          <h1 className="section-title mt-2">Frequently asked questions</h1>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Answers about merch, media services, and how Scendent supports mental health.
          </p>
        </div>

        <div className="mt-10 space-y-4 max-w-3xl">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-sage-500/25 bg-linen-100/80 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-ink-900 uppercase tracking-[0.16em]">
                <span>{faq.question}</span>
                <span className="text-ink-500 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-ink-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;

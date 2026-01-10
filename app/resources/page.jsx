import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

export const metadata = {
  title: "Scendent Resources | Directory of Mental Health Support",
  description:
    "A directory of trusted mental health support services in New Zealand, curated by Scendent.",
};

const resources = [
  {
    name: "Need to talk? Free call or text 1737",
    description: "24/7 support from a trained counsellor in New Zealand.",
    link: "https://1737.org.nz",
  },
  {
    name: "Lifeline NZ",
    description: "Crisis support and counselling services.",
    link: "https://lifeline.org.nz",
  },
  {
    name: "Youthline",
    description: "Support for youth, families, and schools.",
    link: "https://www.youthline.co.nz",
  },
  {
    name: "I Am Hope (Gumboot Friday)",
    description: "Helping fund free counselling for young people.",
    link: "https://www.gumbootfriday.org.nz",
  },
  {
    name: "Mental Health Foundation NZ",
    description: "Tools, guides, and mental wellbeing resources.",
    link: "https://mentalhealth.org.nz",
  },
  {
    name: "The Lowdown",
    description: "Info and support for depression, anxiety, and life stuff.",
    link: "https://thelowdown.co.nz",
  },
];

const ResourcesPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-3xl">
          <p className="section-kicker">Resources</p>
          <h1 className="section-title mt-2">Directory of help</h1>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Scendent is not a crisis service. If you or someone you know needs urgent help,
            call 111. For free, confidential support in New Zealand, call or text 1737.
          </p>
        </div>

        <div className="mt-8 card-surface p-5 md:p-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Need support right now?</h2>
            <p className="mt-2 text-sm md:text-base text-ink-500">
              Free, confidential support is available 24/7 in New Zealand through 1737.
              If there is immediate danger, call 111.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn-primary" href="https://1737.org.nz" target="_blank" rel="noopener">
                Visit 1737
              </a>
              <a className="btn-outline" href="tel:1737">
                Call 1737
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
            <Image
              src={withImageWidth(scendentImages.womanSmile, 1200)}
              alt="Mental wellbeing support"
              width={1200}
              height={720}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.name}
              className="card-surface p-5 transition hover:-translate-y-1 hover:border-sage-500/50"
              href={resource.link}
              target="_blank"
              rel="noopener"
            >
              <h2 className="text-base font-semibold text-ink-900">{resource.name}</h2>
              <p className="mt-2 text-sm text-ink-500">{resource.description}</p>
              <span className="mt-3 inline-flex text-xs uppercase tracking-[0.2em] text-sage-300">
                Visit resource
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 card-surface p-6 md:p-8">
          <h2 className="text-xl font-semibold text-ink-900">Want to contribute?</h2>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            We are always looking for more trusted partners and support services. Email
            hello@scendent.co.nz with recommendations or collaboration ideas.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResourcesPage;

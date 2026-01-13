import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

export const metadata = {
  title: "Scendent Events | Community Workshops + Pop-Ups",
  description:
    "Scendent events bring people together to connect, learn, and fund youth mental health support across Aotearoa.",
};

const events = [
  {
    title: "Community workshops",
    description: "Skill-building sessions on mindset, self-care, and growth.",
  },
  {
    title: "Pop-up merch nights",
    description: "Local collabs that bring the community together and fund the mission.",
  },
  {
    title: "Festival activations",
    description: "On-site experiences that spark conversation and connection.",
  },
  {
    title: "Youth meet-ups",
    description: "Safe spaces for sharing stories, wins, and support.",
  },
];

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-3xl">
          <p className="section-kicker">Events</p>
          <h1 className="section-title mt-2">Spaces to connect and grow</h1>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Scendent events are designed to create community, celebrate progress, and fund
            youth mental health initiatives. Each gathering helps build momentum for the
            mission.
          </p>
        </div>

        <div className="mt-10 card-surface p-6 md:p-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">Designed for real connection</h2>
            <p className="mt-3 text-sm md:text-base text-ink-500">
              From pop-ups to workshops, every event creates a space for honest
              conversations and tangible support. We partner with local venues to keep
              the focus on community and impact.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-2">
              <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
                Youth-led programming
              </div>
              <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
                Safe, welcoming spaces
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
              <Image
                src={withImageWidth(scendentImages.eventCrowd, 900)}
                alt="Scendent event crowd"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 50vw, 220px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
              <Image
                src={withImageWidth(scendentImages.ourPlace, 900)}
                alt="Scendent community event group"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 50vw, 220px"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div key={event.title} className="card-surface p-6 transition hover:-translate-y-1 hover:border-sage-500/50">
              <h2 className="text-lg font-semibold text-ink-900 uppercase tracking-[0.16em]">{event.title}</h2>
              <p className="mt-2 text-sm text-ink-500">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card-surface p-6 md:p-8">
          <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">Partner with Scendent</h2>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Interested in hosting an event or supporting the mission? We partner with
            local businesses and venues to create impact-led experiences.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary inline-flex" href="mailto:hello@scendent.co.nz">
              Talk to the team
            </a>
            <a className="btn-outline inline-flex" href="/#contact">
              Get event updates
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;

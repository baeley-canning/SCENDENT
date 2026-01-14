import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";
import MediaPlayer from "@/components/MediaPlayer";

export const metadata = {
  title: "Scendent Media | Purpose-Led Content + Strategy",
  description:
    "Content creation, social strategy, and TikTok training for purpose-led brands. Half of profits fund youth mental health support in New Zealand.",
};

const services = [
  {
    title: "Full content creation",
    description:
      "End-to-end production for social, web, and campaigns. Strategy, shoot day, edit, and delivery.",
  },
  {
    title: "Social media management",
    description:
      "Content calendars, posting, community engagement, and performance reporting.",
  },
  {
    title: "TikTok training",
    description:
      "A structured program designed to grow followers and improve retention with repeatable systems.",
  },
  {
    title: "Strategy + brand positioning",
    description:
      "Clarity on messaging, offers, and content pillars to drive conversions.",
  },
  {
    title: "Consultations",
    description:
      "One-off sessions to review your channels, identify gaps, and map next steps.",
  },
];

const MediaServicesPage = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
    : "";
  const mediaReelSrc =
    process.env.NEXT_PUBLIC_MEDIA_REEL_URL ||
    `${basePath}/videos/scendent-media-reel.mp4`;
  const mediaReelPoster = withImageWidth(scendentImages.eventStage, 1200);

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-3xl">
          <p className="section-kicker">Scendent Media</p>
          <h1 className="section-title mt-2">Purpose-led media that converts</h1>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Scendent Media is the creative arm of Scendent. We build content, strategy,
            and social systems for brands that want to grow with purpose. Half of profits
            fund youth mental health support in Aotearoa.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <MediaPlayer
            src={mediaReelSrc}
            poster={mediaReelPoster}
            title="Scendent Media Player"
            nowPlaying="Purpose-led showreel"
          />
          <div className="space-y-4">
            <div className="win-panel">
              <p className="section-kicker">Featured work</p>
              <h2 className="section-title mt-2">Content that funds real impact</h2>
              <p className="mt-3 text-sm md:text-base text-ink-500">
                Scendent Media is the creative arm of the mission. Every campaign helps
                fund youth mental health support while delivering high-performing
                content for your brand.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="btn-primary" href="mailto:hello@scendent.co.nz">
                  Book a consult
                </a>
                <a className="btn-outline" href="/#contact">
                  Talk about your project
                </a>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="win-panel text-xs">
                Showreels, social ads, launch videos, and event recaps that convert.
              </div>
              <div className="win-panel text-xs">
                Half of profits fund youth mental health support in Aotearoa.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 card-surface p-6 md:p-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Creative with impact built in</h2>
            <p className="mt-3 text-sm md:text-base text-ink-500">
              We blend strategy, production, and social systems so your content performs
              and your spend fuels community support. Every project powers the Scendent
              mission.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-2">
              <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
                Strategy-led production
              </div>
              <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
                Impact reporting included
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
              <Image
                src={withImageWidth(scendentImages.ryanWorking, 900)}
                alt="Content planning session"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 50vw, 220px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
              <Image
                src={withImageWidth(scendentImages.filmReel, 900)}
                alt="Scendent Media production"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 50vw, 220px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90 col-span-2">
              <Image
                src={withImageWidth(scendentImages.eventStage, 1200)}
                alt="Event coverage and storytelling"
                width={1200}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card-surface p-6 transition hover:-translate-y-1 hover:border-sage-500/50">
              <h2 className="text-lg font-semibold text-ink-900">{service.title}</h2>
              <p className="mt-2 text-sm text-ink-500">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card-surface p-6 md:p-8">
          <h2 className="text-xl font-semibold text-ink-900">Impact built in</h2>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Every Scendent Media project funds the wider mission. Your campaigns help
            expand resources, partnerships, and support for young people.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-3">
            <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
              Half of profits support mental health
            </div>
            <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
              Community-first storytelling
            </div>
            <div className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">
              Strategy that serves people
            </div>
          </div>
        </div>

        <div className="mt-12 card-surface p-6 md:p-8">
          <h2 className="text-xl font-semibold text-ink-900">Why Scendent Media</h2>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            We build content that reflects the deeper values of your business while still
            driving leads and sales. Our team handles strategy through to delivery so you
            can focus on the bigger picture.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-3">
            <li className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">Clear content direction</li>
            <li className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">Systems for consistent output</li>
            <li className="rounded-2xl border border-sage-500/20 bg-linen-100/80 p-4">Impact-led storytelling</li>
          </ul>
        </div>

        <div className="mt-12 card-surface p-6 md:p-8">
          <h2 className="text-xl font-semibold text-ink-900">Book a consult</h2>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Tell us about your brand, goals, and upcoming campaigns. We will respond with
            a tailored plan and timeline.
          </p>
          <a className="btn-primary mt-5 inline-flex" href="mailto:hello@scendent.co.nz">
            Email Scendent Media
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MediaServicesPage;

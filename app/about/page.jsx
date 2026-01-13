import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

export const metadata = {
  title: "About Scendent | Youth Mental Health Social Enterprise",
  description:
    "Learn how Scendent uses merch, media, and events to fund youth mental health support and community initiatives in Aotearoa.",
};

const AboutPage = () => {
  const communityPhoto = withImageWidth(scendentImages.charityGroup, 1200);

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-3xl">
          <p className="section-kicker">About</p>
          <h1 className="section-title mt-2">Scendent Mental Health</h1>
          <p className="mt-3 text-sm md:text-base text-ink-500">
            Scendent is a youth mental health brand and social enterprise created to
            build a lasting, sustainable change in how mental health is supported.
          </p>
        </div>

        <div className="mt-10 card-surface overflow-hidden">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
            <Image
              src={communityPhoto}
              alt="Scendent charity community event"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
            <div className="px-6 py-8">
              <p className="section-kicker">Community first</p>
              <h2 className="text-2xl font-semibold text-ink-900 mt-3 uppercase tracking-[0.16em]">
                Real moments, real impact.
              </h2>
              <p className="mt-3 text-sm md:text-base text-ink-500">
                Scendent exists to fund youth mental health support and build spaces
                where people feel seen. Every drop fuels community-led change.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
            <Image
              src={withImageWidth(scendentImages.community, 900)}
              alt="Scendent community gathering"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 220px"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
            <Image
              src={withImageWidth(scendentImages.ryanWorking, 900)}
              alt="Scendent team working on youth initiatives"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 220px"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
            <Image
              src={withImageWidth(scendentImages.lakePortrait, 900)}
              alt="Wellbeing in nature"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 220px"
            />
          </div>
        </div>

        <div className="mt-10 space-y-10 max-w-3xl text-sm md:text-base text-ink-500">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">Our mission</h2>
            <p>
              On the surface, Scendent is a mental health brand. In depth, we are a
              charitable trust and a series of businesses that work in harmony to fund
              support for young adults and keep the conversation moving forward.
            </p>
            <p>
              A portion of every merch drop, event, and media project is reinvested into
              the mission so we can keep creating change without relying solely on
              donations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">How the model works</h2>
            <p>
              Merch and media fuel the trust. That means the community can buy apparel
              they believe in, businesses can book Scendent Media, and together we can
              fund real support for those who need it.
            </p>
            <p>
              Scendent was born in 2018 from the word "transcendent" and the phrase
              "send it", representing the courage to go beyond what feels possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">Community and events</h2>
            <p>
              We create spaces to connect, celebrate wins, share stories, and grow in a
              supportive environment. Events and workshops are designed to be fun,
              honest, and impact-led.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">Scendent Media</h2>
            <p>
              Our media arm offers content creation, social strategy, and training
              programs that help brands grow. Half of profits from this stream are
              reinvested into the Scendent trust.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900 uppercase tracking-[0.16em]">Get in touch</h2>
            <p>
              Email us at{" "}
              <a className="text-ink-900 hover:text-ink-700 transition" href="mailto:hello@scendent.co.nz">
                hello@scendent.co.nz
              </a>{" "}
              to collaborate, book media services, or support the mission.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;


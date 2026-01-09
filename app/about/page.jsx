import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Scendent | Youth Mental Health Social Enterprise",
  description:
    "Learn how Scendent uses merch, media, and events to fund youth mental health support and community initiatives in Aotearoa.",
};

const AboutPage = () => {
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

        <div className="mt-10 space-y-10 max-w-3xl text-sm md:text-base text-ink-500">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Our mission</h2>
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
            <h2 className="text-xl font-semibold text-ink-900">How the model works</h2>
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
            <h2 className="text-xl font-semibold text-ink-900">Community and events</h2>
            <p>
              We create spaces to connect, celebrate wins, share stories, and grow in a
              supportive environment. Events and workshops are designed to be fun,
              honest, and impact-led.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Scendent Media</h2>
            <p>
              Our media arm offers content creation, social strategy, and training
              programs that help brands grow. Half of profits from this stream are
              reinvested into the Scendent trust.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink-900">Get in touch</h2>
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


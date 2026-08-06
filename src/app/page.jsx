import Mountain from "@/components/Mountain/Mountain"
import NavBar from "@/components/Navbar/Navbar"
import About from "@/components/About/About"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import ContactForm from "@/components/ContactForm/ContactForm"
import Divider from "@/components/Divider/Divider"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <NavBar />

      {/* Hero follows the selected theme */}
      <div id="home" className="relative bg-zinc-50 dark:bg-black h-screen transition-colors duration-500">
        <Mountain />
        <section className="relative z-10 flex flex-col justify-start pt-24 md:justify-center md:pt-0 h-full px-8 sm:px-12 md:px-16 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-zinc-900 dark:text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 transition-colors duration-500">
            Rodrigo<br />Mollocondo
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300 text-base mb-1 transition-colors duration-500">
            Software Engineer
          </p>
          <p className="text-zinc-500 dark:text-zinc-600 text-sm italic mb-10 transition-colors duration-500">
            &quot;Every peak is a problem solved.&quot;
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-3">
            <a
              href="#projects"
              className="relative overflow-hidden border border-zinc-900 dark:border-white text-zinc-900 dark:text-white px-8 py-3 text-xs tracking-[0.2em] uppercase group transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zinc-900 dark:bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="border border-zinc-900/20 dark:border-white/20 text-zinc-900/50 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            >
              Contact me
            </a>
          </div>
        </section>
      </div>

      {/* Remaining sections respond to light and dark theme */}
      <div className="bg-zinc-50 dark:bg-black">
        <About />

        <Divider />

        <Skills />

        <Divider />

        <Projects />

        <Divider />

        <section id="contact" className="relative z-10 min-h-screen flex flex-col md:flex-row items-start md:items-center px-8 sm:px-12 md:px-16 lg:px-32 py-16 md:py-32">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
            <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-8">
              Let&apos;s work<br />together.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-md">
              Whether it&apos;s a project, an opportunity, or simply a conversation, I&apos;m open to it.
            </p>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-16">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

import RevealText from "./RevealText";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#050505] py-28 sm:py-40">
      <div className="section-shell">
        <RevealText className="max-w-5xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 text-balance text-5xl font-extralight leading-tight text-white sm:text-7xl">
            Construisons quelque chose de fort.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
            Pour une serie photo, un film d'aventure, un contenu de voyage ou un projet visuel
            plus personnel, ecrivez avec quelques mots sur l'histoire a raconter.
          </p>
          <a
            href="mailto:aurorart.run@gmail.com"
            className="mt-12 block break-words text-3xl font-light text-[#c8ad7f] transition duration-500 hover:text-white sm:text-5xl"
          >
            aurorart.run@gmail.com
          </a>
          <div className="mt-12 flex flex-wrap gap-5 text-sm uppercase tracking-[0.18em] text-white/48">
            <a href="#" className="transition duration-500 hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition duration-500 hover:text-white">
              Vimeo
            </a>
            <a href="#" className="transition duration-500 hover:text-white">
              LinkedIn
            </a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

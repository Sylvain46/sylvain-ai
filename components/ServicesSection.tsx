import RevealText from "./RevealText";

const services = [
  {
    title: "Photographie",
    description: "Portraits, paysages, sport et instants de vie avec une intention narrative.",
  },
  {
    title: "Video / Filmmaking",
    description: "Films courts, reels et contenus immersifs au rendu cinematographique.",
  },
  {
    title: "Contenu de voyage",
    description: "Images d'aventure, itineraires visuels et storytelling pour destinations.",
  },
  {
    title: "Montage / Retouche",
    description: "Selection, rythme, couleur et finition pour renforcer l'emotion brute.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#111111] py-28 sm:py-36">
      <div className="section-shell">
        <RevealText>
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 max-w-3xl text-5xl font-extralight leading-tight text-white sm:text-6xl">
            Des images vraies, construites avec intention.
          </h2>
        </RevealText>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <RevealText key={service.title} delay={index * 0.05}>
              <article className="glass group min-h-[260px] p-7 transition duration-700 hover:-translate-y-1 hover:border-[#c8ad7f]/35 hover:shadow-[0_24px_80px_rgba(200,173,127,0.08)]">
                <span className="text-sm text-[#c8ad7f]/80">0{index + 1}</span>
                <h3 className="mt-10 text-2xl font-light text-white">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/58">{service.description}</p>
              </article>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

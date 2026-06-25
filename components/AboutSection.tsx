import ProtectedImage from "@/components/ProtectedImage";
import { publicPath } from "@/lib/paths";
import RevealText from "./RevealText";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#050505] py-20 sm:py-36">
      <span id="apropos" className="absolute top-0" aria-hidden="true" />
      <div className="section-shell grid items-center gap-12 md:grid-cols-[0.92fr_1fr] lg:gap-20">
        <RevealText className="relative aspect-[4/5] min-h-[420px] overflow-hidden rounded-[2rem] bg-transparent shadow-2xl shadow-black/40 sm:min-h-[520px]">
          <ProtectedImage
            src={publicPath("/media/a propos/A propos.JPG")}
            alt="Portrait cinématique"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </RevealText>

        <RevealText delay={0.1}>
          <p className="eyebrow">A propos</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-extralight leading-tight text-white sm:text-6xl">
            Sylvain AI
          </h2>
          <div className="mt-8 max-w-xl space-y-6 text-base leading-8 text-white/66 sm:text-lg sm:leading-9">
            <p>
              Photographe d'aventure et de voyage, de sport et de sport mécanique, je construis
              des images comme des fragments de cinéma : brutes, intenses et profondément humaines.
            </p>
            <p>
              Ce qui m'attire, ce n'est pas le parfait, mais le vrai. L'émotion spontanée,
              l'énergie d'un moment vécu, la beauté naturelle d'un instant qui ne se rejouera
              jamais.
            </p>
            <p>
              Créer une image, pour moi, c'est faire ressentir une atmosphère avant même qu'on la
              regarde vraiment.
            </p>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

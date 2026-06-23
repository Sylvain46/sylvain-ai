import ProtectedImage from "@/components/ProtectedImage";
import { publicPath } from "@/lib/paths";
import RevealText from "./RevealText";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#050505] py-20 sm:py-36">
      <span id="apropos" className="absolute top-0" aria-hidden="true" />
      <div className="section-shell grid items-center gap-12 md:grid-cols-[0.92fr_1fr] lg:gap-20">
        <RevealText className="relative aspect-[3/4] min-h-[420px] overflow-hidden rounded-[2rem] border-none bg-transparent shadow-2xl shadow-black/40 ring-0 sm:min-h-[520px]">
          <ProtectedImage
            src={publicPath("/media/a propos/A propos.JPG")}
            alt="Portrait cinématique"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-contain opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </RevealText>

        <RevealText delay={0.1}>
          <p className="eyebrow">A propos</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-extralight leading-tight text-white sm:text-6xl">
            Photographe & vidéaste porté par le voyage et l'aventure.
          </h2>
          <div className="mt-8 max-w-xl space-y-6 text-base leading-8 text-white/66 sm:text-lg sm:leading-9">
            <p>
              Je m'appelle Sylvain AI, photographe et vidéaste passionné par le voyage,
              l'aventure et les émotions brutes. À travers mes images, je cherche à capturer
              l'intensité d'un instant, la beauté d'un paysage et tout ce qui fait vibrer une
              scène, que ce soit une ambiance, une sensation ou un moment de vie.
            </p>
            <p>
              J'aime créer des contenus au style cinématique, immersifs et authentiques,
              avec l'envie de raconter une histoire et de transmettre une émotion à travers
              chaque photo et chaque vidéo. Chaque projet est pour moi une nouvelle aventure
              visuelle et humaine.
            </p>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

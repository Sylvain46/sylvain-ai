import ProtectedImage from "@/components/ProtectedImage";
import { publicPath } from "@/lib/paths";
import RevealText from "./RevealText";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#050505] py-28 sm:py-36">
      <span id="apropos" className="absolute top-0" aria-hidden="true" />
      <div className="section-shell grid items-center gap-12 md:grid-cols-[0.92fr_1fr] lg:gap-20">
        <RevealText className="relative min-h-[520px] overflow-hidden border border-white/10 bg-[#161616]">
          <ProtectedImage
            src={publicPath("/media/a propos/A propos.JPG")}
            alt="Portrait cinematographique"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </RevealText>

        <RevealText delay={0.1}>
          <p className="eyebrow">A propos</p>
          <h2 className="mt-5 max-w-2xl text-5xl font-extralight leading-tight text-white sm:text-6xl">
            Photographe & videaste porte par le voyage et l'aventure.
          </h2>
          <div className="mt-8 max-w-xl space-y-6 text-lg leading-9 text-white/66">
            <p>
              Je m'appelle Sylvain AI, photographe et videaste passionne par le voyage,
              l'aventure et les emotions brutes. A travers mes images, je cherche a capturer
              l'intensite d'un instant, la beaute d'un paysage et tout ce qui fait vibrer une
              scene, que ce soit une ambiance, une sensation ou un moment de vie.
            </p>
            <p>
              J'aime creer des contenus au style cinematographique, immersifs et authentiques,
              avec l'envie de raconter une histoire et de transmettre une emotion a travers
              chaque photo et chaque video. Chaque projet est pour moi une nouvelle aventure
              visuelle et humaine.
            </p>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

"use client";

import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-32">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-mono text-sm tracking-widest text-zinc-500 uppercase">
              about
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">
              quem tá por trás do hide.ki
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-zinc-400">
            <p>
              hide.ki é meu cantinho na internet. um lugar pra registrar ideias,
              aprendizados e interesses — desde código e ferramentas até basquete
              e anime.
            </p>
            <p>
              sou desenvolvedor, apaixonado por tecnologia, cultura pop e esportes.
              aqui vou compartilhar o que estudo, o que construo e o que me inspira.
            </p>
            <p className="font-mono text-sm tracking-wider text-zinc-500">
              hide.ki — tracking my life through code, hoops, and anime.
            </p>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}

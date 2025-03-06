import { TypingAnimation } from "@/components/magicui/typing-animation";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-15 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      {/* HEADER */}
      <header className="row-start-1 flex gap-6 items-center justify-center">
        <TypingAnimation>Hello I'm Bhuvnesh Verma</TypingAnimation>
      </header>
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        {/* https://alien8.in/ */}
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="alien8.in"
            href="https://alien8.in/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Alien8
                <br />[ redesign - 2024 ]
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Alien8's vision is to celebrate individuality through bold
                  designs and impeccable craftsmanship.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500" />
            </div>
          </PinContainer>
        </div>
        {/* https://sleven.in/ */}
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="sleven.in"
            href="https://sleven.in/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Sleven
                <br />[ 2022 ]
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Sleven is more than a fast fashion label – it's a testament to
                  the power of shared dreams and mutual passion.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
        {/* https://londhegarments.in/ */}
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="londhegarments.in"
            href="https://londhegarments.in/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Londhe Garments
                <br />[ 2024 & Redesign - 2025]
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Londhe Garments are into Tshirt Manufacturing, Their Rates are
                  competitive as compare to domestic market.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-gray-500 to-gray-800" />
            </div>
          </PinContainer>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/MasterBhuvnesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/bhuvneshverma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={16}
            height={16}
          />
          Linkedin
        </a>
      </footer>
    </div>
  );
}

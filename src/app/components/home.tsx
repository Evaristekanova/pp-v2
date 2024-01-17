import Image from "next/image";
import Eva from "../../assets/images/Eva.jpg";
export default function Landing() {
  return (
    <section
      id="home"
      className="place-content-center h-auto relative flex flex-col items-center justify-start gap-32 pb-8 pt-24 md:h-[80vh] md:flex-row md:justify-center md:pb-0 md:pt-0 "
    >
      <div className="flex w-[90%] flex-col gap-16 md:w-auto">
        <div>
          <p className="text-[18px] font-medium text-white">
            Hi, I<span className="text-lightGreen text-2xl">&rsquo;</span>m
          </p>
          <h1
            id="title"
            className="title md:text-[62px] text-[48px] tracking-tighter text-white"
          >
            <span className="text-lightGreen">Evariste</span> Dusingizimana
          </h1>
          <p className="md:text-[32px] text-[23px] font-medium tracking-tight text-lightGreen">
            &gt; Fullstack Engineer
          </p>
        </div>
        <div className="flex flex-col gap-2 italic text-gray-100 md:gap-1">
          <p>
            <span className="text-lightGreen text-3xl pr-2">&ldquo;</span>i am
            able to work well on both in a team environment as well as using own
          </p>
          <p>
            {" "}
            initiative and also work well under pressure and adhere to strict
            deadlines.
            <span className="text-lightGreen text-3xl pl-2">&rdquo;</span>
          </p>
        </div>
      </div>
      <div className="relative z-50 hidden h-[25vw] w-[25vw] overflow-hidden rounded-full outline md:block">
        <Image
          src={Eva}
          priority={true}
          alt="Kanova"
          className="hover:scale-[1.025] rounded-full transition-all duration-300 ease-in"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute right-[20vw] top-[10vh] z-40 h-[20vw] w-[20vw]" />
    </section>
  );
}

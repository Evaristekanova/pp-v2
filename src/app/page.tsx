import Navbar from "./components/navbar";
import Landing from "./components/home";
import About from "./components/about";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-secondDarkBlue">
      <div className="no-scrollbar relative z-20 m-auto mt-[2vh] h-[90vh] w-[95vw] overflow-y-scroll rounded-[8px] border-[1px] border-gray-200 bg-darkBlue transition-all duration-300 ease-in md:mt-[5vh] md:h-[90vh] md:w-[90vw]">
        <Navbar />
        <Landing />
        <About />
      </div>
    </main>
  );
}

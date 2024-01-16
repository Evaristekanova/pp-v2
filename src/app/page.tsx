import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between md:px-24 px-6">
      <div className="no-scrollbar relative z-20 m-auto mt-[2vh] h-[90vh] w-[95vw] overflow-y-scroll rounded-[8px] border-[1px] border-gray-200 bg-darkBlue transition-all duration-300 ease-in md:mt-[5vh] md:h-[90vh] md:w-[90vw]">
        <Navbar />
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-3xl font-bold text-center text-white animate-bounce">
            This is under construction 🚀🚀
          </h1>
        </div>
      </div>
    </main>
  );
}

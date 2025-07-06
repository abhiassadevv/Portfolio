import Navbar from "../components/Navbar";

import Button from "../components/Button";

import Statistic from "../components/Statistic";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-8 py-10">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="bg-blue-700 h-8 w-64 rounded-full flex justify-center items-center gap-3">
            <i className="bi bi-globe-americas text-sm text-white"></i>
            <p className="text-sm font-normal text-white">
              New project has deployed.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl krona-one-regular font-bold text-white text-center">
              Welcome to my Portfolio Site
            </h1>
            <p className="text-base font-normal text-white text-center opacity-80 mt-3">
              I'm Junior Fullstack Web Developer.
            </p>
            <Button
              width="w-44"
              classname="rounded-xl text-base font-bold text-white mt-8"
            >
              Connect With Me
            </Button>
          </div>
          <div className="flex justify-center items-center gap-6 mt-16">
            <Statistic title="10" description="Happy client" />
            <Statistic title="10" description="Happy client" />
            <Statistic title="10" description="Happy client" />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;

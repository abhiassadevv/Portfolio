import Navbar from "../components/Navbar";

import Button from "../components/Button";

import Statistic from "../components/Statistic";

import TechCard from "../components/TechCard";

import ProjectCard from "../components/ProjectCard";

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
      <section className="px-8 py-20">
        <div>
          <h3 className="text-2xl font-bold text-white">About Me</h3>
          <p className="text-base font-normal text-white opacity-80 mt-2">
            I'm junior fullstack web developer, i cant use modern tech like
            Tailwind CSS React, and Node JS.
          </p>
          <p className="text-base font-normal text-white opacity-80 mt-2">
            I'm junior fullstack web developer, i cant use modern tech like
            Tailwind CSS React, and Node JS.
          </p>
          <p className="text-base font-normal text-white opacity-80 mt-2">
            I'm junior fullstack web developer, i cant use modern tech like
            Tailwind CSS React, and Node JS.
          </p>
        </div>
      </section>
      <section className="px-8 py-20">
        <div>
          <h3 className="text-2xl font-bold text-white text-center">
            This is my favorite Tech and Language.
          </h3>
          <div className="bg-gray-950 border-2 border-slate-800 rounded-xl mt-10">
            <a href="">
              <TechCard width="w-full" border="border-b" icon="/Vector.png" />
            </a>
            <a href="">
              <TechCard
                width="w-full"
                border="border-b"
                icon="/logos_react.png"
              />
            </a>
            <a href="">
              <TechCard
                width="w-full"
                border="border-b"
                icon="/devicon_astro.png"
              />
            </a>
            <div className="flex">
              <a href="">
                <TechCard
                  width="w-27"
                  border="border-b"
                  icon="/logos_nodejs.png"
                />
              </a>
              <a href="">
                <TechCard
                  width="w-27"
                  border="border-b"
                  icon="/vscode-icons_file-type-js-official.png"
                />
              </a>
              <a href="">
                <TechCard
                  width="w-27"
                  border="border-b"
                  icon="/fa6-brands_golang.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 py-20">
        <div>
          <h3 className="text-2xl font-bold text-white">My Projects</h3>
          <p className="text-base font-normal text-white opacity-80 mt-2">
            My personal and client project.
          </p>
        </div>
        <div className="mt-10">
          <ProjectCard
            name="Llama Network Landing Page"
            description="Llama Network is open source and public blockchain."
            image="/Frame 36.png"
          />
        </div>
      </section>
      <section className="px-8 py-20">
        <div className="bg-gradient-to-tr from-blue-700 to-transparent border-2 border-slate-800 h-96 rounded-2xl flex flex-col justify-center items-center">
          <h5 className="text-xl font-bold text-white">
            Let's Connect with Me
          </h5>
          <Button
            width="w-36"
            classname="rounded-xl text-base font-bold text-white mt-5"
          >
            Connect Now
          </Button>
        </div>
      </section>
      <footer className="px-8 py-20">
        <div>
          <h6 className="text-2xl font-bold text-white">Thank for watching.</h6>
          <p className="text-base font-normal text-white">
            Rehan Abhiassa Junior Fullstack Web Developer.
          </p>
          <div className="flex justify-start gap-10 mt-10">
            <ul>
              <li>
                <p className="text-lg font-semibold text-white">Shortcut</p>
              </li>
              <li className="mt-2">
                <a
                  href=""
                  className="text-base font-normal text-white opacity-80"
                >
                  Home
                </a>
              </li>
              <li className="mt-1">
                <a
                  href=""
                  className="text-base font-normal text-white opacity-80"
                >
                  About
                </a>
              </li>
              <li className="mt-1">
                <a
                  href=""
                  className="text-base font-normal text-white opacity-80"
                >
                  Tech
                </a>
              </li>
              <li className="mt-1">
                <a
                  href=""
                  className="text-base font-normal text-white opacity-80"
                >
                  Shortcut
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <p className="text-lg font-semibold text-white">Showcase</p>
              </li>
              <li className="mt-2">
                <a
                  href=""
                  className="text-base font-normal text-white opacity-80"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex justify-center items-center gap-10">
              <i className="bi bi-linkedin text-2xl text-white"></i>
              <i className="bi bi-github text-2xl text-white"></i>
              <i className="bi bi-twitter-x text-2xl text-white"></i>
            </div>
            <p className="text-sm font-normal text-white opacity-80 mt-10">
              &copy; 2025 Rehan Abhiassa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainPage;

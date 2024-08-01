import { TypeWritter } from "typewritter";
import Card from "../card";
import Timeline from "../timeline";

import profileImage from "../../assets/rifqi.jpg";
import animelistImage from "../../assets/animelist.png";
import bookshelfImage from "../../assets/bookshelf.png";
import bootstrapImage from "../../assets/bootstrap.svg";
import cssImage from "../../assets/css.svg";
import htmlImage from "../../assets/html.svg";
import jsImage from "../../assets/js.svg";
import tailwindImage from "../../assets/tailwind.svg";
import tsImage from "../../assets/ts.svg";
import reactImage from "../../assets/react.svg";
import nextjsImage from "../../assets/next.svg";
import viteImage from "../../assets/vite.svg";
import quranImage from "../../assets/quran.png";

const MainComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const firstName = (document.getElementById("firstName") as HTMLInputElement)
      .value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    const urlWa = `https://wa.me/6281220884573?text=${encodeURIComponent(
      `Halo, my name is ${firstName}, and ${message}`
    )}`;
    setTimeout(() => {
      window.open(urlWa, "_blank");
    }, 100);
  };

  return (
    <main className="px-4 w-full" id="home">
      <div className="flex w-full justify-center pt-[80px] h-screen">
        <div className="container py-32">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-2xl lg:ml-[100px] lg:mt-[100px] font-serif">
                HELLO THERE!!
              </h1>
              <div className="text-sky-500 font-semibold lg:ml-[100px] lg:mt-[50px]">
                <TypeWritter
                  text="Hi👋, My Name is Rifqi Alisba Garwita Sutrisno"
                  speed={100}
                  fontSize={20}
                  clearMessageSpeed={40}
                  loop={true}
                />
                <TypeWritter
                  text="Welcome To My Portfolio Website!"
                  speed={100}
                  fontSize={20}
                  clearMessageSpeed={40}
                  loop={true}
                />
                <TypeWritter
                  text="Hope You Like My Portfolio!"
                  speed={100}
                  fontSize={20}
                  clearMessageSpeed={40}
                  loop={true}
                />
              </div>
            </div>
            <div className="hidden lg:block mr-10">
              <img
                src={profileImage}
                alt=""
                className="rounded-lg w-[400px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex w-full justify-center h-full pt-[100px]"
        id="projects"
      >
        <div className="container">
          <h2 className="font-bold uppercase text-center text-lg">
            my projects
          </h2>
          <div className="flex justify-center flex-wrap gap-5 py-4">
            <Card
              image={quranImage}
              title="Quran Web"
              description="A web app that provides information about surah quran. you can search surah here or you can browse all the surah. but in this website you can't bookmark etc becase it's only for showing quran surah."
              link="#"
            />
            <Card
              image={bookshelfImage}
              title="To Do Web"
              description="A web app that provides information about your to do list. you can search your to do list here or you can browse all your to do list also in this website you can bookmark, edit, delete, and add or replace your to do list."
              link="#"
            />
            <Card
              image={animelistImage}
              title="AnimeList Web"
              description="A web app that provides information about animes. you can search animes here or you can browse all the animes. but in this website you can't rating, bookmark etc becase it's only for anime list."
              link="https://jikan-react.vercel.app/"
            />
          </div>
          <div className="text-end lg:mr-44">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Show More
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex w-full justify-center lg:pt-[250px] h-screen"
        id="skills"
      >
        <div className="container">
          <h2 className="font-bold uppercase text-center text-lg">Skills</h2>
          <div className="flex justify-center flex-wrap lg:grid lg:grid-cols-5 lg:pl-[140px] items-center gap-4 lg:gap-9 py-3">
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={reactImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={tailwindImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={jsImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={tsImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={htmlImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={bootstrapImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={viteImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={cssImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group">
              <img
                src={nextjsImage}
                alt=""
                className="w-[100px] h-[100px] grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center h-full">
        <div className="container">
          <h2 className="font-bold uppercase text-center text-lg mb-4">
            Education
          </h2>
          <div className="px-10 lg:pl-[140px]">
            <Timeline />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center h-full pt-10 lg:pt-[250px]">
        <div className="container">
          <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="mx-auto max-w-2xl text-center" id="contact">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Contact Me for more information
              </p>
            </div>
            <form
              className="mx-auto mt-16 max-w-xl sm:mt-20"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="grid grid-cols-1">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;

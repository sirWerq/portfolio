import { TypeWritter } from 'typewritter';
import Card from './card';
import Timeline from './timeline';

import profileImage from './../assets/profile.jpg';
import animelistImage from './../assets/animelist.png';
import bookshelfImage from './../assets/bookshelf.png';
import bootstrapImage from './../assets/bootstrap.svg';
import cssImage from './../assets/css.svg';
import htmlImage from './../assets/html.svg';
import jsImage from './../assets/js.svg';
import tailwindImage from './../assets/tailwind.svg';
import tsImage from './../assets/ts.svg';
import reactImage from './../assets/react.svg';
import nextjsImage from './../assets/next.svg';
import viteImage from './../assets/vite.svg';
import quranImage from './../assets/quran.png';
import emailImage from './../assets/Email.png';

const HomePage = () => {
    return (
        <main className='px-4 w-full' id='home'>
            <div className='flex w-full justify-center pt-[80px] h-screen'>
                <div className='container py-32'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-2xl lg:ml-[100px] lg:mt-[100px] font-serif'>
                                HELLO THERE!!
                            </h1>
                            <div className='text-sky-500 font-semibold lg:ml-[100px] lg:mt-[50px]'>
                                <TypeWritter
                                    text='Hi👋, My Name is Rifqi Alisba Garwita Sutrisno'
                                    speed={100}
                                    fontSize={20}
                                    clearMessageSpeed={40}
                                    loop={true}
                                />
                                <TypeWritter
                                    text='Welcome To My Portfolio Website!'
                                    speed={100}
                                    fontSize={20}
                                    clearMessageSpeed={40}
                                    loop={true}
                                />
                                <TypeWritter
                                    text='Hope You Like My Portfolio!'
                                    speed={100}
                                    fontSize={20}
                                    clearMessageSpeed={40}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className='hidden lg:block mr-10'>
                            <img
                                src={profileImage}
                                alt=''
                                className='rounded-lg w-[400px] h-[400px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='flex w-full justify-center h-full pt-[100px]'
                id='projects'
            >
                <div className='container'>
                    <h2 className='font-bold uppercase text-center text-lg'>
                        my projects
                    </h2>
                    <div className='flex justify-center flex-wrap gap-5 py-4'>
                        <Card
                            image={quranImage}
                            title='Quran Web'
                            description="A web app that provides information about surah quran. you can search surah here or you can browse all the surah. but in this website you can't bookmark etc becase it's only for showing quran surah."
                            link='https://github.com/sirWerq/react-quran'
                        />
                        <Card
                            image={bookshelfImage}
                            title='To Do Web'
                            description='A web app that provides information about your to do list. you can search your to do list here or you can browse all your to do list also in this website you can bookmark, edit, delete, and add or replace your to do list.'
                            link='https://github.com/sirWerq/bookshelf-react-tailwind'
                        />
                        <Card
                            image={animelistImage}
                            title='AnimeList Web'
                            description='A web app that provides information about animes. you can search animes here or you can browse all the animes. only for anime list. [you can see this website by clicking the button and in the future more feature will updated]'
                            link='https://jikan-react.vercel.app/'
                        />
                    </div>
                    <div className='text-end lg:mr-44'></div>
                </div>
            </div>
            <div
                className='flex w-full justify-center lg:pt-[250px] h-full lg:h-screen'
                id='skills'
            >
                <div className='container'>
                    <h2 className='font-bold uppercase text-center text-lg'>
                        Skills
                    </h2>
                    <div className='flex justify-center flex-wrap lg:grid lg:grid-cols-5 lg:pl-[140px] items-center gap-4 lg:gap-9 py-3'>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a href='https://react.dev/learn' target='_blank'>
                                <img
                                    src={reactImage}
                                    alt='react'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a href='https://tailwindcss.com' target='_blank'>
                                <img
                                    src={tailwindImage}
                                    alt='tailwind'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a
                                href='https://www.w3schools.com/js/'
                                target='_blank'
                            >
                                <img
                                    src={jsImage}
                                    alt='javascript'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a
                                href='https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html'
                                target='_blank'
                            >
                                <img
                                    src={tsImage}
                                    alt='typescript'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a
                                href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                                target='_blank'
                            >
                                <img
                                    src={htmlImage}
                                    alt='html'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a
                                href='https://getbootstrap.com/docs/4.1/getting-started/introduction/'
                                target='_blank'
                            >
                                <img
                                    src={bootstrapImage}
                                    alt='bootstrap'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a href='https://vitejs.dev/' target='_blank'>
                                <img
                                    src={viteImage}
                                    alt='vite'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a
                                href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                                target='_blank'
                            >
                                <img
                                    src={cssImage}
                                    alt='css'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[120px] h-[120px] bg-slate-900 rounded-md group'>
                            <a href='https://nextjs.org/docs' target='_blank'>
                                <img
                                    src={nextjsImage}
                                    alt='next js'
                                    className='w-[100px] h-[100px] grayscale group-hover:grayscale-0'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center h-full mt-4'>
                <div className='container'>
                    <h2 className='font-bold uppercase text-center text-lg mb-4'>
                        Education
                    </h2>
                    <div className='px-10 lg:pl-[140px]'>
                        <Timeline />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center h-full pt-10 lg:pt-[250px]'>
                <div className='container'>
                    <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
                        <div
                            className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
                            aria-hidden='true'
                        >
                            <div
                                className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            ></div>
                        </div>
                        <div
                            className='mx-auto max-w-2xl text-center py-12'
                            id='contact'
                        >
                            <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                                Get in Touch
                            </h2>
                            <p className='mt-4 text-lg leading-8 text-gray-600'>
                                Feel free to reach out for more information or
                                collaboration opportunities!
                            </p>
                            <div className='mt-6 flex justify-center items-center space-x-4'>
                                <div className='flex items-center space-x-2'>
                                    <img
                                        src={emailImage}
                                        alt='next js'
                                        className='w-[40px] h-[40px] grayscale group-hover:grayscale-0'
                                    />
                                    <p className='text-gray-700 font-medium'>
                                        Email:{' '}
                                        <a
                                            href='mailto:rifqx1904@gmail.com'
                                            className='text-blue-600 hover:text-blue-500 transition duration-300'
                                        >
                                            rifqx1904@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <a
                                    href='mailto:rifqx1904@gmail.com'
                                    className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-300'
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
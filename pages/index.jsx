/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1  from '../public/web1.png';
import web2  from '../public/web2.png';
import web3  from '../public/web3.png';
import web4  from '../public/web4.png';
import web5  from '../public/web5.png';
import web6  from '../public/web6.png';
import { useState } from 'react';
import { motion } from "framer-motion";
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={ darkMode ? "dark text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80" : "h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200 scrollbar-thumb-[#F7AB0A]/80" }>
      <Head>
        <title>Pablo | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-[rgb(36,36,36)]'>
        <section id="hero" className='snap-start'>
          <nav className='py-10 mb-12 flex justify-between'>
            <motion.img
              initial={{
                x: -100,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 1.5
              }}
              className='text-xl font-burtons dark:text-gray-400 h-16 w-16' // Work In Progress
              src='https://www.iconpacks.net/icons/1/free-icon-rocket-1206.png'
              alt=''>
            </motion.img>
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 1.5
              }}
            >
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-400'/></li>
                <li>
                  <a className='bg-yellow-500 text-black px-4 py-2 rounded-md ml-8 dark:text-gray-800' href='#'>
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          </nav>
            <Hero />
        </section>

        <section id='about' className='snap-center dark:text-gray-400'>
          <About />
        </section>

        <section id='experience' className='snap-center dark:text-gray-400'>
          <WorkExperience />
        </section>

        <section id='skills' className='snap-start dark:text-gray-400'>
            <Skills />
        </section>

        <section id='projects' className='snap-start dark:text-gray-400'>
          <Projects />
        </section>

        <section id='Contact' className='snap-start dark:text-gray-400'>
          <ContactMe />
        </section>


        {/* <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-600'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div> */}


      {/* <section className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
        </div>
      // </section> */}
      </main>
    </div>
  );
}

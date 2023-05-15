/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
// import web1  from '../public/web1.png';
import { useState } from 'react';
import { motion } from "framer-motion";
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const PDF_RESUME = 'https://media.licdn.com/dms/document/D4E2DAQHg2-xakmC9Ew/profile-treasury-document-pdf-analyzed/0/1682693411298?e=1684972800&v=beta&t=iLMdwIQ5BW3YkYNOMhA-9AHgJnfHlh6dkaDga81OcmI'

  const downloadResume = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className={ darkMode ? "h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200 scrollbar-thumb-[#F7AB0A]/80" : "dark text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80" }>
      <Head>
        <title>Pablo 💻 Frontend Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-10 dark:bg-[rgb(36,36,36)]'>
        <nav className='sticky top-0 p-5 flex justify-between z-20 max-w-7xl mx-auto xl:items-center'>
          <motion.div
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
            }}>
            <SocialIcon
              url="https://www.linkedin.com/in/pabloescales/"
              fgColor='gray'
              bgColor='transparent'
              target="_blank"
            />
            <SocialIcon
              url="https://github.com/PabloEscales"
              fgColor='gray'
              bgColor='transparent'
              target="_blank"
            />
          </motion.div>

          <Link href='#contact'>
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
                  <a className='bg-yellow-500/80 text-black px-3 flex py-2 rounded-md ml-8 dark:text-gray-800' href='#' download='Resume Pablo Escales Frontend Web Developer' onClick={() => {downloadResume(PDF_RESUME)}} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                    &nbsp; CV
                  </a>
                </li>
                <li>
                  <a className='bg-yellow-500/80 text-black px-4 flex py-2 rounded-md ml-8 dark:text-gray-800' href='#'>
                    ✉️
                  </a>
                </li>
              </ul>
            </motion.div>
          </Link>
        </nav>

        <section id="hero" className='snap-start dark:text-gray-400'>
          <Hero />
        </section>

        <section id='about' className='snap-center dark:text-gray-400'>
          <About />
        </section>

        <section id='experience' className='snap-center dark:text-gray-400'>
          <WorkExperience />
        </section>

        <section id='projects' className='snap-start dark:text-gray-400'>
          <Projects />
        </section>

        <section id='skills' className='snap-start dark:text-gray-400'>
          <Skills />
        </section>

        <section id='contact' className='snap-start dark:text-gray-400'>
          <ContactMe />
        </section>

        <Link href='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <img
                className='h-10 w-16 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'
                alt=''
              />
            </div>
          </footer>
        </Link>
      </main>
    </div>
  );
}

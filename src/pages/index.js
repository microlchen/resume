import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> CV </title>
        <link rel="icon" href="/gitcat.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <section className={styles.flex}>
            <h1 className={styles.h1}>
              MICROL CHEN
            </h1>
            <p className={styles.type}>Contacts: microl.chen@emory.edu &nbsp; | &nbsp; 404&nbsp;-&nbsp;642&nbsp;-&nbsp;7703</p>
            <br />
            <h2 className={styles.h2}>EDUCATION</h2>
            <hr className={styles.divider} />
            <h3 className={styles.subhead}> Emory University, College of Arts and Science</h3>
            <p className={styles.type}> <b>Major:&nbsp;&nbsp;</b> Computer Science</p>
            <p className={styles.type}> <b>Courses:&nbsp;&nbsp;</b> Data Structures and Algorithms;&nbsp; Computer Architecture;&nbsp; Analysis of Algorithms;&nbsp; Linear Algebra;&nbsp; Computational Linguistics;&nbsp; Data Mining;&nbsp; HTML/CSS & JavaScript (Duke University)</p>
            <p className={styles.type}> <b>Organizations:&nbsp;&nbsp;</b> Volunteer Emory;&nbsp; Emory RHA;&nbsp; Emory Robotics Club</p>
            <p className={styles.type}> <b>Honors:&nbsp;&nbsp;</b> Gilman’s Scholar (2023) Quest Bridge Scholar (2020)</p>

            <br />
            <h2 className={styles.h2}>WORK EXPERIENCE</h2>
            <hr className={styles.divider} />
            <h3 className={styles.subhead}> Emory University, SAAC Facility</h3>
            <p className={styles.type}> <i>Supervisor</i></p>
            <ul className={styles.indent}>
              <li className={styles.type}>● Trained and supervised attendants in a variety of different tasks including (but not limited to) using facility software, standard customer service practices, and adhering to company policies.</li>
              <li className={styles.type}>● Work a minimum of 20 hours per week with duties such as supervising attendants, answering phone calls, and resolving conflicts.</li>
            </ul>

            <br />
            <h3 className={styles.subhead}> Emory University, The Hong Lab</h3>
            <p className={styles.type}> <i>Undergraduate Researcher and Lab Assistant</i></p>
            <ul className={styles.indent}>
              <li className={styles.type}>● Performed DNA/RNA sequencing and PCR for genes in the BAF complex.</li>
              <li className={styles.type}>● Analyzed and visualized data using R to identify pathways and genes affected by the loss of SMARCB1.</li>
            </ul>
            <br />

            <h2 className={styles.h2}> RELEVANT PROJECTS </h2>
            <hr className={styles.divider} />
            <h3 className={styles.subhead}> MusAIc – Music Sharing Web Application</h3>
            <p className={styles.type}> <i>Full Stack Developer</i></p>
            <ul className={styles.indent}>
              <li className={styles.type}>● Collaborated with seven other students to build a working web application that helps Spotify users create custom playlists, find friends, and discover new music.</li>
              <li className={styles.type}>● Learned/Utilized MUI, React, and Figma for front-end development.</li>
              <li className={styles.type}>● Learned/Utilized Flask and Python for back-end development.</li>
              <li className={styles.type}>● Learned/Utilized GitHub for production and Vercel for deployment.</li>
            </ul>
            <br />
            <h3 className={styles.subhead}> Kindred – A Conversational AI Companion Bot</h3>
            <p className={styles.type}>#Python #Emora STDM</p>
            <ul className={styles.indent}>
              <li className={styles.type}>● Collaborated with three other members to build a conversation ai capable of identifying students in need of mental health support, and giving social support by acting as a companion for those who are lonely. </li>
              <li className={styles.type}>● Worked extensively with Emora STDM, macros, and regular expressions.</li>
            </ul>
            <br />

            <h2 className={styles.h2}> TECHNICAL SKILLS AND TOOLS </h2>
            <hr className={styles.divider} />
            <div className={styles.grid}>
              <section className={styles.card}>
                <h2 className={styles.type1}>Languages</h2>


                <p className={styles.type}>&nbsp;&nbsp;● HTML </p>
                <p className={styles.type}>&nbsp;&nbsp;● CSS</p>
                <p className={styles.type}>&nbsp;&nbsp;● JavaScript</p>
                <p className={styles.type}>&nbsp;&nbsp;● Java</p>
                <p className={styles.type}>&nbsp;&nbsp;● Python</p>
                <p className={styles.type}>&nbsp;&nbsp;● C</p>
                <p className={styles.type}>&nbsp;&nbsp;● R</p>

              </section>
              <section className={styles.card}>
                <h2 className={styles.type1}>Frameworks</h2>
              

                  <p className={styles.type}>&nbsp;&nbsp;● React </p>
                  <p className={styles.type}>&nbsp;&nbsp;● Material UI - MUI</p>
                  <p className={styles.type}>&nbsp;&nbsp;● Flask</p>

             
              </section>
              <section className={styles.card}>
                <h2 className={styles.type1}>Tools</h2>
            

                  <p className={styles.type}>&nbsp;&nbsp;● Figma </p>
                  <p className={styles.type}>&nbsp;&nbsp;● Git/GitHub</p>
                  <p className={styles.type}>&nbsp;&nbsp;● Vercel</p>
           
              </section>
              <section className={styles.card}>
                <h2 className={styles.type1}>Personal Interest Skills</h2>
               

                  <p className={styles.type}>&nbsp;&nbsp;● Lightworks - Video Editing </p>
                  <p className={styles.type}>&nbsp;&nbsp;● Languages - Intermediate Chinese/Korean</p>
                  <p className={styles.type}>&nbsp;&nbsp;● Microsoft Excel</p>
                  <p className={styles.type}>&nbsp;&nbsp;● Bloomberg Market Concepts Certificate</p>
                
              </section>
            </div>

            <br />
          </section>


        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/microlchen"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >

            <Image
              src="/gitcat.svg"
              alt="13"
              width={40}
              height={40}
              priority
            />

            <h2 className={inter.className}>
              GitCats
            </h2>
            <p className={inter.className}>
              Full repositories of completed projects, colaborations, courseworks.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/microl-chen/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="13"
              width={40}
              height={40}
              priority
            />
            <h2 className={inter.className}>
              LinkedIn
            </h2>
            <p className={inter.className}>
              Connect on LinkedIn for referrals - both for and from me.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/task.svg"
              alt="13"
              width={40}
              height={40}
              priority
            />
            <h2 className={inter.className}>
              Project Portfolio
            </h2>
            <p className={inter.className}>
              Explore my professional and personal projects, and test them out in real time.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/search.svg"
              alt="13"
              width={40}
              height={40}
              priority
            />
            <h2 className={inter.className}>
              Career Records
            </h2>
            <p className={inter.className}>
              A full list of my employment history for whom it may concern.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

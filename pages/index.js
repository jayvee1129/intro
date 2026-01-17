import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Greetings and welcome to my website! I'm John Victor Salac, A 3rd year BSIT-3A Student at the University of the Assumption.</p>
        <p className={utilStyles.Question}>When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) 
          or how it (databases, user authentication, logic)? Explain why.</p>

        <p>A perfect website to me, is one that will have strong back end functionality as well as smooth front end features. 
          Even if a website is visually appealing with complex animations, its true potential will be lost if it runs slowly. 
          Proper database management, a logical system flow, and secure user authentication will keep a website from losing value. 
          A good design is not the only thing that makes a website high quality and valuable. 
          Strong functionality will keep a website from falling to the wayside and making it a website that runs efficiently, and meets the needs of the user.</p>

          <p className={utilStyles.Question}>Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?</p>
          <p>Because of my strong interest in these technologies, I am extremely excited to be learning about React, Node.js and Next.js. 
            React excites me as it is perfect for building dynamic and interactive user interfaces. 
            Node.js also excites me as it is perfect for handling efficient server-side logic. 
            Next.js is the one that excites me the most as it brings together server-side logic and dynamic user interface design. 
            Learning these technologies is exactly what I have been hoping to do in order to understand every end of a website.</p>

          <p className={utilStyles.Question}>What is one specific feature you’ve seen on a modern website that you’ve always wondered how to build?</p>
          <p>A feature I have always found interesting and wanted to learn to build is real-time updates on websites. 
            Live notifications and content changes without refreshing the page are intriguing. 
            Live chats and real-time dashboards are examples of how data is sent and received. 
            I wanted to learn how interactive web applications work and this is one version of that.</p>
          <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Arquivo para Testar Deploy Automatizado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed bibendum nunc, in molestie enim. Phasellus convallis risus quis metus efficitur, 
          in volutpat erat cursus. Proin fringilla dapibus ex quis tempor. Vivamus eros ex, scelerisque sed porta eget, commodo id nunc. Morbi vitae neque sed 
          tellus convallis mollis et eget quam. Suspendisse facilisis, diam quis bibendum condimentum, mauris augue condimentum ipsum, vitae pellentesque orci lacus id enim. 
          Nullam hendrerit mi sed nisl consequat laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel felis pellentesque mi vestibulum semper. 
          Pellentesque ultricies quam vel pharetra suscipit. Pellentesque et turpis faucibus, egestas neque eget, interdum leo. Integer leo ex, tincidunt et est at, 
          pellentesque lacinia diam.
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            Igreja Universal do Reino de Deus
          </span>
        </a>
      </footer>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Content from '../components/Content'

const App = () => {
  return (
    <div className='flex flex-col items-center sm:justify-center bg-[hsl(226,43%,10%)] text-white sm:w-screen sm:h-screen pt-[50px] sm:p-0'>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/x-icon" />
        <title>Frontend Mentor | Time Tracking Dashboard</title>
      </Head>

      <Content />

      <footer className='sm:absolute sm:bottom-0 sm:mt-0 mt-[100px] text-center text-xs mb-4'>
        <p>Challenge by
          <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            <a className='hover:underline hover:drop-shadow-[0px_0px_5px] hover:text-[hsl(236,100%,87%)]'> Frontend Mentor</a>
          </Link>.
        </p>

        <p>Coded by
          <Link href="https://github.com/GugaS1lva" target="_blank">
            <a className='hover:underline hover:drop-shadow-[0px_0px_5px] hover:text-[hsl(236,100%,87%)]'> Gustavo Silva</a>
          </Link>.
        </p>
      </footer>
    </div>
  )
}

export default App
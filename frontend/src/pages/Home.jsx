import React from 'react'
import Header from './Header'
import BotpressChat from './BotPresschat'
import Footer from './Footer'

const Home = () => {
  return (
    <div className=''>
        <Header />
        <BotpressChat />
        <marquee className="absolute top-24 font-bold text-yellow-400 md:text-[30px] shadow-lg" behavior="scroll" direction="left"><span className='text-cyan-400'>Welcome</span> to Basaveshwar Engineering College, Bagalkote</marquee>
        <div className='w-full h-full flex justify-center items-center'>
            <img className='h-[100vh]' src="/college.jpeg" alt="" />
        </div>
        <Footer />
    </div>
  )
}

export default Home
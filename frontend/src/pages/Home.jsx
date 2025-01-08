import React from 'react'
import Header from './Header'
import BotpressChat from './BotPresschat'

const Home = () => {
  return (
    <div className=''>
        <Header />
        <BotpressChat />
        <div className='w-full h-full flex justify-center items-center'>
            <img className='h-[100vh]' src="/college.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Home
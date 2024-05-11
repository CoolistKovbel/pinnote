import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='p-10'>

       <header className=' mb-10 font-bold'>
            <h2 className='text-4xl md:text-8xl mb-2'>Pinnote NFT Collection</h2>
            <p className='text-2xl'>Grab your own piece of art from the pinnote collection a very special piece called , Panic Kitty</p>
        </header> 

        {/* Carrosal */}
        <div className='w-[300px] h-[300px] relative mx-auto'>
            <Image src="/67.png" alt="image nft" fill  className='rounded-lg dropshadow-lg'/>
        </div>

        
        <div>
            <h2>Panic Kitty</h2>
            <p></p>
        </div>




    </div>
  )
}

export default Page
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

function Banner() {

  const router = useRouter();

  const pushSearchForFlexible =() => {
    router.push({
      pathname: '/search',
      query: {
        input: "Paradise",
        startingDate: new Date().toDateString(),
        lastDate: new Date().toDateString(),
        guests: 1
      }
    })
  }
  return (
    <div className='relative h sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src='https://i.imgur.com/UNxcdFY.jpg '  fill className="object-cover"/>
        <div className=' absolute top-1/2 w-full text-center'>
            <p className='text-lg text-black'>Кахетия — родина вина, чачи и красоты!</p>
            {/* <button 
            onClick={()=>pushSearchForFlexible()}
            className='mt-2 text-purple-500 bg-white text-lg shadow-md py-4 hover:scale-105 transform transition duration-300 ease-out active:scale-95 hover:shadow-lg active:shadow-sm px-8 rounded-full active:text-green-500'>I am Flexible</button> */}
        </div>
    </div>
  )
}

export default Banner
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

function MediumCard({img, location, title}) {

  const router = useRouter();

  

  const pushSearchForExplore =(place) => {
    router.push({
      pathname: '/reserve',
      query: {
        input: place,
        startingDate: new Date().toDateString(),
        lastDate: new Date().toDateString(),
        guests: 1
      }
    })
  }


  return (
    <div onClick={()=>pushSearchForExplore(location)}  className='p-3 hover:scale-105 transition transform duration-200 ease-out hover:text-white'>
        <div className='relative h-80 w-80'>
            <Image src='https://i.imgur.com/yb46XqL.jpeg' fill className='object-contain rounded-lg'/>
        </div>
        <p className='mt-2 text-2xl'>{title}</p>
    </div>
  )
}

export default MediumCard
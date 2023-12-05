import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stripe from 'stripe'
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/24/solid"
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'
import Head from 'next/head'

const stripePromise = loadStripe(process.env.stripe_public_key);


function Reserve() {
  const router = useRouter();
  const {title ,description, image, price, location, star, guests, nights, startingDate, lastDate, startingDay, endingDay} = router.query;
 
  const [totalNights, setTotalNights] = useState(1)
  const [totalPrice, setTotalPrice] = useState(1)
  const [cleaningFee, setCleaningFee] = useState(1)
  const [serviceFee, setServiceFee] = useState(1)
  const [taxes, setTaxes] = useState(1)
  const [total, setTotal] = useState(1)
  const [startDateFormat, setStartDateFormat] = useState(1)
  const [lastDateFormat, setLastDateFormat] = useState(1)

  const createReserveSession = async () => {
    const stripe = await stripePromise;
    const reserveSession = await axios.post('/api/checkout_sessions', {
      totalVal: total,
      title: title,
      imgSrc: image,
      desc: description
    })

    const result = await stripe.redirectToCheckout({
      sessionId: reserveSession.data.id
    })

    if(result.error){
      console.log(result.response.data);
    }
  }
  


  const puttingData = async () => {
    setStartDateFormat(await startingDay);
    setLastDateFormat(await endingDay);
    setTotalNights(await nights);
    setTotalPrice(await totalNights * parseInt(price));
    setCleaningFee(await (totalPrice/15).toFixed(2));
    setServiceFee(await (totalPrice/64.777).toFixed(2));
    setTaxes(await(totalPrice/7.2).toFixed(2));
    setTotal(await (parseInt(taxes)+parseInt(serviceFee)+parseInt(cleaningFee)+parseInt(totalPrice)).toFixed(2));
  }
puttingData();

    console.log();

  return (
    <div>
      <Head>
        <title>Hipster</title>
        <link rel="icon" href="https://i.imgur.com/ZNKoZzY.png" />
      </Head>
        <Header />
        <main>
        <section className=' pl-3 pt-5 space-x-2 flex flex-col max-w-7xl mx-auto px-8 sm:px-18'>
            <h2 className=' pb-3 text-semibold text-6xl'>
              {title}
            </h2>
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <div className='relative sm:h-[220px]  lg:h-[20px] xl:h-[400px] 2xl:h-[500px] lg:w-min-[600px]'>
                  <Image src='https://i.imgur.com/8lJtv0s.jpg'fill className='object-cover min-w-[600px] rounded-xl'/>
                </div>
                <div className='flex justify-between mt-5'>
                <div className=''>
                <div className='flex justify-between'>
                <h1 className='text-4xl'>{`${location}`}</h1>
                <div className='flex'>
                <StarIcon className='text-yellow-300 h-9 my-auto'/>
                <h1 className='text-4xl font-semibold'>{`${star}`}</h1>
                </div>
              </div>
                <div className='w-[80%]'>
                <h3 className='text-lg mt-40 hidden lg:inline'>{description}</h3>

                </div>
            </div>
              
            </div>
              </div>
            
              <div className='border-2 p-5 rounded-xl min-w-[300px]'>
                <div className='flex justify-between'>
                <h1>{`$${price}`}</h1>
                <div className='flex'>
                <StarIcon className='text-yellow-300 h-5 my-auto'/>
                <h3>{star}</h3>
                </div>

                </div>
              <div className='border-2 rounded-xl mt-4'>
                <div className='flex border-b-2'>
                  <div className='flex-grow border-r-2 space-y-1 p-2'>
                    <h4 className='text-xs'>CHECK-IN</h4>
                    <h3 className='text-sm'>{startDateFormat}</h3>
                  </div>
                  <div className='flex-grow space-y-1 p-2'>
                    <h4 className='text-xs'>CHECK-OUT</h4>
                    <h3 className='text-sm'>{lastDateFormat}</h3>
                  </div>
                </div>
                <div className='p-2 space-y-1'>
                  <h4 className='text-xs'>GUESTS</h4>
                <h3 className='text-sm'>{guests}</h3>
                </div>
              </div>
              <button /* onClick={createReserveSession}*/ className='text-black bg-white transform transition duration-300 ease-out hover:scale-105 active:scale-95 w-full rounded-lg py-2 px-3 mt-3 font-semibold'>Reserve</button> 
              <div className='mt-2 space-y-1'>
                <div className='flex justify-between'>
                <h3>{`$${price}X${totalNights} nights`}</h3>
                <h3>{`$${totalPrice}`}</h3>
                </div>
                <div className='flex justify-between'>
                <h3>Cleaning fee</h3>
                <h3>{`$${cleaningFee}`}</h3>
                </div>
                <div className='flex justify-between'>
                <h3>Service fee</h3>
                <h3>{`$${serviceFee}`}</h3>
                </div>
                <div className='flex justify-between border-b-2 pb-2'>
                  <h3>Taxes</h3>
                  <h3>{`$${taxes}`}</h3>
                </div>

                <div className='flex justify-between border-b-2 pb-2'>
                  <h3>Total</h3>
                  <h3>{`$${total}`}</h3>
                </div>
              </div>
              </div>
            </div>
            
            {/* <div className='mt-10 bg-red-800 max-w-2xl px-5 py-2 rounded-lg'>
              <p className='text-3xl text-white'>Attention Users ⚠️</p>
          <p className='text-white font-semibold'>Please do not make any payment, this is just a demo application showing its capability for real-time payments on <span className='text-white font-extrabold text-lg'>dummy data!</span></p>
          <p className='font-semibold text-white'>-Dev</p>
        </div> */}
          </section>
          
        </main>
        
        <Footer />
    </div>
  )
}

export default Reserve
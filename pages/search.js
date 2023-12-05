import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import InfoCard from '../components/InfoCard';
import MapContainer from '../components/MapContainer';
import Head from 'next/head'

function Search({data}) {
    const [moreFilters, setMoreFilters] = useState(false);
    const router = useRouter();
    const {input, startingDate, lastDate, guests} = router.query;
    const range = `${startingDate} - ${lastDate}`;
    const styles = {
        filterButtons: "border-2 py-2 space-x-3 px-4 mx-3 rounded-full hover:scale-105 active:text-black active:bg-white active:scale-95 cursor-pointer transform transition duration-300 ease-out"
    }
  return (
    <div>
      <Head>
        <title>Tripster</title>
        <link rel="icon" href="https://i.imgur.com/ZNKoZzY.png" />
      </Head>
        <Header />
        <main className='pt-10 flex'>
          <section className='px-5'>
          <h3>{`300+ stays - ${range} - for ${guests} guests`}</h3>
            <h2 className='text-semibold text-4xl'>{`Stay in ${input}`}</h2>
            <div className='flex mt-5 whitespace-nowrap overflow-x-scroll cursor-pointer py-3 scrollbar-hide max-w-[800px]'>
                <p className={styles.filterButtons}>Cancellation Flexibility</p>
                <p className={styles.filterButtons}>Type of Place</p>
                <p className={styles.filterButtons}>Price</p>
                <p className={styles.filterButtons}>Rooms and Beds</p>
                {!moreFilters ? (
                <p onClick={()=>setMoreFilters(true)} className={styles.filterButtons}>More Filters</p>
                )
                  : <>
                  <p className={styles.filterButtons}> Property Type</p>
                <p className={styles.filterButtons}>Amenties</p>
                <p className={styles.filterButtons}>Instant Booking</p>
                <p className={styles.filterButtons}>Self check-in</p>
                <p className={styles.filterButtons}>Accessibility</p>
                <p className={styles.filterButtons}>Host Language</p>
                  </>}
            </div>

            <div className='mt-5 p-5'>
                {data.map(({title, img,  location, description, star, price, total, long, lat})=>{
                    return <InfoCard key={img} title={title} img={img} location={location} description={description} star={star} price={price} total={`$${total.slice(1)}`} long={long} lat={lat} startingDate={startingDate} lastDate={lastDate} guests={guests}/>
                })}
                
            </div>

        </section>    
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <MapContainer searchResult={data}/>
        </section>
    </main>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {

    const data = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res=>res.json());
    return {
      props: {
        data
       
      }, 
    }
}

export default Search
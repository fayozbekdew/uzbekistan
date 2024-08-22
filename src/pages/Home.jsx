import React from 'react'
import UzbSvgComponent from '../component/UzbSvgComponent'

function Home() {
  return (
    <div className='w-wull h-full flex items-center justify-between'>
        <UzbSvgComponent/>
        <div className="w-[400px] text-center">
          <h1 className="text-xl font-bold mb-3">
            O'zbekiston joylashuvi
          </h1>
          <p className="">
          Oʻzbekiston Markaziy Osiyodagi quruq, quruqlikka chiqmaydigan davlat boʻlib, katta choʻllarga ega. U beshta davlat, jumladan shimolda Qozog'iston, shimoliy-sharqda Qirg'iziston, janubiy-sharqda Tojikiston, janubda Afg'oniston va janubiy-g'arbda Turkmaniston bilan chegaradosh.
         Toshkent Oʻzbekistonning poytaxti va eng yirik shahri boʻlib, shimoliy-sharqda Qozogʻiston bilan chegarada joylashgan. Boshqa yirik shaharlarga Samarqand, Fargʻona va Namangan kiradi.
          </p>
        </div>
    </div>
  )
}

export default Home
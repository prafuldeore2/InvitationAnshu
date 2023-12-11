'use client'
/* eslint-disable */

import Image from 'next/image'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
// @ts-ignore
import AOS from 'aos'
// @ts-ignore
import BannerImage1 from '../public/Images/BannerImage.jpeg'
// @ts-ignore
import Image1 from '../public/Images/BannerImage.jpeg'
// @ts-ignore
import Song from '../public/Music/marathiSong1.wav'
import CountdownTimer from './Componets/time'

const Home = () => {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="">
      <div className="relative flex flex-col justify-center items-center">
        {/* Sticky Image */}
        <div className="w-full h-auto fixed top-0 z-[-1] before:w-full before:h-full before:bg-website-black before:opacity-[0.5] before:z-10 before:top-0 before:left-0 before:absolute">
          <Image
            src={BannerImage1}
            objectFit="cover"
            alt="Picture of the author"
            className="w-full "
          />
        </div>

        {/* Content on top of the Image */}
        <div className="absolute top-[350px] flex flex-col justify-center items-center z-[1] w-full">
          <div
            className="flex flex-col justify-center items-center"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <p className="text-[40px]  text-white font-Impact tracking-[0.8px]">
              We are getting married
            </p>
            <p className="text-[52px]  text-white font-MontserratSemiBold">
              Anjor & Praful
            </p>
            <p className="text-[28px]  text-white font-MontserratSemiBold">
              Save The Date
            </p>
            <p className="text-[24px]  text-white font-MontserratSemiBold">
              17-09-2023
            </p>
          </div>
          {/* Audio Element */}

          <div
            className="flex flex-col justify-center items-center border mt-[180px] w-full "
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <div className="w-full flex justify-center items-center">
              <audio controls className="">
                <source src={Song} type="audio/wav" />
                Your browser does not support the audio tag.
              </audio>
            </div>
            {/* //*Section -1 */}
            <div className="mt-[200px] flex w-full bg-website-white">
              {/* //*left */}
              <div
                className="w-[50%] border"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="max-w-[95%] w-full">
                  <Image
                    src={Image1}
                    objectFit="cover"
                    alt="Picture of the author"
                    className="w-full "
                  />
                </div>
              </div>
              {/* //*right */}
              <div
                className="w-[50%] pl-[50px]"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <p className="text-[65px] font-industryBold text-left text-website-navy">
                  BRIDE & GROOM
                </p>
                <p className="text-[35px] font-industryDemi mt-[20px] max-w-[80%] w-full text-website-darkBlue">
                  Join Anjor & Praful On The 4th of February to Celebrate Their
                  Union
                </p>
                <p className="text-[25px] font-abolitionOblique text-website-darkBlue border-l-[2px] border-website-red mt-[50px] pl-[25px] max-w-[80%] w-full">
                  Love in marriage is the beautiful melody that two hearts
                  compose together, a symphony of shared dreams, whispered
                  promises, and the harmonious dance of souls choosing each
                  other every day.
                </p>
              </div>
            </div>

            {/* //*Section -2 */}
            <div className="pt-[200px] pb-[50px] flex flex-col justify-center items-center w-full bg-website-white ">
              <p
                className="text-website-red font-bold font-abolitionOblique   font text-[55px] tracking-[1px]"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                OUR LOVE STORY
              </p>
              <p
                className="text-[25px] text-website-lightBlue mt-[70px] px-[250px] text-center font-abolitionOblique"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                We've been together for eight years, and it's been a mix of good
                times and tough moments. From getting to know each other to
                facing challenges, our love has grown stronger. The hard times
                taught us lessons and made us closer. We shared laughter in
                happy moments and supported each other through difficulties.
                Now, as we're about to get married, we're thankful for the
                experiences that shaped us. Our story is all about sticking
                together through thick and thin, and we're excited about what
                the future holds. Hand in hand, we're ready for the next chapter
                of our journey.
              </p>
            </div>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
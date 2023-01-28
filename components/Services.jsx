import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { bounceUp, staggerDropIn } from '@/helpers/transitions'
import { Swiper, SwiperSlide } from 'swiper/react'

let landingList = [
  '1-3 fully responsive pages',
  'Smooth, attractive animations to set yourself apart from the competition',
  'Commercial free images and icons',
  '3 revisions',
]

let ecommerceList = [
  '3-6 fully responsive pages',
  'CMS & Backend setup for ecommerce use',
  'Optimized for SEO and user accessibility',
  '5 revisions',
]

let businessList = [
  '10 fully responsive pages include *add-on (additional-pages)',
  'CMS & Backend of your choice + Google Analytics Setup',
  'Page styles of your choosing / Design',
  '5 revisions *add-on (additional revisions)',
]

const Services = () => {
  return (
    <section id="services" className="bg-white relative z-[1]">
      <img
        src="assets/services-background.png"
        alt="services background"
        className="absolute w-full h-full inset-0 object-cover z-0 pointer-events-none"
      />
      <div className="grid grid-rows-[100px_1fr] grid-flow-row w-full h-full place-items-center relative z-[1]">
        <h3 className="text-black w-fit mx-auto italic">Services & Pricing</h3>
        <Swiper
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 7000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          spaceBetween={50}
          centeredSlides={true}
          className="w-full h-fit lg:hidden"
        >
          <SwiperSlide className="services-card bg-white">
            <h4 className="w-fit mx-auto text-[#B49386]">
              <img src="assets/icon-landingpage.svg" alt="landingpage icon" className="inline-block pr-2" />
              Landing page
            </h4>
            <h6>What You&apos;ll Get</h6>
            <ul className="list-none text-black flex flex-col gap-4">
              {landingList.map((item, index) => (
                <div key={index} className="inline-flex gap-2 items-start">
                  <img src="assets/icon-darkcheck.svg" alt="dark check" />
                  <li className="flex items-start justify-start gap-2 group link-l-r flex-col">{item}</li>
                </div>
              ))}
            </ul>
            <div className="dashed" />
            <h4>$200</h4>
            <button className="services-button bg-slate-300">Choose</button>
          </SwiperSlide>
          <SwiperSlide className="services-card bg-dark relative">
            <span className="absolute top-2 right-2 text-white text-xs border border-white rounded-2xl p-1">
              Most popular!
            </span>
            <h4 className="w-fit mx-auto text-teal">
              <img src="assets/icon-ecommerce.svg" alt="ecommerce icon" className="inline-block pr-2" />
              Ecommerce
            </h4>
            <h6 className="text-white">What You&apos;ll Get</h6>
            <ul className="list-none text-black flex flex-col gap-4">
              {ecommerceList.map((item, index) => (
                <div key={index} className="inline-flex gap-2 items-start">
                  <img src="assets/icon-lightcheck.svg" alt="dark check" />
                  <li className="flex items-start justify-start gap-2 group link-l-r flex-col text-white">{item}</li>
                </div>
              ))}
            </ul>
            <div className="dashed" />
            <h4 className="text-white">$500</h4>
            <button className="services-button bg-teal">Choose</button>
          </SwiperSlide>
          <SwiperSlide className="services-card bg-white">
            <h4 className="w-fit mx-auto text-[#B49386]">
              <img src="assets/icon-businesspackage.svg" alt="landingpage icon" className="inline-block pr-2" />
              Business
            </h4>
            <h6>What You&apos;ll Get</h6>
            <ul className="list-none text-black flex flex-col gap-0">
              {businessList.map((item, index) => (
                <div key={index} className="inline-flex gap-2 items-start">
                  <img src="assets/icon-darkcheck.svg" alt="dark check" />
                  <li className="flex items-start justify-start gap-2 group link-l-r flex-col">{item}</li>
                </div>
              ))}
            </ul>
            <div className="dashed" />
            <h5>Contact for details</h5>
            <button className="services-button bg-slate-300">Choose</button>
          </SwiperSlide>
        </Swiper>
        <div className="hidden lg:grid grid-cols-3 grid-flow-row w-full h-full place-items-center max-w-[1550px] mx-auto">
          <motion.div
            className="services-card bg-white"
            initial={{ y: 0 }}
            whileFocus={{ y: -50 }}
            whileHover={{ y: -50 }}
          >
            <h4 className="w-fit mx-auto text-[#B49386]">
              <img src="assets/icon-landingpage.svg" alt="landingpage icon" className="inline-block pr-2" />
              Landing page
            </h4>
            <h6>What You&apos;ll Get</h6>
            <ul className="list-none text-black flex flex-col gap-4">
              {landingList.map((item, index) => (
                <div key={index} className="inline-flex gap-2 items-start">
                  <img src="assets/icon-darkcheck.svg" alt="dark check" />
                  <li className="flex items-start justify-start gap-2 group link-l-r flex-col">{item}</li>
                </div>
              ))}
            </ul>
            <div className="dashed" />
            <h4>$200</h4>
            <button className="services-button font-hind bg-slate-300">Basic</button>
          </motion.div>
          <motion.div
            className="services-card bg-dark"
            initial={{ y: 0 }}
            whileFocus={{ y: -50 }}
            whileHover={{ y: -50 }}
          >
            <span className="absolute top-2 right-2 text-white text-xs border border-white rounded-2xl p-1">
              Most popular!
            </span>
            <h4 className="w-fit mx-auto text-teal">
              <img src="assets/icon-ecommerce.svg" alt="ecommerce icon" className="inline-block pr-2" />
              Ecommerce
            </h4>
            <h6 className="text-white">What You&apos;ll Get</h6>
            <ul className="list-none text-black flex flex-col gap-4">
              {ecommerceList.map((item, index) => (
                <div key={index} className="inline-flex gap-2 items-start">
                  <img src="assets/icon-lightcheck.svg" alt="dark check" />
                  <li className="flex items-start justify-start gap-2 group link-l-r-w flex-col text-white">{item}</li>
                </div>
              ))}
            </ul>
            <div className="dashed" />
            <h4 className="text-white">$500</h4>
            <button className="services-button font-hind bg-teal">Standard</button>
          </motion.div>
          <motion.div
            className="services-card bg-white"
            initial={{ y: 0 }}
            whileFocus={{ y: -50 }}
            whileHover={{ y: -50 }}
          >
            <h4 className="w-fit mx-auto text-[#B49386]">
              <img src="assets/icon-businesspackage.svg" alt="landingpage icon" className="inline-block pr-2" />
              Business
            </h4>
            <h6>What You&apos;ll Get</h6>
            <ul className="list-none text-black flex flex-col gap-0">
              {businessList.map((item, index) => (
                <div key={index} className="inline-flex gap-2 items-start">
                  <img src="assets/icon-darkcheck.svg" alt="dark check" />
                  <li className="flex items-start justify-start gap-2 group link-l-r flex-col">{item}</li>
                </div>
              ))}
            </ul>
            <div className="dashed" />
            <h5>Get a Quote</h5>
            <button className="services-button font-hind bg-slate-300">Premium</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services

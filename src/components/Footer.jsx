import React from 'react'
import { assets } from '../assets/assets'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <div className='absolute w-full p-5 bg-red-200/40 lg:pt-25 pb-10'>
      <div className='flex flex-col gap-10 justify-center items-center lg:flex-row lg:gap-15 lg:items-center xl:gap-25'>

        <div className='flex flex-col gap-1 items-center'>
          <img src={assets.logo} alt="salons in tumkur" className='w-52 h-20' />
          <div className="justify-start text-orange-700 text-lg font-bold font-jost text-center">WE DON’T CREATE BEAUTY, <br/>WE REVEAL IT TO YOU.</div>
          <div className="w-72 text-center justify-start text-black text-xs font-[500] font-['jost']">Your trusted beauty destination in Tumkur, offering a wide range of services from bridal makeovers and hair treatments to skin care, nail art, and more — all under one roof.</div>
        </div>

        <div className='flex flex-row lg:flex-col gap-8 lg:gap-3'>
          <div className='text-[16px] text-[#230A01] font-[700] font-jost'>Home</div>
          <div className='text-[16px] text-[#230A01] font-[700] font-jost'>Services</div>
          <div className='text-[16px] text-[#230A01] font-[700] font-jost'>Contact Us</div>
        </div>

        <div>
          <div className="text-orange-700 text-3xl text-center font-bold font-jost">Location</div>
          <div className="justify-start text-stone-950 text-base font-semibold font-jost leading-loose text-center mt-3">1st Floor, Anugraha Complex<br />SIT Main Road, near HP Petrol Bunk<br />Tumakuru, Karnataka – 572102</div>
        </div>

        <div>
          <div className="text-stone-950 text-2xl font-bold font-jost text-center">Glow & Connect</div>
          <div className="w-72 text-center text-stone-950 text-lg font-medium font-jost mt-3">Stay connected for updates, offers and everything that makes you glow!</div>
          <div className='flex justify-center gap-5 mt-5'>
            <a href='https://www.facebook.com/anupama.sharmanraj'><FiFacebook className='text-[#230a10] text-[30px] cursor-pointer' /></a>
            <a href='https://www.instagram.com/zion_beautyofheaven?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'><FaInstagram className='text-[#230a10] text-[30px] cursor-pointer' /></a>
            <a href={`https://wa.me/919686173447`} target='_blank'><ImWhatsapp className='text-[#230a10] text-[30px] cursor-pointer' /></a>
          </div>
        </div>
      </div>

      <div className="justify-start text-stone-950 text-base font-bold font-jost mt-20 text-center">© 2025 Zion Beauty of Heaven. All Rights Reserved. | Designed with love to celebrate the beauty in you.</div>
    </div>
  )
}

export default Footer

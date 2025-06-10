import React from 'react'
import { assets } from '../assets/assets'
import ContactFrom from '../components/ContactFrom'
import { Helmet } from 'react-helmet'

const Contact = () => {

  return (
    <div className='relative top-20 md:top-0 overflow-x-hidden bg-[#FFF7FE]'>

      <Helmet>
        <title>Contact Zion Beauty of Heaven – Best Salon in Tumkur</title>
        <meta name="description" content="Get in touch with Zion Beauty of Heaven, Tumkur. Book appointments, ask questions, or walk in for beauty consultations. We’re here to help you glow with confidence." />
        <meta name="keywords" content="beauty parlour, salon, makeup, haircut, facial, waxing, body massage, nails, hair coloring, spa, massage near me, waxing near me, hair salon near me, nail salon near me, spa near me, haircut near me, facials near me, mascara, make up, salon near me, hair dye, body massage near me, hair salon, eyeliner, make up artist near me, hair treatment near me, beauty parlour near me, eye lashes, hair gloss, makeup set, nail art designs, best spa near me, makeup artist, best face masks" />
        <meta property="og:title" content="My Page Title for Social Media" />
      </Helmet>

      <div className='relative bg-white'>
        {/* banner bg */}
        <div className='realtive z-1 flex flex-col justify-around w-full h-[80vh] md:h-[70vh] lg:h-[90vh]'>
          <img src={assets.serviceBannerBg} className='w-full h-[80vh]  lg:h-[90vh]' alt="beauty parlour near me" />
        </div>

        {/* content */}
        
        <div className='absolute top-0 z-2 flex flex-col items-center justify-center gap-10 lg:gap-0 md:flex-row lg:justify-between w-full h-[80vh] lg:h-[90vh]'>
          {/* left side */}

          <div className='px-10 lg:px-20 flex justify-center align-items-center flex-col w-full h-[50%] lg:w-[60%] lg:h-full'>
            <div className="w-full text-black text-3xl text-center lg:text-[50px] font-bold font-jost lg:ml-10">Contact Us</div>
            <div className="w-full text-black text-sm text-center lg:text-[20px] font-normal font-jost mt-3 lg:ml-10">We’d love to connect with you! Whether you're planning a bridal makeover, looking for a relaxing beauty treatment or simply have a question about our services - we’re just a message away.</div>
          </div>
          {/* right side */}

          <div className='flex items-center justify-center w-full h-[50%] md:w-[60%] lg:w-[50%] md:h-full'>
            <img src={assets.contactBannerImage} className='w-[300px] md:w-[50%] md:absolute h-auto md:right-0 lg:top-6' alt="Eye Lashes | Tumkur" />
          </div>
        </div>
      </div>

      {/* container 2 */}
      <ContactFrom />

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4175.534831616375!2d77.1188081!3d13.329271500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c3e107db8bb%3A0x68811d248800d5ca!2sZion%20-%20Beauty%20of%20Heaven!5e1!3m2!1sen!2sin!4v1748712977329!5m2!1sen!2sin" className='w-[80%] h-[50vh] rounded-xl mx-auto my-25'></iframe>

      <div className='flex flex-col items-center justify-center lg:flex-row my-10 gap-10 lg:gap-0 mb-30 lg:mb-10'>
        {/* left side */}
        <div className='flex flex-col items-center justify-center w-full lg:w-[50%] '>
          <img src={assets.contactIcon} className='w-[62px] h-auto' alt="Best Spa Near Me | Tumkur" />
          <div className='font-jost text-[36px] lg:text-[42px] font-[700] text-black'>Join Our Team</div>
          <div className='font-jost text-[16px] lg:text-[18px] font-[400] text-center mt-4 w-[300px]'>Please send us an email telling us a  bit about us</div>
          <div className='px-3 py-2 text-[18px] lg:text-[20px] border-black border-[2px] text-center font-[700] mt-3'>zionbeautyofheaven@gmail.com</div>
        </div>
        {/* right side */}
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-start items-center'>
          <img src={assets.salonPicIn} className='w-[80%]' alt="Makeup Artist | Tumkur" />
        </div>
      </div>
    </div>
  )
}

export default Contact

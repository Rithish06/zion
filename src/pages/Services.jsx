import React from 'react'
import { assets } from '../assets/assets'
import HorizontalScroll from '../components/Horizontal'
import ContactFrom from '../components/ContactFrom'

const Services = () => {


    const bridalMakeUp = [assets.serviceScrollImg1, assets.serviceScrollImg2, assets.serviceScrollImg3, assets.serviceScrollImg5, assets.serviceScrollImg6, assets.serviceScrollImg7,]

    return (
        <div className='relative top-20 md:top-0 overflow-x-hidden bg-[#FFF7FE]'>

            {/* container 1 */}
            <div className='relative bg-white'>
                {/* banner bg */}
                <div className='realtive z-1 flex flex-col justify-around w-full h-[80vh] lg:h-[90vh]'>
                    <img src={assets.serviceBannerBg} className='w-full h-[80vh]  lg:h-[90vh]' alt="" />
                </div>

                {/* content */}

                <div className='absolute top-0 z-2 flex flex-col items-center justify-center gap-10 md:flex-row lg:justify-between lg:gap-20 w-full h-[80vh] lg:h-[90vh]'>
                    {/* left side */}

                    <div className='px-10 lg:px-20 flex justify-center align-items-center flex-col w-full h-[50%] lg:w-[50%] lg:h-full'>
                        <div className="w-full justify-start text-black text-3xl lg:text-[50px] font-bold font-jost lg:ml-20">Crafted with Care. Delivered with Passion.</div>
                        <div className="w-full justify-start text-black text-sm lg:text-[20px] font-normal font-jost mt-1 lg:ml-20">Beauty services that enhance your glow - from skin to hair, nails & more.</div>
                    </div>
                    {/* right side */}

                    <div className='flex items-end justify-end w-full h-[50%] md:w-[50%] md:h-full'>
                        <img src={assets.serviceBannerImg} className='w-[300px] md:w-[400px] lg:w-[80%] h-auto' alt="" />
                    </div>
                </div>
            </div>

            {/* container 2 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]'>
                <div className="text-center justify-start text-fuchsia-800 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Bridal Makeup</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">For Every Ceremony, A Look That Tells Your Story</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500]">BEAUTY is more than appearance; it’s how you feel. A well-crafted look enhances your features, uplifts your mood and brings out your natural confidence. <b>With over 12 years of experience and 500+ bridal makeovers,</b> each transformation is approached with care, expertise, and a deep respect for individual style. Our services are professionally delivered and affordably priced, ensuring a stress-free experience without compromising on quality.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className='flex flex-col md:flex-row md:gap-20'>
                    <ul className='list-disc'>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Bridal Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>HD Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Glossy Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Wedding Shoot Makeup</li>
                    </ul>
                    <ul className='list-disc'>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Groom Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Simple Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Waterproof Makeup</li>
                    </ul>
                </div>

                <div className="flex justify-center mb-10">
                    <button className="w-64 h-14 bg-[#b88bb2] rounded-lg text-white text-base font-bold font-jost">View Service Menu</button>
                </div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 3 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#EAFFF3]'>
                <div className="text-center justify-start text-orange-700 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Nail Extension & Nail Art</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">"Where your fingertips speak your style"</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500]">Elegant, edgy or expressive - your nails should tell your story. Let our artistry add polish to every gesture you make.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className='flex flex-col md:flex-row md:gap-20'>
                    <ul className='list-disc'>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Custom Art work</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Ombre Nails</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>3D Nail Art</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Marble Effect</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Acrylic</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Poly gel</li>

                    </ul>
                    <ul className='list-disc  mb-10'>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Full Nail Extension</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Single Colour Polish</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Foil art</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Gel extension</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Over Lay</li>
                    </ul>
                </div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 4 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]'>
                <div className="text-center justify-start text-orange-700 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Makeup Services</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">"Beauty that reflects who you are - not hides it"</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500]">From soft glam to bold elegance, our makeup enhances your natural features and brings out the confidence already within you.</div>

                    <ul className='list-disc flex flex-col items-center'>
                        <li className='text-black text-base font-jost font-[500] leading-relaxed'>Bridal Makeup: Radiant, confident, and made to last through every emotion.</li>
                        <li className='text-black text-base font-jost leading-relaxed'>Simple Makeup: Light, dewy, and perfect for everyday celebrations.</li>
                        <li className='text-black text-base font-jost leading-relaxed mb-10'>Party & Engagement Looks: Bold, playful or dramatic - whatever reflects your style.</li>
                        
                    </ul>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

             {/* container 5 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#FFE7F2]'>
                <div className="text-center justify-start text-orange-700 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Haircut & Hair Colouring</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">"New look. New light. Same you - elevated."</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10">Whether you're refreshing your cut or changing your shade, a great style isn’t just seen —<br />it’s felt in every moment that follows.</div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 6 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Hair Treatment</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">"Strong strands. Soft finish. Confident you."</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10">Dry, frizzy or lifeless? Let your hair bounce back with smoothness, strength and shine. Good hair days start here.</div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 7 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#FEFCE5]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Hair Spa</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">"A retreat for your hair. A reset for you"</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500]  mb-10">Indulge in a luxurious hair spa experience that detoxes, rehydrates, and renews — because your hair deserves as much rest as your mind.</div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 8 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[##FF7FE]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Eyelash Extension & Lifting</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Tired of mascara?</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10">Open up your eyes and your energy with beautifully lifted or voluminous lashes - subtle enough for everyday, stunning enough for every moment.</div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

             {/* container 9 */}
            <div className='flex flex-col gap-5 justify-center items-center p-7 lg:p-20 bg-[#EAECFF]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Advanced Facial</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">"Let your skin tell a fresher story"</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10">Restore your skin’s natural glow with facials designed to deeply hydrate, heal, and refresh. Because confidence begins with healthy, radiant skin.</div>

                <HorizontalScroll speed={20}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>
            
            {/* container 10 */}
            <ContactFrom />
        </div >
    )
}

export default Services

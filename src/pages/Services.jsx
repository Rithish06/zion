import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import HorizontalScroll from '../components/Horizontal'
import ContactFrom from '../components/ContactFrom'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Services = () => {

    const bridalMakeUp = [assets.bm1, assets.bm2, assets.bm3, assets.bm4, assets.bm5, assets.bm6, assets.bm7, assets.bm8, assets.bm9, assets.bm10, assets.bm11, assets.bm12, assets.bm13, assets.bm5]
    const facial = [assets.facial1, assets.facial2, assets.facial3, assets.facial4, assets.facial5, assets.facial6, assets.facial8, assets.facial9, assets.facial10, assets.facial11]
    const haircut = [assets.haircut1, assets.haircut2, assets.haircut3, assets.haircut4, assets.haircut5, assets.haircut6, assets.haircut7, assets.haircut9]
    const nails = [assets.nails1, assets.nails2, assets.nails3, assets.nails4, assets.nails5, assets.nails6, assets.nails7, assets.nails8, assets.nails9, assets.nails10, assets.nails11, assets.nails5]
    const makeup = [assets.makeUp1, assets.makeUp2, assets.makeUp3, assets.makeUp4, assets.makeUp5, assets.makeUp6, assets.makeUp7, assets.makeUp8, assets.makeUp9, assets.makeUp10, assets.makeUp11, assets.makeUp5]
    const eyes = [assets.eye1, assets.eye2, assets.eye3, assets.eye4, assets.eye5, assets.eye6, assets.eye7, assets.eye8, assets.eye9, assets.eye10, assets.eye11, assets.eye12]
    const hairTreatment = [assets.hairtreatment1, assets.hairtreatment2, assets.hairtreatment3, assets.hairtreatment4, assets.hairtreatment5, assets.hairtreatment6, assets.hairtreatment7, assets.hairtreatment8, assets.hairtreatment9, assets.hairtreatment10, assets.hairtreatment11, assets.hairtreatment12]
    const hairSpa = [assets.hairspa1, assets.hairspa2, assets.hairspa3, assets.hairspa4, assets.hairspa5, assets.hairspa6, assets.hairspa7, assets.hairspa8, assets.hairspa9, assets.hairspa10, assets.hairspa11, assets.hairspa12]
    const wax = [assets.wax1, assets.wax2, assets.wax3, assets.wax4, assets.wax5, assets.wax6, assets.wax7, assets.wax8, assets.wax9, assets.wax10]
    const eyebrow = [assets.eyebrow1, assets.eyebrow2, assets.eyebrow3, assets.eyebrow4, assets.eyebrow5, assets.eyebrow6, assets.eyebrow7, assets.eyebrow8, assets.eyebrow9, assets.eyebrow10]
    const faceThreading = [assets.faceThreading1, assets.faceThreading2, assets.faceThreading3, assets.faceThreading4, assets.faceThreading5, assets.faceThreading6, assets.faceThreading7, assets.faceThreading8, assets.faceThreading9, assets.faceThreading10]
    const bodyPolish = [assets.bodyPolish1, assets.bodyPolish2, assets.bodyPolish3, assets.bodyPolish4, assets.bodyPolish5, assets.bodyPolish6, assets.bodyPolish7, assets.bodyPolish8, assets.bodyPolish9, assets.bodyPolish10]
    const oilMassage = [assets.oilMassage1, assets.oilMassage2, assets.oilMassage4, assets.oilMassage5, assets.oilMassage6, assets.oilMassage8, assets.oilMassage9, assets.oilMassage10]

    const location = useLocation();

    const eyelashRef = useRef(null);
    const makeupRef = useRef(null);
    const hairTreatmentRef = useRef(null);
    const bridalRef = useRef(null);
    const hairSpaRef = useRef(null);
    const facialRef = useRef(null);
    const nailsRef = useRef(null);
    const haircutRef = useRef(null);

    useEffect(() => {
        const scrollTo = location.state?.scrollTo;

        const refMap = {
            eyelash: eyelashRef,
            makeup: makeupRef,
            'hair-treatment': hairTreatmentRef,
            bridal: bridalRef,
            'hair-spa': hairSpaRef,
            facial: facialRef,
            nails: nailsRef,
            haircut: haircutRef,
        };

        if (scrollTo && refMap[scrollTo]?.current) {
            refMap[scrollTo].current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.state]);

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
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]' ref={bridalRef}>
                <div className="text-center justify-start text-fuchsia-800 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Bridal Makeup</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">For Every Ceremony, A Look That Tells Your Story</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500]">BEAUTY is more than appearance; it’s how you feel. A well-crafted look enhances your features, uplifts your mood and brings out your natural confidence. <b>With over 12 years of experience and 500+ bridal makeovers,</b> each transformation is approached with care, expertise, and a deep respect for individual style. Our services are professionally delivered and affordably priced, ensuring a stress-free experience without compromising on quality.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className="columns-1 md:columns-3 gap-6">
                    <ul className="list-disc text-black text-base font-medium font-jost leading-relaxed pl-5">
                        <li>Bridal Makeup</li>
                        <li>HD Makeup</li>
                        <li>Glossy Makeup</li>
                        <li>Wedding Shoot Makeup</li>
                        <li>Groom Makeup</li>
                        <li>Simple Makeup</li>
                        <li>Waterproof Makeup</li>
                    </ul>
                </div>

                <div className="flex justify-center mb-10">
                    <Link to='/contact-us' className="flex justify-center items-center w-64 h-14 bg-[#b88bb2] rounded-lg text-white text-base font-bold font-jost">Book an Appointment</Link>
                </div>

                <HorizontalScroll speed={50}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 3 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#EAFFF3]' red={nailsRef}>
                <div className="text-center justify-start text-orange-700 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Nail Extension & Nail Art</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Where your fingertips speak your style</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] lg:w-[800px]">Elegant, edgy or expressive - your nails should tell your story. Let our artistry add polish to every gesture you make.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className="columns-1 md:columns-3 gap-6">
                    <ul className="list-disc text-black text-base font-medium font-jost leading-relaxed pl-5">
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Custom Art work</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Ombre Nails</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>3D Nail Art</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Marble Effect</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Acrylic</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Poly gel</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Full Nail Extension</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Single Colour Polish</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Foil art</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Gel extension</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Over Lay</li>
                    </ul>
                </div>

                <HorizontalScroll speed={70}>
                    {
                        nails.map((image, index) => (
                            <div className={`w-[120px] md:w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        nails.map((image, index) => (
                            <div className={`w-[120px] md:w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 4 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]' ref={makeupRef}>
                <div className="text-center justify-start text-orange-700 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Makeup Artistry</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Beauty that reflects who you are - not hides it</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] lg:w-[800px]">From soft glam to bold elegance, our makeup enhances your natural features and brings out the confidence already within you.</div>

                <ul className='list-disc flex flex-col items-center'>
                    <li className='text-black text-base font-jost font-[500] leading-relaxed'>Bridal Makeup: Radiant, confident, and made to last through every emotion.</li>
                    <li className='text-black text-base font-jost leading-relaxed'>Simple Makeup: Light, dewy, and perfect for everyday celebrations.</li>
                    <li className='text-black text-base font-jost leading-relaxed mb-10'>Party & Engagement Looks: Bold, playful or dramatic - whatever reflects your style.</li>
                </ul>

                <HorizontalScroll speed={70}>
                    {
                        makeup.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        makeup.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 5 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFE7F2]' ref={haircutRef}>
                <div className="text-center justify-start text-orange-700 text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Haircut & Hair Colouring</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">New look. New light. Same you - elevated.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Whether you're refreshing your cut or changing your shade, a great style isn’t just seen —<br />it’s felt in every moment that follows.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className="columns-1 md:columns-3 gap-6">
                    <ul className="list-disc text-black text-base font-medium font-jost leading-relaxed pl-5">
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Level Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>U Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>v Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Layer cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>feathercht</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Butterfly che</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>wolf ent</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Short bob cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Long bob cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Step cut</li>
                    </ul>
                </div>

                <HorizontalScroll speed={70}>
                    {
                        haircut.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        haircut.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 6 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]' ref={hairTreatmentRef}>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Hair Treatment</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Strong strands. Soft finish. Confident you.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-5 lg:w-[800px]">Dry, frizzy or lifeless? Let your hair bounce back with smoothness, strength and shine. Good hair days start here.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className="columns-1 md:columns-3 gap-6">
                    <ul className="list-disc text-black text-base font-medium font-jost leading-relaxed pl-5">
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Hair Spa</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Hair fall treatment</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Dandruff treatment</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>M.K. Botox treatment</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Flora active Keratin treatment</li>
                    </ul>
                </div>

                <HorizontalScroll speed={70}>
                    {
                        hairTreatment.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        hairTreatment.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 7 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FEFCE5]' ref={hairSpaRef}>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Hair Spa</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">A retreat for your hair. A reset for you</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500]  mb-10 lg:w-[800px]">Indulge in a luxurious hair spa experience that detoxes, rehydrates, and renews — because your hair deserves as much rest as your mind.</div>

                <HorizontalScroll speed={70}>
                    {
                        hairSpa.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        hairSpa.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 8 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[##FF7FE]' ref={eyelashRef}>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Eyelash Extension & Lifting</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Tired of mascara?</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Open up your eyes and your energy with beautifully lifted or voluminous lashes - subtle enough for everyday, stunning enough for every moment.</div>

                <HorizontalScroll speed={70}>
                    {
                        eyes.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        eyes.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 9 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#EAECFF]' ref={facialRef}>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Advanced Facial</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Let your skin tell a fresher story</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Restore your skin’s natural glow with facials designed to deeply hydrate, heal, and refresh. Because confidence begins with healthy, radiant skin.</div>

                <HorizontalScroll speed={70}>
                    {
                        facial.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        facial.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 10 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]'>
                <div className="text-center justify-start text-[#B63E12] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Waxing Treatments</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Say goodbye to unwanted hair and hello to silky, touchable skin - we wax it all with care and comfort.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-3 lg:w-[800px]">Our Offerings include:</div>

                <ul className='list-disc flex flex-col items-center'>
                    <li className='text-black text-base font-jost font-[500] leading-relaxed'>Honey Wax - Classic and effective for smooth, everyday glow.</li>
                    <li className='text-black text-base font-jost leading-relaxed'>Rica Wax - Skin-friendly and gentle, perfect for sensitive skin beauties.</li>
                    <li className='text-black text-base font-jost leading-relaxed'>Brazilian Wax - Clean, confident, and beach-ready.</li>
                    <li className='text-black text-base font-jost leading-relaxed mb-10'>V Wax - Specialized intimate care with extra comfort</li>
                </ul>

                <HorizontalScroll speed={70}>
                    {
                        wax.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        wax.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 11 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#F5EAFF]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Eyebrow Shaping</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">A little brow love goes a long way.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">From neat clean-ups to bold arches - we sculpt brows that frame your face beautifully.</div>


                {/* <ul className='list-disc flex flex-col items-center'>
                    <li className='text-black text-base font-jost font-[500] leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed mb-10'></li>
                </ul> */}

                <HorizontalScroll speed={70}>
                    {
                        eyebrow.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        eyebrow.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 12 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Face Threading</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Flawless skin, fuzz-free finish.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Gentle threading for upper lip, chin, forehead & full face - done with precision, leaving your skin smooth and glowing.</div>

                {/* <ul className='list-disc flex flex-col items-center'>
                    <li className='text-black text-base font-jost font-[500] leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed mb-10'></li>
                </ul> */}

                <HorizontalScroll speed={70}>
                    {
                        faceThreading.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        faceThreading.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 13 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFEAEB]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Body Polishing</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Buff, glow, repeat! ✨</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Reveal radiant skin with our exfoliating body polish. It removes dead cells, boosts blood flow, and leaves your skin baby-soft and fresh.</div>

                {/* <ul className='list-disc flex flex-col items-center'>
                    <li className='text-black text-base font-jost font-[500] leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed mb-10'></li>
                </ul> */}

                <HorizontalScroll speed={70}>
                    {
                        bodyPolish.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bodyPolish.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 15 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#EAECFF]'>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Body Oil Massage</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Unwind in bliss.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Our relaxing oil massage melts away stress, soothes sore muscles, and leaves your skin deeply nourished, soft, and glowing.</div>

                {/* <ul className='list-disc flex flex-col items-center'>
                    <li className='text-black text-base font-jost font-[500] leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed'></li>
                    <li className='text-black text-base font-jost leading-relaxed mb-10'></li>
                </ul> */}

                <HorizontalScroll speed={70}>
                    {
                        oilMassage.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img src={image} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        oilMassage.map((image, index) => (
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

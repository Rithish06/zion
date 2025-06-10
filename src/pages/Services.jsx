import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import HorizontalScroll from '../components/Horizontal'
import ContactFrom from '../components/ContactFrom'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet'

const Services = () => {

    const bridalMakeUp = [
        { img: assets.bm1, keyword: "Bridal Makeup" },
        { img: assets.bm2, keyword: "Bridal makeup artist Tumkur" },
        { img: assets.bm3, keyword: "Wedding makeup Tumkur" },
        { img: assets.bm4, keyword: "HD bridal makeup Tumkur" },
        { img: assets.bm5, keyword: "Airbrush makeup for brides Tumkur" },
        { img: assets.bm6, keyword: "Professional bridal makeup artist in Tumkur" },
        { img: assets.bm7, keyword: "Tumkur bridal makeup packages" },
        { img: assets.bm8, keyword: "Best bridal makeup in Tumkur" },
        { img: assets.bm9, keyword: "Bridal makeup and hairstyle Tumkur" },
        { img: assets.bm10, keyword: "Traditional bridal makeup Tumkur" },
        { img: assets.bm11, keyword: "South Indian bridal makeup Tumkur" },
        { img: assets.bm12, keyword: "Bridal Makeup" }
    ];

    const facial = [
        { img: assets.facial1, keyword: "Advanced Facial" },
        { img: assets.facial2, keyword: "Advanced facials in Tumkur" },
        { img: assets.facial3, keyword: "Hydrafacial treatment Tumkur" },
        { img: assets.facial4, keyword: "Anti-aging facial Tumkur" },
        { img: assets.facial5, keyword: "Skin brightening facial Tumkur" },
        { img: assets.facial6, keyword: "O3+ facial in Tumkur" },
        { img: assets.facial8, keyword: "Dermatologically tested facials Tumkur" },
        { img: assets.facial9, keyword: "Facial for glowing skin Tumkur" },
        { img: assets.facial10, keyword: "De-tan facial treatment Tumkur" },
        { img: assets.facial11, keyword: "VLCC advanced facials Tumkur" }
    ];

    const haircut = [
        { img: assets.haircut1, keyword: "Haircut & Hair Colouring" },
        { img: assets.haircut2, keyword: "Haircut and colour in Tumkur" },
        { img: assets.haircut3, keyword: "Hair salon for women Tumkur" },
        { img: assets.haircut4, keyword: "Best hair colouring salon Tumkur" },
        { img: assets.haircut5, keyword: "Ladies haircut near me in Tumkur" },
        { img: assets.haircut6, keyword: "Balayage and highlights Tumkur" },
        { img: assets.haircut7, keyword: "Global hair colour Tumkur" },
        { img: assets.haircut9, keyword: "Trendy haircuts in Tumkur" }
    ];

    const nails = [
        { img: assets.nails1, keyword: "Nail Extension & Nail Art" },
        { img: assets.nails2, keyword: "Nail extension Tumkur" },
        { img: assets.nails3, keyword: "Nail art salon Tumkur" },
        { img: assets.nails4, keyword: "Acrylic nail extensions Tumkur" },
        { img: assets.nails5, keyword: "Gel nail art Tumkur" },
        { img: assets.nails6, keyword: "Nail salon in Tumkur for extensions" },
        { img: assets.nails7, keyword: "Manicure and nail art Tumkur" },
        { img: assets.nails8, keyword: "Bridal nail art Tumkur" },
        { img: assets.nails9, keyword: "French manicure with extension Tumkur" },
        { img: assets.nails10, keyword: "Tumkur nail art designs" },
        { img: assets.nails11, keyword: "Best nail extension studio Tumkur" }
    ];

    const makeup = [
        { img: assets.makeUp1, keyword: "Makeup Artistry" },
        { img: assets.makeUp2, keyword: "Makeup artist in Tumkur" },
        { img: assets.makeUp3, keyword: "Professional makeup artist Tumkur" },
        { img: assets.makeUp4, keyword: "Party makeup Tumkur" },
        { img: assets.makeUp5, keyword: "Freelance makeup artist Tumkur" },
        { img: assets.makeUp6, keyword: "Best makeup artist in Tumkur" },
        { img: assets.makeUp7, keyword: "Tumkur makeup services" },
        { img: assets.makeUp8, keyword: "Evening party makeup Tumkur" },
        { img: assets.makeUp9, keyword: "Natural look makeup artist Tumkur" },
        { img: assets.makeUp10, keyword: "Makeup for photoshoots in Tumkur" },
        { img: assets.makeUp11, keyword: "Special occasion makeup Tumkur" }
    ];

    const eyes = [
        { img: assets.eye1, keyword: "Eyelash Extension & Lifting" },
        { img: assets.eye2, keyword: "Eyelash extensions in Tumkur" },
        { img: assets.eye3, keyword: "Eyelash lifting service Tumkur" },
        { img: assets.eye4, keyword: "Classic eyelash extensions Tumkur" },
        { img: assets.eye5, keyword: "Volume lash extensions Tumkur" },
        { img: assets.eye6, keyword: "Best lash artist in Tumkur" },
        { img: assets.eye7, keyword: "Eyelash salon near me in Tumkur" },
        { img: assets.eye8, keyword: "3D eyelash extensions Tumkur" },
        { img: assets.eye9, keyword: "Natural looking eyelash extensions Tumkur" },
        { img: assets.eye10, keyword: "Lash lift and tint Tumkur" },
        { img: assets.eye11, keyword: "Professional eyelash services Tumkur" },
        { img: assets.eye12, keyword: "Eyelash Extension & Lifting" }
    ];

    const hairTreatment = [
        { img: assets.hairtreatment1, keyword: "Hair Treatment" },
        { img: assets.hairtreatment2, keyword: "Hair treatment clinic Tumkur" },
        { img: assets.hairtreatment3, keyword: "Keratin hair treatment Tumkur" },
        { img: assets.hairtreatment4, keyword: "Hair smoothening in Tumkur" },
        { img: assets.hairtreatment5, keyword: "Best hair fall treatment Tumkur" },
        { img: assets.hairtreatment6, keyword: "Dandruff control treatment Tumkur" },
        { img: assets.hairtreatment7, keyword: "Olaplex hair treatment Tumkur" },
        { img: assets.hairtreatment8, keyword: "Hair protein treatment in Tumkur" },
        { img: assets.hairtreatment9, keyword: "Salon for hair repair Tumkur" },
        { img: assets.hairtreatment10, keyword: "Anti-frizz hair treatment Tumkur" },
        { img: assets.hairtreatment11, keyword: "Hair revitalization therapy Tumkur" },
        { img: assets.hairtreatment12, keyword: "Hair Treatment" }
    ];

    const hairSpa = [
        { img: assets.hairspa1, keyword: "Hair Spa" },
        { img: assets.hairspa2, keyword: "Hair spa services in Tumkur" },
        { img: assets.hairspa3, keyword: "L'Oréal hair spa Tumkur" },
        { img: assets.hairspa4, keyword: "Keratin hair spa treatment Tumkur" },
        { img: assets.hairspa5, keyword: "Best hair spa salon Tumkur" },
        { img: assets.hairspa6, keyword: "Hair spa for dry and damaged hair Tumkur" },
        { img: assets.hairspa7, keyword: "Scalp treatment and hair spa Tumkur" },
        { img: assets.hairspa8, keyword: "Relaxing hair spa in Tumkur" },
        { img: assets.hairspa9, keyword: "Deep conditioning hair spa Tumkur" },
        { img: assets.hairspa10, keyword: "Matrix hair spa services Tumkur" },
        { img: assets.hairspa11, keyword: "Affordable hair spa in Tumkur" },
        { img: assets.hairspa12, keyword: "Hair Spa" }
    ];

    const wax = [
        { img: assets.wax1, keyword: "Waxing Treatments" },
        { img: assets.wax2, keyword: "Waxing services in Tumkur" },
        { img: assets.wax3, keyword: "Rica wax salon Tumkur" },
        { img: assets.wax4, keyword: "Brazilian waxing for women Tumkur" },
        { img: assets.wax5, keyword: "Full body waxing Tumkur" },
        { img: assets.wax6, keyword: "Painless waxing services Tumkur" },
        { img: assets.wax7, keyword: "Honey wax and chocolate wax Tumkur" },
        { img: assets.wax8, keyword: "Leg and arm waxing in Tumkur" },
        { img: assets.wax9, keyword: "Beauty parlour for waxing Tumkur" },
        { img: assets.wax10, keyword: "Hygienic waxing salon Tumkur" }
    ];

    const eyebrow = [
        { img: assets.eyebrow1, keyword: "Eyebrow Shaping" },
        { img: assets.eyebrow2, keyword: "Eyebrow shaping Tumkur" },
        { img: assets.eyebrow3, keyword: "Eyebrow threading salon Tumkur" },
        { img: assets.eyebrow4, keyword: "Professional eyebrow shaping in Tumkur" },
        { img: assets.eyebrow5, keyword: "Eyebrow tinting and shaping Tumkur" },
        { img: assets.eyebrow6, keyword: "Best eyebrow artist Tumkur" },
        { img: assets.eyebrow7, keyword: "Painless eyebrow threading Tumkur" },
        { img: assets.eyebrow8, keyword: "Eyebrow grooming services Tumkur" },
        { img: assets.eyebrow9, keyword: "Arch and defined eyebrow shaping Tumkur" },
        { img: assets.eyebrow10, keyword: "Beauty salon for eyebrow threading Tumkur" }
    ];

    const faceThreading = [
        { img: assets.faceThreading1, keyword: "Face Threading" },
        { img: assets.faceThreading2, keyword: "Full face threading Tumkur" },
        { img: assets.faceThreading3, keyword: "Upper lip and chin threading Tumkur" },
        { img: assets.faceThreading4, keyword: "Facial hair removal by threading Tumkur" },
        { img: assets.faceThreading5, keyword: "Sideburns threading for women Tumkur" },
        { img: assets.faceThreading6, keyword: "Painless face threading services Tumkur" },
        { img: assets.faceThreading7, keyword: "Salon for face threading in Tumkur" },
        { img: assets.faceThreading8, keyword: "Forehead threading Tumkur" },
        { img: assets.faceThreading9, keyword: "Hygienic face threading Tumkur" },
        { img: assets.faceThreading10, keyword: "Expert threading artist Tumkur" }
    ];

    const bodyPolish = [
        { img: assets.bodyPolish1, keyword: "Body Polishing" },
        { img: assets.bodyPolish2, keyword: "Body polishing services in Tumkur" },
        { img: assets.bodyPolish3, keyword: "Skin whitening body polishing Tumkur" },
        { img: assets.bodyPolish4, keyword: "Bridal body polishing packages Tumkur" },
        { img: assets.bodyPolish5, keyword: "Exfoliating body scrub and polish Tumkur" },
        { img: assets.bodyPolish6, keyword: "Full body polishing treatment Tumkur" },
        { img: assets.bodyPolish7, keyword: "Salon for body polishing near me Tumkur" },
        { img: assets.bodyPolish8, keyword: "Rejuvenating body polishing Tumkur" },
        { img: assets.bodyPolish9, keyword: "Best body polishing for glowing skin Tumkur" },
        { img: assets.bodyPolish10, keyword: "Detan body polishing Tumkur" }
    ];

    const oilMassage = [
        { img: assets.oilMassage1, keyword: "Body Oil Massage" },
        { img: assets.oilMassage2, keyword: "Body oil massage in Tumkur" },
        { img: assets.oilMassage4, keyword: "Full body relaxation massage Tumkur" },
        { img: assets.oilMassage5, keyword: "Ayurvedic oil massage therapy Tumkur" },
        { img: assets.oilMassage6, keyword: "Swedish body massage Tumkur" },
        { img: assets.oilMassage8, keyword: "Deep tissue oil massage Tumkur" },
        { img: assets.oilMassage9, keyword: "Aromatherapy body massage in Tumkur" },
        { img: assets.oilMassage10, keyword: "Massage spa for women Tumkur" }
    ];

    const location = useLocation();

    const eyelashRef = useRef(null);
    const makeupRef = useRef(null);
    const hairTreatmentRef = useRef(null);
    const bridalRef = useRef(null);
    const hairSpaRef = useRef(null);
    const facialRef = useRef(null);
    const nailsRef = useRef(null);
    const haircutRef = useRef(null);
    const waxingTreatments = useRef(null)
    const bodyPolishingRef = useRef(null)
    const eyebrowShapingRef = useRef(null)
    const faceThreadingRef = useRef(null)
    const oilMassageRef = useRef(null)

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
            facethreading: faceThreadingRef,
            bodyPolish: bodyPolishingRef,
            waxing: waxingTreatments,
            oilMassage: oilMassageRef,
            eyebrowshapping: eyebrowShapingRef
        };

        if (scrollTo && refMap[scrollTo]?.current) {
            refMap[scrollTo].current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.state]);

    return (
        <div className='relative top-20 md:top-0 overflow-x-hidden bg-[#FFF7FE]'>

            <Helmet>
                <title>Our Beauty Services – Bridal Makeup, Hair, Skincare & More | Zion Beauty Tumkur</title>
                <meta name="description" content="Explore our complete range of beauty services including facials, hair treatments, bridal makeup, nail extensions, body massage, waxing & more – all under one elegant roof." />
                <meta name="keywords" content="beauty parlour, salon, makeup, haircut, facial, waxing, body massage, nails, hair coloring, spa, massage near me, waxing near me, hair salon near me, nail salon near me, spa near me, haircut near me, facials near me, mascara, make up, salon near me, hair dye, body massage near me, hair salon, eyeliner, make up artist near me, hair treatment near me, beauty parlour near me, eye lashes, hair gloss, makeup set, nail art designs, best spa near me, makeup artist, best face masks" />
                <meta property="og:title" content="My Page Title for Social Media" />
            </Helmet>

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
                    {/* <Link to='/contact-us' className="flex justify-center items-center w-64 h-14 bg-[#b88bb2] rounded-lg text-white text-base font-bold font-jost">Book an Appointment</Link> */}
                </div>

                <HorizontalScroll speed={50}>
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bridalMakeUp.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[120px] md:w-[160px] h-auto relative' />
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        nails.map((image, index) => (
                            <div className={`w-[120px] md:w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
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

                <div className="columns-1 md:columns-2 gap-6">
                    <ul className="list-disc text-black text-base font-medium font-jost leading-relaxed pl-5">
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Module Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Simple Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Party Makeup</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Engagement Makeup</li>
                    </ul>
                </div>

                <HorizontalScroll speed={70}>
                    {
                        makeup.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        makeup.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[120px] md:w-[160px] h-auto relative' />
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
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>U-Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>V-Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Layer Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Feather Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Butterfly Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Wolf Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Short Bob Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Long Bob Cut</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Step Cut</li>
                    </ul>
                </div>

                <HorizontalScroll speed={70}>
                    {
                        haircut.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[120px] md:w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        haircut.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[120px] md:w-[160px] h-auto relative' />
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        hairTreatment.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        hairSpa.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        eyes.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        facial.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 10 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]'>
                <div className="text-center justify-start text-[#B63E12] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Waxing Treatments</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Say goodbye to unwanted hair and hello to silky, touchable skin - we wax it all with care and comfort.</div>
                <div className="text-center justify-start text-fuchsia-800 text-[12px] lg:text-[16px] font-bold font-jost leading-normal">Our Offerings include:</div>

                <div className="columns-1 md:columns-2 gap-6">
                    <ul className="list-disc text-black text-base font-medium font-jost leading-relaxed pl-5">
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Honey wax</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Rica Wax</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>Brazilian Wax</li>
                        <li className='text-black text-base font-medium font-jost leading-relaxed'>V Wax</li>
                    </ul>
                </div>

                <HorizontalScroll speed={70}>
                    {
                        wax.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        wax.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        eyebrow.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 12 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFF7FE]' ref={faceThreadingRef}>
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        faceThreading.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 13 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#FFEAEB]' ref={bodyPolishingRef}>
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
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        bodyPolish.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                </HorizontalScroll>
            </div>

            {/* container 15 */}
            <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center p-7 lg:p-20 bg-[#EAECFF]' ref={oilMassageRef}>
                <div className="text-center justify-start text-[#87427D] text-[30px] lg:text-[42px] font-bold font-jost leading-[60.52px]">Body Oil Massage</div>
                <div className="text-center justify-start text-black text-[14px] lg:text-[24px] font-bold font-jost leading-normal">Unwind in bliss.</div>
                <div className="text-center justify-start font-jost text-[16px] lg:text-[20px] font-[500] mb-10 lg:w-[800px]">Our relaxing oil massage melts away stress, soothes sore muscles, and leaves your skin deeply nourished, soft, and glowing.</div>

                <HorizontalScroll speed={70}>
                    {
                        oilMassage.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
                            </div>
                        ))
                    }
                    {
                        oilMassage.map((image, index) => (
                            <div className={`w-[160px] h-auto mx-[15px] ${index % 2 !== 0 ? 'mt-10' : ''}`} key={index}>
                                <img  src={image.img}  alt={image.keyword} className='w-[160px] h-auto relative' />
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

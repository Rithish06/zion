import React,{useEffect, useRef} from 'react'
import { assets } from '../assets/assets'
import { FaAngleRight } from "react-icons/fa6";
import VerticalInfiniteScroll from '../components/VerticalInfiniteScroll';
import HorizontalScroll from '../components/Horizontal'
import ContactFrom from '../components/ContactFrom';
import { Link } from 'react-router-dom';

const Home = () => {

	const discover = useRef()

	useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.dataset.useServiceCore = '';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

	const nextContainer = () => {
		if (discover.current) {
			const elementTop = discover.current.getBoundingClientRect().top;
			const offset = window.innerHeight * 0.4;
			window.scrollTo({
				top: window.pageYOffset + elementTop - offset,
				behavior: 'smooth',
			});
		}
	}	


	const scrollOne = [assets.scrollImg1, assets.scrollImg2, assets.scrollImg3]
	const scrollTwo = [assets.scrollImg4, assets.scrollImg5, assets.scrollImg6]
	const scrollThree = [assets.scrollImg7, assets.scrollImg8, assets.scrollImg9]

	const serviceList = [
		{
			image: assets.eyeLash,
			name: "Eyelash Extension & Lifting"
		},
		{
			image: assets.makeup,
			name: "Makeup"
		},
		{
			image: assets.hairTreatment,
			name: "Hair Treatment"
		},
		{
			image: assets.bridalMakeup,
			name: "Bridal makeup"
		},
		{
			image: assets.hairspa,
			name: "Hair Spa"
		},
		{
			image: assets.advancedFacial,
			name: "Advanced Facial"
		},
		{
			image: assets.nailPolish,
			name: "Nail Extension & Nail Art"
		},
		{
			image: assets.hairColoring,
			name: "Haircut & Hair Colouring"
		},
	]

	return (
		<div className='relative top-20 md:top-0 overflow-x-hidden bg-[#FFF7FE]'>
			{/* banner */}

			<div className='relative bg-white'>
				{/* banner bg */}
				<div className='realtive z-1 flex flex-col justify-around w-full h-[1300px]  lg:h-[100vh]'>
					<img src={assets.homeBannerBg} className='w-full h-[1300px]  lg:h-[100vh]' alt="" />
				</div>

				{/* content */}

				<div className='absolute top-0 z-2 flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-20 w-full h-[1300px] lg:h-[100vh]'>
					{/* left side */}
					<div className='w-full lg:w-[50%]'>
						<div className='mx-auto lg:ml-40 p-5 lg:p-0 realtive'>
							<div className="text-black text-[70px] lg:text-[150px] mt-10 mg:mt-0 md:text-7xl font-normal font-['Jost">Step</div>
							<div className="text-black text-[50px] lg:text-[80px] md:text-5xl font-normal font-jost ml-32 lg:ml-62 lg:mt-5">Into</div>
							<div className="text-black text-[100px] lg:text-[150px] md:text-9xl font-normal font-['Modern_No._20'] leading-[100px]">Zion</div>
							<div className="text-black text-[25px] lg:text-[40px] md:text-3xl font-normal font-['Modern_No._20'] lg:mt-6 ml-25 lg:ml-40">Beauty of Heaven</div>
						</div>

						<div className='w-full flex items-center justify-start gap-5 mt-10 lg:ml-20'>
							<div className="w-20 h-[3px] bg-red-300" />
							<div className="w-full justify-start text-red-300 text-base lg:text-[28px] font-normal font-delius">Where Every Look Begins with a Touch of Heaven</div>
						</div>

						<div className='mt-8 flex justify-center lg:justify-start lg:ml-40'>
							<button className="flex items-center gap-3" onClick={nextContainer}>
								<div className="justify-start text-white text-xs font-bold font-jost px-5 py-3 bg-gradient-to-r from-black to-black rounded-lg">LET’S DISCOVER</div>
								<div className='w-[25px] h-[25px] border-[2px] border-black flex justify-center items-center rounded-full'>
									<FaAngleRight />
								</div>
							</button>
						</div>
					</div>

					{/* right side */}
					<div className='flex justify-center gap-4 h-60vh overflow-y-hidden w-full lg:w-[50%] mt-20'>
						{/* scroll 1 */}

						<div>
							<VerticalInfiniteScroll speed={20} height="60vh">
								<div className='flex flex-col'>
									{scrollOne.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollOne.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollOne.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollOne.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
								</div>
							</VerticalInfiniteScroll>
						</div>

						{/* scroll 2 */}

						<div className='mt-20'>
							<VerticalInfiniteScroll speed={20} height="60vh">
								<div className='flex flex-col'>
									{scrollTwo.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollTwo.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollTwo.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollTwo.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
								</div>
							</VerticalInfiniteScroll>
						</div>

						{/* scroll 3 */}
						<div className='mt-40'>
							<VerticalInfiniteScroll speed={20} height="60vh">
								<div className='flex flex-col'>
									{scrollThree.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollThree.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollThree.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
									{scrollThree.map((img, index) => (
										<img className='w-[123px] h-auto mb-4' src={img} key={index} />
									))}
								</div>
							</VerticalInfiniteScroll>
						</div>
					</div>

				</div>
			</div>

			{/* container 2 */}
			<div className='px-10 lg:px-20' ref={discover}>
				<div className="text-black text-3xl lg:text-4xl font-medium font-jost text-center mt-15 mb-8">Be Your Own Kind of Beautiful</div>
				<div className="text-center justify-start text-black text-sm lg:text-lg font-normal font-delius leading-7 mt-4">Zion Beauty of Heaven is a premier beauty destination in Tumkur, founded by Anupama Sharmanraj, a skilled and passionate beauty expert committed to excellence. With a deep understanding of modern trends and a dedication to empowering women, she has created a space where every client experiences more than just a makeover - they experience transformation.</div>
				<div className="text-center justify-start text-black text-sm lg:text-lg font-normal font-delius leading-7 mt-4">Offering a wide range of services including skincare, makeup, hairstyling, nail enhancements, lash lifting and bridal grooming, Zion blends artistry with advanced techniques in a calm and hygienic environment. Every service is designed to suit individual needs while enhancing natural beauty and confidence.</div>
				<div className="text-center justify-start text-black text-sm lg:text-lg font-normal font-delius leading-7 mt-4">What sets us apart is Anupama’s hands-on approach and belief that beauty is deeply personal. Whether you’re preparing for a big day or simply refreshing your style, Zion ensures you leave feeling confident, cared for and beautifully you.</div>
			</div>

			{/* container 3 */}
			<div>
				<div className="justify-start text-stone-950 text-3xl lg:text-5xl font-bold font-jost text-center mt-15 mb-10">Service Menu</div>

				<HorizontalScroll speed={20}>
					{serviceList.map((service, index) => (
						<div key={index} className="flex flex-col items- justify-center gap-2 w-[100px] px-2 mx-7">
							<img src={service.image} className="w-[77px] h-auto" alt="" />
							<div className="text-center text-black text-[12px] font-normal font-delius tracking-wider w-[80%]">
								{service.name}
							</div>
						</div>
					))}
					{serviceList.map((service, index) => (
						<div key={index} className="flex flex-col items- justify-center gap-2 w-[100px] px-2 mx-7">
							<img src={service.image} className="w-[77px] h-auto" alt="" />
							<div className="text-center text-black text-[12px] font-normal font-delius tracking-wider w-[80%]">
								{service.name}
							</div>
						</div>
					))}
				</HorizontalScroll>
				<div className="mt-10 flex justify-center">
				 	<Link to="/services"><button className="w-64 h-14 bg-[#b88bb2] rounded-lg text-white text-base font-bold font-jost">View Service Menu</button></Link>
				</div>
			</div>

			{/* google review */}
			<div className='p-5  mt-10'>
				<div className="text-center justify-start text-fuchsia-800 text-2xl lg:text-4xl font-semibold font-jost leading-relaxed mb-8">TESTIMONIALS</div>
                <div
                    dangerouslySetInnerHTML={{ __html: `<div class="elfsight-app-51ce8d64-0c5a-4cf4-9be4-28e4e5311db3" data-elfsight-app-lazy/>`}}
                />
            </div>

			{/* container 5 */}
			<div className='mt-10 mb-20 lg:mb-0'>
				<ContactFrom />
			</div>
						
		</div>
	)
}

export default Home

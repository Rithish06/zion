import React,{useRef} from "react";
import { assets } from "../assets/assets";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Beautician = () => {

    const containerRef = useRef();
    const rotateRef = useRef([]);
    const rotateRevRef = useRef([]);

    useGSAP(() => {
        rotateRef.current.forEach((el) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, x: -500 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: true,
                            markers: false,
                        },
                    }
                );
            }
        });

        rotateRevRef.current.forEach((el) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, x: 500 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: true,
                            markers: false,
                        },
                    }
                );
            }
        });

        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            {/* desktop */}
            <div className="hidden realtive lg:flex flex-col lg:flex-row mt-20">
                {/* leftSide */}
                <div className="w-full lg:w-[50%] relative bg-[#D8AD02] flex flex-col items-center pt-10 pb-18" ref={el => rotateRef.current[0] = el}>

                    <div className="text-[60px] lg:text-[100px] text-white leading-[100px] font-[700] font-jost text-center">Anupama</div>
                    <div className="absolute top-33 z-[3] right-0">
                        <span className="font-jost text-white text-[80px] font-[700]">Sharm</span>

                    </div>

                    <div className="relative text-[36px] font-[700] font-jost text-white mt-35 text-center ml-20">Founder & Beauty Professional</div>

                    <div className="text-white text-[20px] font-[400] font-jost text-center w-[70%] mt-8 ml-20">Beauty is not limited to a single shade, shape,or style - it resides uniquely within each individual. Every skin tone and facial feature possesses its own radiance, and our expertise lies in illuminating that natural glow.</div>
                    <div className="text-white text-[20px] font-[400] font-jost text-center w-[70%] mt-2 ml-20">To me, beauty is deeply personal. It’s not about <span className="font-[700]">TRANSFORMATION</span>, but <span className="font-[700]">RECOGNITION</span> - It’s the moment someone sees themselves with clarity and confidence. That quiet sense of pride, of feeling truly comfortable in one’s appearance, is what defines meaningful beauty.</div>
                </div>

                {/* right side */}
                <div className="realtive w-full lg:w-[50%] flex flex-col justify-end bg-[#0F181F] relative" ref={el => rotateRevRef.current[0] = el}>
                    <div className="relative flex items-end gap-10 justify-start">
                        <div className="flex flex-col items-start gap-6 p-5">

                            <div className="flex flex-col items-center gap-1">
                                <div className="font-jost text-stroke text-[26px] font-[700] text-transparent text-stroke-white">3000+</div>
                                <div className="text-[20px] text-center font-jost text-white w-[120px]">Happy Clients Served</div>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <div className="font-jost text-stroke text-[26px] font-[700] text-transparent text-stroke-white">500+</div>
                                <div className="text-[20px] text-center font-jost text-white w-[120px]">Bridal Makeup</div>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <div className="font-jost text-stroke text-[26px] font-[700] text-transparent text-stroke-white">12+</div>
                                <div className="text-[20px] text-center font-jost text-white w-[120px]">Years of Experience</div>
                            </div>

                        </div>

                        <img src={assets.beautician} className="w-[60%]" alt="" />
                    </div>
                    <span className="absolute top-33 font-jost text-stroke text-[80px] font-[700] text-transparent text-stroke-white">anraj</span>
                </div>
            </div>

            {/* mobile */}
            <div className="w-full lg:hidden mt-20">
                {/* top */}
                <div className="bg-[#D8AD02] pt-10" ref={el => rotateRef.current[1] = el}>
                    <div className="flex items-start justify-center gap-3 md:gap-6">

                        <div className="flex flex-col items-center gap-1">
                            <div className="font-jost text-stroke text-[18px] md:text-[24px] font-[700] text-transparent text-stroke-white">3000+</div>
                            <div className="text-[12px] md:text-[16px] text-center font-jost text-white w-[100px]">Happy Clients Served</div>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="font-jost text-stroke text-[18px] md:text-[24px] font-[700] text-transparent text-stroke-white">500+</div>
                            <div className="text-[12px] md:text-[16px] text-center font-jost text-white w-[100px]">Bridal Makeup</div>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="font-jost text-stroke text-[18px] md:text-[24px] font-[700] text-transparent text-stroke-white">12+</div>
                            <div className="text-[12px] md:text-[16px] text-center font-jost text-white w-[100px]">Years of Experience</div>
                        </div>

                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-white text-[16px] md:text-[20px] font-[400] font-jost text-center w-[80%] mt-8">Beauty is not limited to a single shade, shape,or style - it resides uniquely within each individual. Every skin tone and facial feature possesses its own radiance, and our expertise lies in illuminating that natural glow.</div>
                        <div className="text-white text-[16px] md:text-[20px] font-[400] font-jost text-center w-[80%] mt-2">To me, beauty is deeply personal. It’s not about <span className="font-[700]">TRANSFORMATION</span>, but <span className="font-[700]">RECOGNITION</span> - It’s the moment someone sees themselves with clarity and confidence. That quiet sense of pride, of feeling truly comfortable in one’s appearance, is what defines meaningful beauty.</div>
                    </div>

                    <div className="text-[60px] lg:text-[60px] text-white leading-[100px] font-[700] font-jost text-center">Anupama</div>

                </div>

                {/* bottom */}
                <div className="bg-[#0F181F]" ref={el => rotateRevRef.current[1] = el}>
                    <div className="text-center font-jost text-stroke text-[50px] font-[700] text-transparent text-stroke-white">Sharmanraj</div>
                    <div className="text-center font-jost text-stroke text-[20px] font-[600] text-transparent text-stroke-white">Founder & Beauty Professional</div>
                    <img src={assets.beautician} className="w-[60%] mt-10 mx-auto h-auto" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Beautician;

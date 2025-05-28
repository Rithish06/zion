import React from 'react'
import { assets } from '../assets/assets'
import { useForm, Controller } from "react-hook-form"
import Select from "react-select";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const ContactFrom = () => {

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const options = [
        { value: "s1", label: "Service 1" },
        { value: "s2", label: "Service 2" },
        { value: "s3", label: "Service 3" },
    ];

    return (
        <div className='flex flex-col gap-10 lg:gap-0 items-center lg:flex-row justify-center mb-10 lg:mb-0'>

            {/* left side */}
            <div
                className="w-full lg:w-[50%] flex justify-center items-center py-10 px-5"
                style={{
                    background: `url(${assets.contactImage})`,
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover",
                }}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white/80 w-[95%] lg:w-[80%] px-10 py-18 rounded-2xl"
                >
                    <div className="text-black text-3xl lg:text-5xl font-bold font-jost">
                        Ready, Set, Glow!
                    </div>
                    <div className="text-black text-sm font-normal font-jost leading-none mt-5">
                        Fill in the form below and our team will get in touch with you shortly
                        to assist you with bookings, queries or recommendations.
                    </div>

                    {/* Row 1 */}
                    <div className="flex gap-5 mt-10">
                        <div className="w-[50%]">
                            <input
                                {...register("firstName", {
                                    required: "First name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "First name should contain only letters",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-zinc-600 placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="First Name*"
                            />
                            {errors.firstName && (
                                <p className="text-red-600 text-sm">{errors.firstName.message}</p>
                            )}
                        </div>

                        <div className="w-[50%]">
                            <input
                                {...register("lastName", {
                                    required: "Last name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Last name should contain only letters",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-zinc-600 placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="Last Name*"
                            />
                            {errors.lastName && (
                                <p className="text-red-600 text-sm">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-5 mt-8">
                        <div className="w-[50%]">
                            <input
                                {...register("phonenumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit phone number",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-zinc-600 placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="Phone Number*"
                            />
                            {errors.phonenumber && (
                                <p className="text-red-600 text-sm">{errors.phonenumber.message}</p>
                            )}
                        </div>

                        <div className="w-[50%]">
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-zinc-600 placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="Email*"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Service Select */}
                    <div className="flex gap-5 mt-8">
                        <Controller
                            name="service"
                            control={control}
                            rules={{ required: "Service is required" }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={options}
                                    placeholder="Select a service*"
                                    isSearchable={false}
                                    className="w-full text-base"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            backgroundColor: "transparent",
                                            border: "0",
                                            borderBottom: "2px solid black",
                                            boxShadow: "none",
                                            borderRadius: 0,
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "16px",
                                            color: "#000",
                                        }),
                                        placeholder: (base) => ({
                                            ...base,
                                            fontFamily: "Poppins, sans-serif",
                                            color: "#71717a",
                                            fontSize: "16px",
                                        }),
                                        singleValue: (base) => ({
                                            ...base,
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "16px",
                                            color: "#000",
                                        }),
                                        option: (base, state) => ({
                                            ...base,
                                            fontFamily: "Poppins, sans-serif",
                                            backgroundColor: state.isSelected
                                                ? "#3b82f6"
                                                : state.isFocused
                                                    ? "#e0e7ff"
                                                    : "#fff",
                                            color: "#000",
                                            cursor: "pointer",
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            zIndex: 50,
                                        }),
                                    }}
                                />
                            )}
                        />
                    </div>
                    {errors.service && (
                        <p className="text-red-600 text-sm mt-2">{errors.service.message}</p>
                    )}

                    {/* Message */}
                    <div className="flex gap-5 mt-8">
                        <textarea
                            {...register("message", {
                                required: "Message is required",
                                pattern: {
                                    value: /^.{10,}$/,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                            className="w-full border-b-[2px] outline-none border-black placeholder:text-zinc-600 placeholder:text-base placeholder:font-[poppins] py-2"
                            placeholder="Message*"
                        />
                    </div>
                    {errors.message && (
                        <p className="text-red-600 text-sm">{errors.message.message}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-[#b88bb2] px-8 py-2 text-white font-[600] mt-10 rounded-sm font-jost"
                    >
                        Book Now
                    </button>
                </form>
            </div>

            {/* right */}
            <div className="w-full lg:w-[50%] flex flex-col gap-10 lg:gap-20 p-10 lg:p-0">
                {/* salon timings */}

                <div>
                    <div className="self-stretch text-center justify-start text-orange-700 text-5xl font-bold font-jost">Salon Timings</div>
                    <div className="text-center justify-start text-orange-700 text-lg font-medium font-jost mt-2">Monday to Sunday: 10:00 AM - 8:30 PM</div>
                    <div className="text-center justify-start text-orange-700 text-lg font-medium font-jost mt-1">Tuesday: Closed</div>
                </div>

                {/* social media */}
                <div>
                    <div className="self-stretch text-center justify-start text-orange-700 text-5xl font-bold font-jost mt-2">Follow Us</div>
                    <div className="self-stretch text-center justify-start text-orange-700 text-lg font-medium font-jost mt-1">Don’t miss promotions, follow us for the latest news<br /></div>
                    <div className='flex justify-center gap-5 mt-5'>
                        <a href='https://www.facebook.com/anupama.sharmanraj'><FiFacebook className='text-[#B63E12] text-[30px]' /></a>
                        <a href='https://www.instagram.com/zion_beautyofheaven?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'><FaInstagram className='text-[#B63E12] text-[30px]' /></a>
                        <a href={`https://wa.me/919739907517`} target='_blank'><ImWhatsapp className='text-[#B63E12] text-[30px]' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFrom

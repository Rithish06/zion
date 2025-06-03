import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useForm, Controller } from "react-hook-form"
import Select from "react-select";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DayPicker } from "react-day-picker";


const ContactFrom = () => {

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        init("RC_EHC25Ix-5xaXAl");
    }, []);

    const [showPicker, setShowPicker] = useState(false);

    const dateHandler = (data) => {
        console.log("Selected Date:", data.date);
    };


    const onSubmit = (data) => {
        setIsSubmitting(true);

        // Format date to dd-mm-yyyy
        let formattedDate = "";
        if (data.date) {
            const dateObj = new Date(data.date);
            const day = String(dateObj.getDate()).padStart(2, '0');
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const year = dateObj.getFullYear();
            formattedDate = `${day}-${month}-${year}`;
        }

        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phonenumber: data.phonenumber,
            service: data.service?.value || "",
            message: data.message,
            date: formattedDate,
            timeSolt: data.timeslot?.value || ""
        };

        console.log(payload);

        emailjs.send(
            "zion",
            "template_ioc1kev",
            payload
        )
            .then(() => {
                toast.success("Email sent successfully!");
                console.log("email sent");
                console.log(payload);
                reset();
            })
            .catch(() => {
                toast.error("Failed to send email");
                console.log("email not sent");
            })
            .finally(() => setIsSubmitting(false));
    };


    const options = [
        { value: "Bridal Makeup", label: "Bridal Makeup" },
        { value: "Nail Extension & Nail Art", label: "Nail Extension & Nail Art" },
        { value: "Makeup Services", label: "Makeup Services" },
        { value: "Haircut & Hair Colouring", label: "Haircut & Hair Colouring" },
        { value: "Hair Treatment", label: "Hair Treatment" },
        { value: "Hair Spa", label: "Hair Spa" },
        { value: "Eyelash Extension & Lifting", label: "Eyelash Extension & Lifting" },
        { value: "Advanced Facial", label: "Advanced Facial" },
    ];

    const generateTimeSlots = () => {
        const start = 10 * 60;
        const end = 20 * 60 + 30;
        const slots = [];

        for (let minutes = start; minutes <= end; minutes += 30) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            const ampm = hours >= 12 ? "PM" : "AM";
            const hour12 = hours % 12 === 0 ? 12 : hours % 12;
            const paddedHour = hour12 < 10 ? `0${hour12}` : hour12;
            const paddedMins = mins === 0 ? "00" : mins;
            const label = `${paddedHour}:${paddedMins} ${ampm}`;

            slots.push({ value: label, label });
        }

        return slots;
    };

    const timeslots = generateTimeSlots();

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
                    <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-10 lg:mt-10">
                        <div className="w-full md:w-[50%]">
                            <input
                                {...register("firstName", {
                                    required: "First name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "First name should contain only letters",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-[#565B5D] placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="First Name*"
                            />
                            {errors.firstName && (
                                <p className="text-red-600 text-sm">{errors.firstName.message}</p>
                            )}
                        </div>

                        <div className="w-full md:w-[50%]">
                            <input
                                {...register("lastName", {
                                    required: "Last name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Last name should contain only letters",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-[#565B5D] placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="Last Name*"
                            />
                            {errors.lastName && (
                                <p className="text-red-600 text-sm">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-3 lg:mt-8">
                        <div className="w-full md:w-[50%]">
                            <input
                                {...register("phonenumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit phone number",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-[#565B5D] placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="Phone Number*"
                            />
                            {errors.phonenumber && (
                                <p className="text-red-600 text-sm">{errors.phonenumber.message}</p>
                            )}
                        </div>

                        <div className="w-full md:w-[50%]">
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                className="w-full border-b-[2px] outline-none border-black placeholder:text-[#565B5D] placeholder:text-[16px] placeholder:font-[poppins] py-2"
                                placeholder="Email*"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Service Select */}
                    <div className="flex gap-5 mt-3 lg:mt-8">
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
                                    className="w-full text-base px-0"
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
                                            padding: 0,
                                        }),
                                        placeholder: (base) => ({
                                            ...base,
                                            fontFamily: "Poppins, sans-serif",
                                            color: "#565B5D",
                                            fontSize: "16px",
                                            padding: 0,
                                        }),
                                        singleValue: (base) => ({
                                            ...base,
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "16px",
                                            color: "#000",
                                            padding: 0,
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
                                            paddingLeft: "8px",
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            zIndex: 50,
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: 0,
                                        }),
                                        input: (base) => ({
                                            ...base,
                                            padding: 0,
                                            margin: 0,
                                        }),
                                        dropdownIndicator: (base) => ({
                                            ...base,
                                            padding: 0,
                                        }),
                                        indicatorSeparator: () => ({
                                            display: "none",
                                        }),
                                    }}
                                />
                            )}
                        />
                    </div>
                    {errors.service && (
                        <p className="text-red-600 text-sm mt-2">{errors.service.message}</p>
                    )}

                    <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-10 lg:mt-10">

                        {/* date input */}
                        <div className="w-full md:w-[50%]">
                            <Controller
                                name="date"
                                control={control}
                                rules={{ required: "Date is required" }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <input
                                            readOnly
                                            value={field.value ? field.value.toLocaleDateString("en-GB") : ""}
                                            onClick={() => setShowPicker(!showPicker)}
                                            className="w-full border-b-[2px] outline-none border-black placeholder:text-[#565B5D] text-[16px] font-[poppins] py-2 cursor-pointer"
                                            placeholder="dd-mm-yyyy"
                                        />
                                        {showPicker && (
                                            <div className="absolute bg-white shadow-lg z-10 mt-2 w-full">
                                                <DayPicker
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={(date) => {
                                                        field.onChange(date);
                                                        setShowPicker(false);
                                                    }}
                                                    classNames={{
                                                        day: "p-2 m-1", // Adds padding and margin to each day
                                                        row: "flex justify-center", // Optional: center-align rows
                                                        table: "w-full", // Optional: ensure full width
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            />
                            {errors.date && (
                                <p className="text-red-600 text-sm mt-2">{errors.date.message}</p>
                            )}
                        </div>

                        {/* time slot */}
                        <div className="flex flex-col mt-[3.5px] w-full md:w-[50%]">
                            <Controller
                                name="timeslot"
                                control={control}
                                rules={{ required: "Time slot is required" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={timeslots}
                                        placeholder="Select a slot*"
                                        isSearchable={false}
                                        className="w-full text-base px-0"
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
                                                padding: 0,
                                            }),
                                            placeholder: (base) => ({
                                                ...base,
                                                fontFamily: "Poppins, sans-serif",
                                                color: "#565B5D",
                                                fontSize: "16px",
                                                padding: 0,
                                            }),
                                            singleValue: (base) => ({
                                                ...base,
                                                fontFamily: "Poppins, sans-serif",
                                                fontSize: "16px",
                                                color: "#000",
                                                padding: 0,
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
                                                paddingLeft: "8px",
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                zIndex: 50,
                                            }),
                                            valueContainer: (base) => ({
                                                ...base,
                                                padding: 0,
                                            }),
                                            input: (base) => ({
                                                ...base,
                                                padding: 0,
                                                margin: 0,
                                            }),
                                            dropdownIndicator: (base) => ({
                                                ...base,
                                                padding: 0,
                                            }),
                                            indicatorSeparator: () => ({
                                                display: "none",
                                            }),
                                        }}
                                    />
                                )}
                            />
                            {errors.timeslot && (
                                <p className="text-red-600 text-sm mt-2">{errors.timeslot.message}</p>
                            )}
                        </div>


                    </div>

                    {/* Message */}
                    <div className="flex gap-5 mt-3 lg:mt-8">
                        <textarea
                            {...register("message", {
                                required: "Message is required",
                                pattern: {
                                    value: /^.{10,}$/,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                            className="w-full border-b-[2px] outline-none border-black placeholder:text-[#565B5D] placeholder:text-base placeholder:font-[poppins] py-2"
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
                        disabled={isSubmitting}
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
                        <a href='https://www.facebook.com/profile.php?id=61576688983378&mibextid=ZbWKwL' target='_blank'><FiFacebook className='text-[#B63E12] text-[30px]' /></a>
                        <a href='https://www.instagram.com/zion_beautyofheaven?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'><FaInstagram className='text-[#B63E12] text-[30px]' /></a>
                        <a href={`https://wa.me/919686173447`} target='_blank'><ImWhatsapp className='text-[#B63E12] text-[30px]' /></a>
                    </div>


                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default ContactFrom
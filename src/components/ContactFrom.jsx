import React from 'react'
import { assets } from '../assets/assets'
import { useForm, Controller } from "react-hook-form"
import Select from "react-select";

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
            <div className="w-full lg:w-[50%] flex justify-center items-center py-10 px-5" style={{ background: `url(${assets.contactImage})`, backgroundPosition: "center bottom", backgroundSize: "cover" }}>
                <form action="" className='bg-white/80 w-[95%] lg:w-[80%] px-10 py-18 rounded-2xl'>
                    <div className="text-black text-3xl lg:text-5xl font-bold font-jost">Ready, Set, Glow!</div>
                    <div className="justify-start text-black text-sm font-normal font-jost leading-none mt-5">Fill in the form below and our team will get in touch with you shortly to assist you with bookings, queries or recommendations.</div>

                    {/* row 1 */}
                    <div className="flex gap-5 mt-10">
                        {/* first name */}
                        <input
                            {...register("firstName", { required: true })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                            className='w-[50%] border-b-[2px] outline-none border-black placeholder:text-zink-600 placeholder:text-[16px] placeholder:font-[poppins] py-2'
                            placeholder='Frist Name*'
                        />
                        {errors.firstName?.type === "required" && (
                            <p role="alert">First name is required</p>
                        )}

                        {/* last name */}
                        <input
                            {...register("lastname", { required: false })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                            className='w-[50%] border-b-[2px] outline-none border-black placeholder:text-zink-600 placeholder:text-[16px] placeholder:font-[poppins] py-2'
                            placeholder='Last Name*'
                        />
                    </div>

                    {/* row 2 */}
                    <div className="flex gap-5 mt-8">
                        {/* first name */}
                        <input
                            {...register("phonenumber", { required: true })}
                            aria-invalid={errors.phonenumber ? "true" : "false"}
                            className='w-[50%] border-b-[2px] outline-none border-black placeholder:text-zink-600 placeholder:text-[16px] placeholder:font-[poppins] py-2'
                            placeholder='Frist Name*'
                        />{/*justify-start justify-start text-zinc-600 text-base font-medium font-['Montserrat'] text-base font-medium font-['Montserrat'] */}
                        {errors.phonenumber?.type === "required" && (
                            <p role="alert">Phone number is required</p>
                        )}

                        {/* last name */}
                        <input
                            {...register("lastname", { required: false })}
                            aria-invalid={errors.lastname ? "true" : "false"}
                            className='w-[50%] border-b-[2px] outline-none border-black placeholder:text-zink-600 placeholder:text-[16px] placeholder:font-[poppins] py-2'
                            placeholder='Frist Name*'
                        />
                    </div>

                    <div className="flex gap-5  mt-8">
                        {/* first name */}
                        <Controller
                            name="service"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Controller
                                    name="service"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={options}
                                            placeholder="Select an option"
                                            isSearchable={false}
                                            className='w-full text-base'
                                            styles={{
                                                control: (base, state) => ({
                                                    ...base,
                                                    backgroundColor: 'transparent',
                                                    border: '0',
                                                    borderBottom: '2px solid black',
                                                    boxShadow: 'none',
                                                    borderRadius: 0,
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: '16px',
                                                    color: '#000',
                                                }),
                                                placeholder: (base) => ({
                                                    ...base,
                                                    fontFamily: 'Poppins, sans-serif',
                                                    color: '#71717a', // zinc-600
                                                    fontSize: '16px',
                                                }),
                                                singleValue: (base) => ({
                                                    ...base,
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: '16px',
                                                    color: '#000',
                                                }),
                                                option: (base, state) => ({
                                                    ...base,
                                                    fontFamily: 'Poppins, sans-serif',
                                                    backgroundColor: state.isSelected
                                                        ? '#3b82f6' // Tailwind blue-500
                                                        : state.isFocused
                                                            ? '#e0e7ff' // Tailwind indigo-100
                                                            : '#fff',
                                                    color: '#000',
                                                    cursor: 'pointer',
                                                }),
                                                menu: (base) => ({
                                                    ...base,
                                                    zIndex: 50,
                                                }),
                                            }}
                                        />
                                    )}
                                />
                            )}
                        />
                        {errors.firstName?.type === "required" && (
                            <p role="alert">First name is required</p>
                        )}
                    </div>

                    <div className="flex gap-5  mt-8">
                        {/* last name */}
                        <textarea
                            {...register("message", { required: true })}
                            aria-invalid={errors.message ? "true" : "false"}
                            className='w-full border-b-[2px] outline-none border-black placeholder:text-zink-600 placeholder:text-base placeholder:font-[poppins] py-2'
                            placeholder='Message*'
                        />
                        {errors.message?.type === "required" && (
                            <p role="alert">Message is required</p>
                        )}
                    </div>

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
                </div>
            </div>
        </div>
    )
}

export default ContactFrom

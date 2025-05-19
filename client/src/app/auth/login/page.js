import Image from 'next/image'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdLock } from 'react-icons/md';

const UserLoginPage = () => {
    return (
        <div>

            <div className="flex justify-center">
                <div className="h-screen w-[474px] bg-gray-900">

                    <div className="img">
                        <Image src={'/logo/dark-nobg.png'} width={100} height={10} alt='logo' />

                    </div>

                    <div className="login-form px-8 mt-16">

                        <p className="text-white text-3xl font-semibold">Sign In</p>
                        <div className="form mt-6">


                            <label htmlFor="email" className='text-white'>Email</label><br />

                            <div className="relative w-full mt-1">
                                <MdEmail color='white' className='absolute top-1/2 left-3 transform -translate-y-1/2' size={24} />
                                <input
                                    type="email"
                                    name="email"
                                    className="border border-white w-full text-white bg-transparent pl-12 pr-3 py-3 rounded"
                                    placeholder="Enter your email"
                                />
                            </div>




                            <div className="pass mt-6">
                                <label htmlFor="password" className="text-white">
                                    Password
                                </label>
                                <div className="relative mt-1 w-full">
                                    <MdLock color="white" className="absolute top-1/2 left-3 transform -translate-y-1/2" size={24} />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="border border-white w-full text-white bg-transparent pl-12 pr-3 py-3 rounded"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            <p className="fog text-gray-400 mt-4 text-sm">FORGOT PASSWORD? </p>

                            <div className="mt-10">
                                <button className="w-full bg-[#003cff] text-white py-3 text-lg">SIGN IN</button>
                            </div>

                            <div className="mt-6">
                                <p className="text-gray-400">Don't have any account? Sign up</p>
                            </div>






                        </div>

                    </div>




                </div>
            </div>


        </div >
    )
}

export default UserLoginPage
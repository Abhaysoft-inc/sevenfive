import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Onboarding = () => {
    return (
        <>

            <div className="flex justify-center">
                <div className="h-screen w-[474px] bg-gray-900">
                    <div className="flex justify-center mt-20">
                        <Image src={'/1.svg'} width={300} height={1} alt='onboarding svg' />
                    </div>
                    <div className="meta mt-14">
                        <h1 className="text-center text-gray-50 text-4xl">SevenFive</h1>
                        <p className="text-center mt-6 px-10 text-gray-300">We help you track your 75% attendence so that you can give CTs and get extra TA marks.</p>
                        <div className="flex justify-center mt-16">
                            <button className="text-center text-white align-middle items-center bg-[#001dff] px-10 py-3 text-xl rounded-full flex gap-3">Get started  <HiOutlineArrowSmallRight size={25} />   </button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Onboarding       
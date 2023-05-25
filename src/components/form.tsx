import React, { useState } from 'react'
import { EditIcon, GridIcon, VerifiedIcon } from './ProviderIcon';
import { MasterCard } from './cardContainer/ProviderIcons';
import FormInput from './core/FormInput';
import "react-datepicker/dist/react-datepicker.css";

type Props = {}

const Form = (props: Props) => {
    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        const maxLength = e.target.maxLength;

        // Truncate the input value if it exceeds the maximum length
        if (inputValue.length > maxLength) {
            e.target.value = inputValue.slice(0, maxLength);
        }
    };
    return (
        <div className='p-4'>
            <div className="my-8 flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                    <p className='font-bold text-[#1E2A52]'>Card Number</p>
                    <span className='text-[#949DB7] text-sm'>Enter 16-digit card number on the card</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <EditIcon width={20} height={20} />
                    <span className="text-[#025EFF] font-semibold">Edit</span>
                </div>
            </div>
            <div className="">
                <form>
                    <div className="w-full space-y-8">
                        {/* <!-- Card Field --> */}
                        <div className="flex relative">

                            <FormInput
                                type="text"
                                value={''}
                                iconClass="mt-[14px]"
                                placeholder="3456  -  5643  -  5643  -  2424"
                                required
                                className="bg-[#FAFCFF] border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#025EFF] focus:bg-[#EDF3FF] focus:text-gray-700 font-semibold leading-none py-5 w-full pl-16"
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-digit characters
                                    const formattedValue = sanitizedValue.replace(/(\d{4})(?=\d)/g, '$1 - '); // Add dash and space every 4 digits

                                    const limitedValue = formattedValue.slice(0, 25); // Limit the input to 25 digits

                                    // Update the input value with formatted value
                                    e.target.value = limitedValue;

                                    const finalValue = limitedValue.replace(/-/g, "");
                                    // Update the input value with formatted value
                                    e.target.value = finalValue;
                                }}
                                rightIcon={<VerifiedIcon width={33} height={33} />}
                                leftIcon={<MasterCard width={33} height={33} />}
                            />
                        </div>
                        {/* CVV */}
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
                            <div className="w-full">
                                <p className='font-bold text-[#1E2A52]'>CVV Number</p>
                                <span className='text-sm text-[#949DB7]'>Enter the 3 or 4 digit number on your card</span>
                            </div>
                            <FormInput
                                type="password"
                                placeHolderClass='placeholder:text-center text-center'
                                value={''}
                                placeholder="327"
                                required
                                maxLength={4}
                                onChange={(e) => e.target.value}
                                rightIcon={<GridIcon width={24} height={24} />}
                                iconClass='mt-5'
                            />
                        </div>
                        {/* <!-- Expiry Date --> */}
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
                            <div className="w-full">
                                <p className='font-bold text-[#1E2A52]'>Expiry Date</p>
                                <span className='text-sm text-[#949DB7]'>Enter the expiration date of the card</span>
                            </div>
                            <div className="flex items-center justify-center w-full gap-3">
                                <FormInput
                                    type="number"
                                    value={''}
                                    placeholder="MM"
                                    placeHolderClass='placeholder:text-center text-center'
                                    required
                                    maxLength={2}
                                    onChange={handleInputChange}
                                />
                                <span className="text-3xl">/</span>
                                <FormInput
                                    type="number"
                                    value={''}
                                    placeholder="YYYY"
                                    maxLength={4}
                                    placeHolderClass='placeholder:text-center text-center'
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* <!-- Password --> */}
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
                            <div className="w-full">
                                <p className='font-bold text-[#1E2A52]'>Password</p>
                                <span className='text-sm text-[#949DB7]'>Enter your dynamic password</span>
                            </div>

                            <div className="w-full">
                                <FormInput
                                    type="password"
                                    value={''}
                                    placeHolderClass='pl-5 placeholder:text-2xl placeholder:text-[#1E2A52] placeholder:font-bold'
                                    placeholder="............."
                                    required
                                    maxLength={12}
                                    onChange={(e) => e.target.value}
                                    rightIcon={<GridIcon width={24} height={24} />}
                                    iconClass='mt-5'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-8">
                        <button type="submit" className="w-full bg-[#022EFF] py-5 rounded-lg text-white">
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
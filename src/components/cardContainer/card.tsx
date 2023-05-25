import ListItem from "./ListItem";
import { MasterCard, Chip, Wifi, PaymentSlip } from "./ProviderIcons";
import React from "react";

interface Props {
    items: { label: string; value: string, icon?: (() => JSX.Element) | string; }[];
}

const Card = ({ items }: Props) => {
    return (
        <div className="w-full md:w-[350px] h-full">
            <div />
            <div className="relative overflow-visible p-6 bg-[#E7ECF0] rounded-tl-2xl rounded-tr-2xl h-full mt-24">
                <div className="before:absolute before:w-[26px] before:h-[26px] before:rounded-full before:-left-[13px] before:-bottom-[13px] before:bg-white"></div>
                <div className="after:absolute after:w-4 after:h-4 after:rounded-full after:-right-[13px] after:-bottom-[13px] after:bg-white"></div>

                <div className="relative -mt-28 mb-4 p-6 h-56 md:h-72 rounded-2xl bg-white shadow-sm">
                    <div className="absolute w-1/4 top-[-0.2em] left-[37.5%] h-[0.2em] bg-[#2962ff] rounded-t-sm"></div>
                    <div className="absolute top-0 w-1/4 left-[37.5%] h-[0.5em] bg-[#2962ff36] rounded-b-sm shadow-md"></div>

                    <div className='flex flex-col justify-between h-full'>
                        <div className="hidden md:flex items-center justify-between">
                            <Chip width={34} height={34} />
                            <Wifi width={24} height={14} />
                        </div>
                        <div className="mt-0 md:mt-24">
                            <div className="flex items-center justify-between">
                                <p className="">Jonathan Micheal</p>
                                <div className="md:hidden block">
                                    <Chip width={44} height={44} />
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <span className="pr-2">
                                    &#x2022;&#x2022;&#x2022;&#x2022;
                                </span>
                                <span className="font-semibold">3564</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>
                                <span id="mm_mock">09</span>/<span id="yy_mock">22</span>
                                <div className="block md:hidden">
                                    <span className="pr-2">
                                        &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
                                    </span>
                                    <span className="font-semibold">3564</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <MasterCard width={44} height={44} />
                                <p className="text-[8px]">mastercard</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="w-full leading-8 text-sm pt-5">
                    {items.map((item, index) => (
                        <ListItem key={index} label={item.label} value={item.value} icon={item.icon} />
                    ))}
                </ul>
            </div>
            <div className="border-dashed border border-gray-400 mx-4"></div>
            <div className="relative overflow-visible p-6 bg-[#E7ECF0] rounded-bl-2xl rounded-br-2xl min-h-full">
                <div className="before:absolute before:w-[26px] before:h-[26px] before:rounded-full before:-left-[13px] before:-top-[13px] before:bg-white"></div>
                <div className="after:absolute after:w-[26px] after:h-[26px] after:rounded-full after:-right-[13px] after:-top-[13px] after:bg-white "></div>
                <div className="flex items-center justify-between">
                    <div className="h-full">
                        <div className="text-sm text-[#7983A3]">You have to Pay</div>
                        <div>
                            <span className='text-2xl font-semibold text-[#1E2A52]'>549</span>
                            <small>.99 <span className="">USD</span></small>
                        </div>
                    </div>
                    <PaymentSlip width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default Card
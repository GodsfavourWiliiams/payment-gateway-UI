import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Wrapper = (props: Props) => {
    return (
        <div className='bg-windowsImgLg lg:bg-windowsImgXl lg:bg-left bg-no-repeat p-4 sm:p-8 absolute top-0 left-0 right-0 bottom-0 flex items-center md:h-full h-fit overflow-auto'>
            <div className="w-full max-w-6xl m-auto p-6 bg-[#FBFCFE] h-fit relative ">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper
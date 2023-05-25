import { Colon, Logo } from './ProviderIcon';

const Header = () => {
    return (
        <div className="flex justify-between items-center gap-">
            <div className="flex items-center gap-2">
                <span className="bg-[#025EFF] rounded-full p-2">
                    <Logo width={40} height={20} />
                </span>

                <span className="text-base sm:text-xl">
                    <strong>AceCoin</strong><span>Pay</span>
                </span>
            </div>
            <div className="flex items-center font-semibold">
                <div className="text-white text-[10px] md:text-base space-x-1">
                    <span className='bg-[#1E2A52] p-2 rounded'>0</span>
                    <span className='bg-[#1E2A52] p-2 rounded'>1</span>
                </div>
                <Colon width={20} height={20} />
                <div className="text-white space-x-1 text-[10px] md:text-base">
                    <span className='bg-[#1E2A52] p-2 rounded'>1</span>
                    <span className='bg-[#1E2A52] p-2 rounded'>9</span>
                    C</div>
            </div>
        </div>
    )
}

export default Header;
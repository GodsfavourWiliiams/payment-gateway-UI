import { CloseIcon } from './ProviderIcon'

type Props = {}

const CloseButton = (props: Props) => {
    return (
        <div className='bg-[#F9FAFC] hover:bg-[#e5e6e7] cursor-pointer p-4 absolute right-0 top-0 '>
            <CloseIcon width={20} height={20} />
        </div>
    )
}

export default CloseButton
import React from 'react';

interface ListItemProps {
    label: string;
    value: string;
    icon?: (() => JSX.Element) | string;
}

const ListItem: React.FC<ListItemProps> = ({ label, value, icon }) => {
    return (
        <li className="flex items-center justify-between">
            <span className="text-[#7983A3] capitalize">{label}</span>
            <div className="inline-flex">
                {typeof icon !== 'string' &&
                    <span className=" bg-[#1F2B53] rounded-[50%] p-2  flex items-center">
                        {icon && icon()}
                    </span>
                }
                <strong className='ml-2'>{value}</strong>
            </div>
        </li>
    );
};

export default ListItem;

import React from 'react';
import Wrapper from '../components/core/wrapper';
import Header from '../components/header';
import Form from '../components/form';
import Card from '../components/cardContainer/card';
import { AppleLogo } from './ProviderIcon';
import CloseButton from '../components/closeButton';

type Props = {}

const Index = (props: Props) => {
    const items = [
        { label: 'Company', value: 'Apple', icon: AppleLogo },
        { label: 'Order number', value: '1266201', icon: '' },
        { label: 'Product', value: 'MacBook Air', icon: '' },
        { label: 'VAT (20%)', value: '$100.00', icon: '' },
    ];
    return (
        <Wrapper>
            <CloseButton />
            <div className="flex md:flex-row flex-col items-center justify-around md:space-x-10 space-y-10 mt-10">
                <div>
                    <Header />
                    <Form />
                </div>
                <Card items={items} />
            </div>

        </Wrapper>
    )
}

export default Index
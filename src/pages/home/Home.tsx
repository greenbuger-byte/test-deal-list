import React from 'react';

import DefaultLayout from "@deal/layouts/default-layout";
import mapCommonStates from "@deal/utils/store";
import DealsList from "@deal/components/deals-list";

const Home:React.FC = () => {
    return (
        <DefaultLayout>
            <DealsList />
        </DefaultLayout>
    );
};

export default mapCommonStates(Home);
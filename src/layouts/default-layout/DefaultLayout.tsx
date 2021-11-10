import React from 'react';

import { Content } from "./DefaulLayout.styles";

const DefaultLayout:React.FC = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default DefaultLayout;
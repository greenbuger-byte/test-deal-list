import React from 'react';
import { Link } from "react-router-dom";
import DefaultLayout from "@deal/layouts/default-layout";
import { NotFoundWrapper } from "@deal/pages/not-found/NotFound.styles";
import {Links} from "@deal/utils/links";

const NotFound = () => {
    enum TEXT {
        not_found = '404 Страница не найдена',
        back = 'Вернуться на главную'
    }
    return (
        <DefaultLayout>
            <NotFoundWrapper>
           <p>{TEXT.not_found}</p>
            <p><Link to={Links.home}>{TEXT.back}</Link></p>
        </NotFoundWrapper>
        </DefaultLayout>
    );
};

export default NotFound;
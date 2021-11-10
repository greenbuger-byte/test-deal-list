import React from 'react';
import {DealsHeaderItem, DealsHeaderWrapper} from "./DealsHeader.styles";

const DealsHeader = () => {
    enum TEXT {
        task_number = 'Номер / Задача',
        type_and_Author = 'Тип задания / Автор',
        account_and_terminal = 'Аккаунт / Терминал',
        status = 'Статус',
    }

    return (
        <DealsHeaderWrapper>
            <DealsHeaderItem>{TEXT.task_number}</DealsHeaderItem>
            <DealsHeaderItem>{TEXT.type_and_Author}</DealsHeaderItem>
            <DealsHeaderItem>{TEXT.account_and_terminal}</DealsHeaderItem>
            <DealsHeaderItem>{TEXT.status}</DealsHeaderItem>
        </DealsHeaderWrapper>
    );
};

export default DealsHeader;
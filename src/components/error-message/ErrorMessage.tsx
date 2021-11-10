import React from 'react';
import { ErrorMessageWrapper } from "./ErrorMessage.styles";

interface IErrorMessageProps {
    message?: string,
}

const ErrorMessage:React.FC<IErrorMessageProps> = (props) => {
    const { message } = props;
    const renderMessage = message && <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;

    return (
       <>{renderMessage}</>
    );
};

export default ErrorMessage;
import React from 'react';
import { SkeletonWrapper } from "@deal/components/skeleton/Skeleton.styles";

interface ISkeletonProps {
    count: number,
}

const Skeleton:React.FC<ISkeletonProps> = (props) => {
    const { count } = props;
    const renderSkeleton = Array(count).fill('').map((_, index) => <SkeletonWrapper key={index} />);
    return <>{renderSkeleton}</>;
};

export default Skeleton;
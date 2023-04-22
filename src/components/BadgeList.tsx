import Badge from './Badge';

export type TBadgeListProps = {
    isLowestInterestRate?: boolean;
    isMaximumAmount?: boolean;
    tags?: string[];
};

function BadgeList({isLowestInterestRate, isMaximumAmount, tags = []}: TBadgeListProps) {
    return (
        <>
            {tags
                .filter((item) => item === '우대')
                .map((item, index) => {
                    return <Badge text={item} key={`우대${index}`} isNaverGreen={true} />;
                })}
            {isLowestInterestRate && <Badge text="최저금리" key="최저금리" isGreen={true} />}
            {isMaximumAmount && <Badge text="최대한도" key="최대한도" isGreen={true} />}
            {tags
                .filter((item) => item !== '우대')
                .map((item, index) => {
                    return <Badge text={item} key={index} />;
                })}
        </>
    );
}

export default BadgeList;

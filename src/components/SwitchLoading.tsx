import classNames from 'classnames/bind';

import ContentWrapper from './ContentWrapper';
import ProductInfo from './ProductInfo';
import SwitchTitle from './SwitchTitle';

import styles from './SwitchLoading.module.scss';
import CloseHeader from './CloseHeader';
import Container from './Container';

const cx = classNames.bind(styles);

const DEMO_DATA = [
    {
        partnerCode: '004',
        name: '하나 직장인 신용대출',
        account: '1103333010202',
    },
    {
        partnerCode: '003',
        name: '신한은행',
        account: '1103333010202',
    },
];

function SwitchLoading() {
    return (
        <>
            <CloseHeader/>
            <Container>
                <ContentWrapper>
                    <h2 className="blind">대출비교</h2>
                    <SwitchTitle
                        title={
                            <>
                                내 대출 정보를
                                <br />
                                불러오고 있어요
                            </>
                        }
                        description="잠시만 기다려주세요"
                    />
                    <ul>
                        {DEMO_DATA.map(({partnerCode, name, account}, index) => (
                            <li className={cx('item')} key={index}>
                                <ProductInfo corpId={partnerCode} name={name} account={account} loading={true} />
                            </li>
                        ))}
                    </ul>
                </ContentWrapper>
            </Container>
        </>
    );
}

export default SwitchLoading;

import classNames from 'classnames/bind';
import IconCheck from '../assets/IconSvg/IconCheck';
import ContentWrapper from './ContentWrapper';

import styles from './SwitchSelect.module.scss';
import ProductInfo from './ProductInfo';
import CloseHeader from './CloseHeader';
import Container from './Container';
import SwitchTitle from './SwitchTitle';
import SwitchButton from './SwitchButton';

const cx = classNames.bind(styles);

const DEMO_DATA = [
    {
        partnerCode: '004',
        name: '하나 직장인 신용대출',
        account: '1103333010202',
        interestRate: 5.19,
        amount: 18585900,
        isChecked: true,
    },
    {
        partnerCode: '003',
        name: '신한은행',
        account: '1103333010202',
        interestRate: 5.19,
        amount: 18585900,
        isChecked: false,
    },
];

function ProductList() {
    return (
        <ul className={cx('list')}>
            {DEMO_DATA.map(({partnerCode, name, account, amount, interestRate, isChecked}, index) => (
                <li className={cx('item')} key={index}>
                    <input type="radio" className="hidden" id={`switchCheck${index}`} checked={isChecked} />
                    <label htmlFor={`switchCheck${index}`} className={cx('label', {'is-checked': isChecked})}>
                        <ProductInfo
                            corpId={partnerCode}
                            name={name}
                            account={account}
                            amount={amount}
                            interestRate={interestRate}
                        />
                        <span className={cx('icon-check')}>
                            <IconCheck width={12} height={10} fill={isChecked ? '#fff' : '#bbbbbd'} />
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

function SwitchSelect() {
    return (
        <>
            <CloseHeader/>
            <Container>
                <ContentWrapper>
                    <h2 className="blind">대출비교</h2>
                    <SwitchTitle
                        title={
                            <>
                                더 나은 조건을 찾고 싶은
                                <br />
                                대출을 선택해 주세요
                            </>
                        }
                        description="최대 3개까지 선택할 수 있어요."
                    />
                    <ProductList />
                </ContentWrapper>
                <SwitchButton />
            </Container>
        </>
    );
}

export default SwitchSelect;

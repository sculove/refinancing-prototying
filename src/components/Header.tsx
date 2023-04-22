import classNames from 'classnames/bind';
import LogoNPay from '@financial/common-icons/dist/LogoNpay';
import TextHeaderLoanCompare from '../assets/IconSvg/TextHeaderLoanCompare';
import styles from './Header.module.scss';
import TextHeaderIndividualLoanCompare from '../assets/IconSvg/TextHeaderIndividualLoanCompare';

const cx = classNames.bind(styles);
type THeaderProps = {
    rightComponent?: JSX.Element;
    main?: boolean
    title: string
};
export default function Header({title, main, rightComponent}: THeaderProps) {
    return (
        <div className={cx('article')}>
            <h1 className={cx('npay')}>
                <a href="#">
                    <LogoNPay width={57} height={22} fill="#000" />
                    <span className="blind">네이버페이</span>
                </a>
            </h1>
            <h2 className={cx('service')}>
                <a href="#" className={cx('link')}>
                    {title === "대출비교" ? <TextHeaderLoanCompare width={59} height={24} /> : <TextHeaderIndividualLoanCompare width={88} height={24} />}
                </a>
            </h2>
            {rightComponent && <div className={cx('side-right')}>{rightComponent}</div>}
            {main && <a
                href="#"
                className={cx('link-side')}
                >
                신용점수
            </a>}
        </div>
    );
}

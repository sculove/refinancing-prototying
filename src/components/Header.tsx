import classNames from 'classnames/bind';
import LogoNPay from '@financial/common-icons/dist/LogoNpay';
import TextHeaderLoanCompare from '../assets/IconSvg/TextHeaderLoanCompare';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
type THeaderProps = {
    rightComponent?: JSX.Element;
    main?: boolean
};
export default function Header({main, rightComponent}: THeaderProps) {
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
                    <TextHeaderLoanCompare width={59} height={24} />
                    <span className="blind">대출 비교</span>
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

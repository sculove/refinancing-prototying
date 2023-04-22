import classNames from 'classnames/bind';

import IconArrowRight from '../assets/IconSvg/IconArrowRight';
import styles from './LoanSwitch.module.scss';
import OrderFilter from './OrderFilter';
import Info from './Info';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LoanSwitch() {
    return (
        <div className={cx('article')}>
            <div className={cx('title-area')}>
                <h4 className={cx('title')}>
                    갈아탈 수 있는 대출 <span className={cx('highlight')}>2</span>
                </h4>
                <OrderFilter />
            </div>
            <ul>
                {/* 합치기 */}
                <li className={cx('item')}>
                    <Link to="/product/id" className={cx('link')}>
                        <Info
                            code="020"
                            name="우리은행"
                            text="우리 WON하는 직장인대출"
                            tags={['1금융', '마이너스대출', '오늘입금']}
                            amount={9000}
                            interestRate={5.49}
                        />
                        <p className={cx('text-banner')}>
                            월 최대 <em className={cx('highlight')}>98,200원</em> 아낄 수 있어요
                        </p>
                        <IconArrowRight width={6} height={10} fill="#1e1e23" />
                    </Link>
                </li>
                {/* 갈아타기 */}
                <li className={cx('item')}>
                    <a href="#" className={cx('link')} onClick={(e) => e.preventDefault()}>
                        <Info
                            code="081"
                            name="하나은행"
                            text="하나원큐 신용대출"
                            tags={['1금융', '마이너스 통장']}
                            amount={2500}
                            interestRate={6.83}
                        />
                        <p className={cx('text-banner')}>
                            월 최대 <em className={cx('highlight')}>52,000원</em> 아낄 수 있어요
                        </p>
                        <IconArrowRight width={6} height={10} fill="#1e1e23" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default LoanSwitch;

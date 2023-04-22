import classNames from 'classnames/bind';

import AmountWithUnit from './AmountWithUnit';

import IconSwitchDown from '../assets/IconSvg/IconSwitchDown';
import styles from './LoanSummaryLink.module.scss';
import { BiCorpCircleImage } from '@financial/common-bi';
import { makeInterestNumber } from './Info';

const cx = classNames.bind(styles);

type TLoanSummaryLinkProps = {
    isSwitch?: boolean; // 마크업확인용
};

function LoanSummaryLink({isSwitch}: TLoanSummaryLinkProps) {
    return (
        <>
            <div className={cx('article', 'type-multi')}>
                <a
                    className={cx('link')}
                    href={"#"}
                    onClick={(e) => e.preventDefault()}
                    >
                    <div className={cx('result-info')}>
                        <div className={cx('bi')}>
                            <BiCorpCircleImage
                                corpId={"020"}
                                eSize={34}
                            />
                            <span className={cx('blind')}>
                                {"111"}
                            </span>
                        </div>
                        <strong>최저금리</strong>
                        <div className={cx('result')}>
                            {makeInterestNumber(5.49)}%
                        </div>
                    </div>
                    {/* 갈아타기시에만 노출 */}
                    {isSwitch && (
                        <p className={cx('switch-info')}>
                            갈아타면 <span className={cx('highlight')}>0.74%</span>
                            <span className={cx('icon')}>
                                <IconSwitchDown width={13} height={11} />
                                <span className="blind">내려감</span>
                            </span>
                        </p>
                    )}
                </a>
                <a className={cx('link')} href={"#"} onClick={(e) => e.preventDefault()}>
                    <div className={cx('result-info')}>
                        <div className={cx('bi')}>
                            <BiCorpCircleImage
                                corpId={"020"}
                                eSize={34}
                            />
                        </div>
                        <strong>최대한도</strong>
                        <div className={cx('result', 'limit')}>
                            <AmountWithUnit amount={5000} type="summary" />
                        </div>
                    </div>
                    {/* 갈아타기시에만 노출 */}
                    {isSwitch && (
                        <p className={cx('switch-info')}>
                            합치면 <span className={cx('highlight')}>2,500만원</span>
                            <span className={cx('icon', 'up')}>
                                <IconSwitchDown width={13} height={11} />
                                <span className="blind">올라감</span>
                            </span>
                        </p>
                    )}
                </a>
            </div>
        </>
    );
}

export default LoanSummaryLink;

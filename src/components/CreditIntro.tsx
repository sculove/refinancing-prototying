import classNames from 'classnames/bind';
import {IconArrowRightRoundBold} from '@financial/common-icons';
import {BiCorpCircleImage} from '@financial/common-bi';
import IconCreditBenefit1 from '../assets/IconSvg/IconCreditBenefit1';
import IconCreditBenefit2 from '../assets/IconSvg/IconCreditBenefit2';
import IconCreditBenefit3 from '../assets/IconSvg/IconCreditBenefit3';
import IconSwitchDown from '../assets/IconSvg/IconSwitchDown';
import AgreementModal from './AgreementModal';
import styles from './CreditIntro.module.scss';
import { MouseEventHandler, useState } from 'react';

const cx = classNames.bind(styles);

// TODO - 이어하기
function SectionLoanCompare() {
    return (
        <div className={cx('section-box')}>
            <h3 className={cx('title')}>새로 받을 수 있는 내 대출 조건은?</h3>
            <div className={cx('flexible-box')}>
                <div className={cx('item')}>
                    <em className={cx('label')}>최저금리</em>
                    ?.??%
                </div>
                <div className={cx('item')}>
                    <em className={cx('label')}>최대한도</em>? 만원
                </div>
            </div>
            <a href="!#" className={cx('link')} onClick={e => e.preventDefault()}>
                대출 비교하기
            </a>
        </div>
    );
}

function SectionLoanSwitch({onClick}: {onClick: MouseEventHandler<HTMLAnchorElement>}) {
    return (
        <div className={cx('section-box', 'type-switch-none')}>
            <h3 className={cx('title')}>쉽게 갈아타고 이자 아끼세요</h3>
            <div className={cx('flexible-box')}>
                <div className={cx('item')}>
                    <div className={cx('bi')}>
                        <BiCorpCircleImage corpId="020"/>
                    </div>
                    <em className={cx('label')}>내 대출이자</em>
                    <span className={cx('sub')}>3월</span>
                    1,185,000원
                </div>
                <div className={cx('item')}>
                    <em className={cx('label')}>갈아타면</em>
                    ?원
                    <span className={cx('icon-down')}>
                        <IconSwitchDown width={12} height={12} fill="#0a7df3" />
                        <span className="blind">내려감</span>
                    </span>
                </div>
            </div>
            <a href="!#" className={cx('link')} onClick={onClick}>
                대출 갈아타기
            </a>
        </div>
    );
}

function SectionBenefit() {
    return (
        <div className={cx('section-benefit')}>
            <h3 className={cx('title')}>이런 점이 좋아요</h3>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <span className={cx('icon')}>
                        <IconCreditBenefit1 width={24} height={24} />
                    </span>
                    아무리 조회해도 <b>신용점수는 그대로</b>
                </li>
                <li className={cx('item')}>
                    <span className={cx('icon')}>
                        <IconCreditBenefit2 width={24} height={24} />
                    </span>
                    대출안심케어 <b>1년 무료</b>
                    <span className={cx('icon-arrow')}>
                        <IconArrowRightRoundBold width={6} height={10} fill="#404048" />
                    </span>
                </li>
                <li className={cx('item')}>
                    <span className={cx('icon')}>
                        <IconCreditBenefit3 width={24} height={24} />
                    </span>
                    잘 갚으면 <b>이자 최대 10만원</b> 지원
                    <span className={cx('icon-arrow')}>
                        <IconArrowRightRoundBold width={6} height={10} fill="#404048" />
                    </span>
                </li>
            </ul>
        </div>
    );
}

// 개인대출 인트로
function CreditIntro() {
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
        <>
            <div className={cx('article')}>
                <SectionLoanSwitch onClick={(event) => {
                    setIsShow(true)
                    event.preventDefault()
                }}/>
                <SectionLoanCompare />
                <div className={cx('round-wrapper')}>
                    <SectionBenefit />
                </div>
            </div>
            <AgreementModal
                isShow={isShow}
                onClose={() => {
                    setIsShow(false)
                }}
            />
        </>
    );
}

export default CreditIntro;

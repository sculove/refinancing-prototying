import classNames from 'classnames/bind';

import CorpChips from './CorpChips';

import styles from './ProductResultSwitchCalculation.module.scss';
import { BiCorpCircleImage } from '@financial/common-bi';

const cx = classNames.bind(styles);

function ProductResultSwitchCalculation() {
    return (
        <div className={cx('article')}>
            <h3 className="blind">갈아타기 계산기</h3>
            <CorpChips />
            <div className={cx('box')}>
                <strong className={cx('title')}>
                    <span className={cx('label')}>월이자</span>
                    <span className={cx('desc')}>228,750원</span>
                </strong>
                <p className={cx('text')}>
                    월 평균 <span className={cx('highlight')}>147,500원</span> 아낄 수 있어요
                </p>
                <div className={cx('area-product')}>
                    <em>
                        <span className={cx('bi')}>
                            <BiCorpCircleImage corpId="004" eSize={16} />
                        </span>
                        상품명
                    </em>
                    <span>월 376,250원</span>
                </div>
            </div>
            <div className={cx('box')}>
                <strong className={cx('title')}>
                    <span className={cx('label')}>대출 한도</span>
                    <span className={cx('desc')}>9,000만원</span>
                </strong>
                <p className={cx('text')}>
                    <span className={cx('highlight')}>4,000만원</span> 더 받을 수 있어요
                </p>
                <div className={cx('area-product')}>
                    <em>
                        <span className={cx('bi')}>
                            <BiCorpCircleImage corpId="004" eSize={16} />
                        </span>
                        상품명
                    </em>
                    <span>잔액 50,000,000원</span>
                </div>
            </div>
            <ul className={cx('list-caution')}>
                <li className={cx('item')}>
                    <em className={cx('color-red')}>중도상환수수료 300,000원</em>이 나올 수 있습니다.
                </li>
                <li className={cx('item')}>내 대출과 같은 1년 만기일시상환 기준입니다.</li>
                <li className={cx('item')}>실제 대출 조건과 다를 수 있습니다.</li>
            </ul>
        </div>
    );
}

export default ProductResultSwitchCalculation;

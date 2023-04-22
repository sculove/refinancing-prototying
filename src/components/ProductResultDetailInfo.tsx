import classNames from 'classnames/bind';

import BadgeList from './BadgeList';

import styles from './ProductResultDetailInfo.module.scss';
import { BiCorpCircleImage } from '@financial/common-bi';

const cx = classNames.bind(styles);

function ProductInfo() {
    return (
        <div className={cx('info')}>
            <h3 className={cx('bank-name')}>우리은행</h3>
            <p className={cx('desc')}>우리 WON하는 직장인 대출</p>
            <div className={cx('badge')}>
                <BadgeList
                    tags={['1금융', '마이너스대출', '오늘입금']}
                />
            </div>
            <div className={cx('bank-icon')}>
                <BiCorpCircleImage corpId={"020"} eSize={50} />
            </div>
        </div>
    );
}


function ProductBanner() {
    return (
        <p className={cx('text-banner')}>
            월 최대 <em className={cx('highlight')}>98,200원</em> 아낄 수 있어요
        </p>
    );
}

export default function ProductResultDetailInfo() {
    return (
        <div className={cx('article', {'type-not-login': false})}>
            <ProductInfo />
            <ProductBanner />
        </div>
    );
}

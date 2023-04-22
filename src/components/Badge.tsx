import classNames from 'classnames/bind';
import {LogoNpay} from '@financial/common-icons';

import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

type TBadgeProps = {
    text: string;
    isGreen?: boolean; // 일반 우대 여부 + 합치기
    isNaverGreen?: boolean; // 네이버 우대 여부
};

{
    /* [D] 대환대출 - 합치기 Badge type isGreen */
}
function Badge({text, isGreen, isNaverGreen}: TBadgeProps) {
    return (
        <div className={cx('article', {'type-green': isGreen, 'type-naver-green': isNaverGreen})}>
            {isNaverGreen && (
                <>
                    <LogoNpay width={32} height={14} fill="#09aa5c" />
                    <span className="blind">네이버페이</span>
                </>
            )}
            {text}
        </div>
    );
}

export default Badge;

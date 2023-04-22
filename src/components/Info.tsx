import classNames from 'classnames/bind';
import sum from 'lodash/sum';
import subtract from 'lodash/subtract';

import BadgeList from './BadgeList';

import styles from './Info.module.scss';
import { BiCorpCircleImage } from '@financial/common-bi';
import AmountWithUnit from './AmountWithUnit';

// 이자는 소수점 2번째까지 노출함
export const makeInterestNumber = (...args: [any, ...any[]]) => {
    const _sum = sum([...args]);

    if (isNaN(_sum)) {
        return '0.00';
    }

    return parseFloat(Number(_sum).toFixed(2));
};

const cx = classNames.bind(styles);

type TInfoProps = {
    code: string;
    name: string;
    text?: string;
    interestRate?: number;
    tags?: string[];
    isLowestInterestRate?: boolean;
    isMaximumAmount?: boolean;
    specialInterestRate?: number;
    amount?: number;
    specialAmount?: number;
    subtext?: string;
    subtextGreen?: boolean;
    alignCenter?: boolean;
    typeFiveTab?: boolean;
    typeRecommend?: boolean;
    rangeInterestRate?: number;
    rangeAmount?: number;
};

function Info({
    code,
    name,
    text,
    tags,
    isLowestInterestRate,
    isMaximumAmount,
    interestRate,
    specialInterestRate,
    amount,
    specialAmount,
    subtext,
    subtextGreen,
    alignCenter,
    typeFiveTab,
    typeRecommend,
    rangeInterestRate,
    rangeAmount,
}: TInfoProps) {
    return (
        <div className={cx('article', {'type-five-tab': typeFiveTab})}>
            <div className={cx('flexible-box', {'align-center': alignCenter})}>
                <div className={cx('bi')}>
                    <BiCorpCircleImage corpId={code} eSize={42} />
                </div>
                <div className={cx('area-info')}>
                    <div className={cx('wrap-name')}>
                        <strong className={cx('name')}>{name}</strong>
                        {subtext && (
                            <span className={cx('subtext', {'type-green': subtextGreen})} aria-hidden={true}>
                                {subtext}
                            </span>
                        )}
                    </div>
                    {text && <div className={cx('text')}>{text}</div>}
                    {((tags && tags.length > 0) || isMaximumAmount || isLowestInterestRate) && (
                        <div className={cx('badge-area')}>
                            <BadgeList
                                isLowestInterestRate={isLowestInterestRate}
                                isMaximumAmount={isMaximumAmount}
                                tags={tags}
                            />
                        </div>
                    )}
                    {interestRate && (
                        <dl className={cx('description', {'type-recommend': typeRecommend})}>
                            <div className={cx('item')}>
                                {/* [D] 5탭홈/상세에서는 예상금리*/}
                                <dt className={cx('label')}>금리</dt>
                                <dd>
                                    {specialInterestRate ? (
                                        <del className={cx('cancel')}>
                                            <span className="blind">우대 전 금리</span>
                                            {`${makeInterestNumber(interestRate, specialInterestRate)}%`}
                                        </del>
                                    ) : null}
                                    {rangeInterestRate ? (
                                        <span className={cx('range')}>
                                            <span className="blind">금리 범위</span>
                                            {`${makeInterestNumber(interestRate, rangeInterestRate)}%`} ~
                                        </span>
                                    ) : null}
                                    <strong>{makeInterestNumber(interestRate)}</strong>%
                                </dd>
                            </div>
                            <div className={cx('item')}>
                                <dt className={cx('label')}>최대한도</dt>
                                <dd>
                                    {specialAmount ? (
                                        <del className={cx('cancel')}>
                                            <span className="blind">우대 전 한도</span>
                                            <AmountWithUnit
                                                amount={amount && subtract(amount, specialAmount)}
                                                type="cancel"
                                            />
                                        </del>
                                    ) : null}
                                    {rangeAmount ? (
                                        <span className={cx('range')}>
                                            <span className="blind">한도 범위</span>
                                            <AmountWithUnit
                                                amount={amount && subtract(amount, rangeAmount)}
                                                type="cancel"
                                            />{' '}
                                            ~
                                        </span>
                                    ) : null}
                                    <strong className={cx('limit')}>
                                        {typeRecommend && <span className={cx('prefix')}>최대</span>}
                                        <AmountWithUnit amount={amount} type="info" />
                                    </strong>
                                </dd>
                            </div>
                        </dl>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Info;

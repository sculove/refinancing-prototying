import classNames from 'classnames/bind';

import styles from './AmountWithUnit.module.scss';
import type {ValuesType} from 'utility-types';

export const UNIT = {
    WON: 'won',
    TEN_THOUSAND: 'tenThousand',
    MILLION: 'million',
    TRILLION: 'trillion',
} as const;

export type TAmount = {
    [key in ValuesType<typeof UNIT>]: string;
};

const UNIT_REGEX = /\B(?=(\d{4})+(?!\d))/g; // 만 단위로 자르는 정규식


const createUnitList = (amount: string | number) => {
    const _amount = String(amount);

    if (isNaN(Number(_amount))) {
        return '';
    }

    const DELIMITER = ',';

    return String(_amount).replace(UNIT_REGEX, DELIMITER).split(DELIMITER);
};


/**
 * 단위별 숫자
 * ex) (100010000 -> {million: 1, tenThousand: 1)
 * */
export const amountUnit = (amount: string | number) => {
    const _unitList = createUnitList(amount) as [];
    const matchCont = String(amount).match(UNIT_REGEX)?.length ?? 0;
    // 대출에서는 억 단위까지 노출함(..조, 경 단위 금액이 올 수 없음..)
    const units = [UNIT.WON, UNIT.TEN_THOUSAND, UNIT.MILLION, UNIT.TRILLION];

    return _unitList.reduce((acc, cur, index) => {
        if (matchCont - index > 1) {
            acc[units[2]] = `${acc?.[units[2]] ?? ''}${cur}`;
        } else {
            acc[units[matchCont - index]] = cur;
        }

        return acc;
    }, {} as TAmount);
};

/**
 * 단위까지 노출
 * ex) (100010000 -> 1억1만원)
 *
 * */
export const makeKorUnit = (amount: string | number = ''): string => {
    if (isNaN(Number(amount))) {
        return '';
    }

    const _unitList = createUnitList(amount) as [];
    const matchCont = String(amount).match(UNIT_REGEX)?.length ?? 0;
    const units = ['원', '만', '억', '조', '경'];

    const amountWithUnit = _unitList
        .map((num, index) => {
            const localeNum = Number(num); // 숫자 단위는 locale 표현식이 필요함
            const unit = units[matchCont - index]; // 억 이하의 자리는 unit이 없음

            if (localeNum) {
                return `${localeNum.toLocaleString()}${unit}`;
            }
        })
        .filter((num) => Boolean(num))
        .join(' ');

    return `${amountWithUnit}원`;
};


const cx = classNames.bind(styles);

type TAmountWithUnitProps = {
    amount: any;
    type?: 'info' | 'summary' | 'cancel' | 'graph';
    delimiter?: string;
};

export default function AmountWithUnit({amount, type, delimiter = ' '}: TAmountWithUnitProps) {
    const {won, tenThousand, million} = amountUnit(amount) as TAmount;

    const classNameList = ['unit', type && `type-${type}`];

    return (
        <>
            {Boolean(+million) && (
                <>
                    {Number(million).toLocaleString()}
                    <span className={cx(classNameList)}>억</span>
                </>
            )}
            {Boolean(+million) && Boolean(+tenThousand) && delimiter}
            {Boolean(+tenThousand) && (
                <>
                    {Number(tenThousand).toLocaleString()}
                    <span className={cx(classNameList)}>만</span>
                </>
            )}
            {Boolean(+tenThousand) && Boolean(+won) && delimiter}
            {Boolean(+won) && <>{Number(won).toLocaleString()}</>}
            <span className={cx(classNameList)}>만원</span>
        </>
    );
}

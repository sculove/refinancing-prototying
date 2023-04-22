import classNames from 'classnames/bind';

import styles from './CorpChips.module.scss';
import { BiCorpCircleImage } from '@financial/common-bi';

const cx = classNames.bind(styles);

type TCorpBiProps = {
    biInfo: {
        corpId: string;
        empty?: boolean;
    }[];
};

function CorpBi({biInfo}: TCorpBiProps) {
    return (
        <span className={cx('area-bi')}>
            {biInfo.map(({corpId, empty}, index) => {
                return (
                    <span className={cx('bi', {empty: empty})} key={index}>
                        {!empty && <BiCorpCircleImage eSize={22} corpId={corpId} />}
                    </span>
                );
            })}
        </span>
    );
}

function CorpChips() {
    return (
        <ul className={cx('article')}>
            <li className={cx('item')}>
                {/* [D] 선택한 경우 checked / 'is-checked' 클래스 추가 */}
                <input type="radio" id="chip1" className="hidden" name="corpFilter" checked={true} />
                <label htmlFor="chip1" className={cx('chip', {'is-checked': true})}>
                    <CorpBi biInfo={[{corpId: '004'}]} />
                    KB 직장인든든 신용대출
                </label>
            </li>
        </ul>
    );
}

export default CorpChips;

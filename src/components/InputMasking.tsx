import classNames from 'classnames/bind';

import styles from './InputMasking.module.scss';

const cx = classNames.bind(styles);

type TInputMaskingProps = {
    nonMasking: string[];
    masking: number;
    styleDot?: string;
};

function InputMasking({nonMasking, masking, styleDot}: TInputMaskingProps) {
    return (
        <div className={cx('article', styleDot)} aria-hidden={true}>
            {nonMasking.map((value, key) => (
                <span key={key} className={cx('num')}>
                    {value}
                </span>
            ))}
            {Array.from({length: masking}).map((_, key) => (
                <span key={key} className={cx('dot')} />
            ))}
        </div>
    );
}

export default InputMasking;

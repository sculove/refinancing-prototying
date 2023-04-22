import classNames from 'classnames/bind';
// import InputMasking from '$/components/commons/input/InputMasking';
import InputTextFlexibleBox from './InputTextFlexibleBox';

import styles from './RegistrationNumberInput.module.scss';
import InputMasking from './InputMasking';

const cx = classNames.bind(styles);


function RegistrationNumberInput() {

    return (
        <>
            <InputTextFlexibleBox
                styleClassName="type-comparison">
                <div className={cx('article', {'is-focus': false}, {'is-error': false})}>
                    <div className={cx('input')}>
                        <div className={cx('input-value', 'type-text')}>
                            <input
                                type="text"
                                title="주민등록번호 앞자리"
                                className={cx('input-value')}
                                value={"990101"}
                                pattern="[0-9]*" // 키패드에 숫자만 나오게 함
                                inputMode={'numeric'}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className={cx('dash')}>
                        <span className="blind">-</span>
                    </div>
                    <div className={cx('input', 'type-masking')}>
                        <InputMasking
                            nonMasking={["1"]}
                            masking={6}
                            styleDot="type-comparison"
                        />
                    </div>
                </div>
            </InputTextFlexibleBox>
        </>
    );
}

export default RegistrationNumberInput;

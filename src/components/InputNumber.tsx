import classNames from 'classnames/bind';
import {forwardRef} from 'react';

import type {ReactNode} from 'react';

import styles from './InputNumber.module.scss';
import InputTextFlexibleBox from './InputTextFlexibleBox';

const cx = classNames.bind(styles);

type TInputNumberProps = {
    title?: ReactNode;
    placeholder: string;
    errorText?: string;
    showDeleteButton?: boolean; // 삭제 버튼 노출 여부
    value: string;
    disabled?: boolean;
};

const InputNumber = forwardRef<HTMLInputElement, TInputNumberProps>(
    (
        {title, placeholder, value, showDeleteButton, disabled = false},
        ref,
    ) => {
        return (
            <>
                {title && <strong className={cx('title')}>{title}</strong>}
                <InputTextFlexibleBox
                    styleClassName="type-comparison">
                    <div className={cx('article', {'is-focus': false}, {'is-error': false})}>
                        <input
                            ref={ref}
                            type="text"
                            pattern="[0-9]*"
                            value={value}
                            className={cx('input-value')}
                            placeholder={placeholder}
                            inputMode="numeric"
                            disabled={false}
                        />
                    </div>
                </InputTextFlexibleBox>
            </>
        );
    },
);

export default InputNumber;

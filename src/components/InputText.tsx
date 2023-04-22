import classNames from 'classnames/bind';

import InputTextFlexibleBox from './InputTextFlexibleBox';


import styles from './InputText.module.scss';

const cx = classNames.bind(styles);

type TInputTextProps = {
    title?: string;
    placeholder: string;
    isFocus?: boolean; // 포커스 여부
    showDeleteButton?: boolean; // 삭제버튼 노출 여부
    value: string;
    autoFocus?: boolean;
    canEdit?: boolean;
};

function InputText({
    title,
    placeholder,
    isFocus,
    value,
    autoFocus,
    canEdit = true,
}: TInputTextProps) {
    return (
        <>
            {title && <strong className={cx('title')}>{title}</strong>}
            <InputTextFlexibleBox
                styleClassName="type-comparison"
                >
                <div className={cx('article', {'is-focus': canEdit && isFocus})}>
                    <input
                        type="text"
                        className={cx('input-value')}
                        placeholder={placeholder}
                        value={value}
                        inputMode={canEdit ? 'text' : 'none'}
                        autoFocus={autoFocus}
                    />
                </div>
            </InputTextFlexibleBox>
        </>
    );
}

export default InputText;

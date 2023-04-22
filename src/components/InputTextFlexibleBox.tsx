import classNames from 'classnames/bind';

import type {FocusEventHandler, MouseEventHandler, PropsWithChildren} from 'react';

import styles from './InputTextFlexibleBox.module.scss';

const cx = classNames.bind(styles);

export type TInputTextFlexibleBoxProps = PropsWithChildren<{
    showDeleteButton?: boolean;
    styleClassName?: string;
    isComparisionInput?: boolean;
    outerStyleClassName?: string;
}>;

function InputTextFlexibleBox({
    styleClassName,
    children,
    outerStyleClassName,
}: TInputTextFlexibleBoxProps) {
    return (
        <div className={`${cx('article', styleClassName)} ${outerStyleClassName}`}>
            {children}
        </div>
    );
}

export default InputTextFlexibleBox;

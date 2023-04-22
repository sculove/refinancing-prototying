import classNames from 'classnames/bind';

import IconCheckBox from '../assets/IconSvg/IconCheckBox';
import IconCheckBoxFill from '../assets/IconSvg/IconCheckBoxFill';

import styles from './CheckBox.module.scss';

const cx = classNames.bind(styles);

type TCheckBoxProps = {
    label: string;
    id: string;
    name?: string;
    checked: boolean;
    styleEmphasis?: boolean;
    optionalText?: string;
    styleClassName?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckBox({label, id, name, checked, styleEmphasis, optionalText, onChange, styleClassName}: TCheckBoxProps) {
    return (
        <div className={cx('article', {'type-emphasis': styleEmphasis}, styleClassName)}>
            <input type="checkbox" name={name} id={id} className="blind" checked={checked} onChange={onChange} />
            <label htmlFor={id} className={cx('label')}>
                <span className={cx('icon-check')}>
                    {checked ? <IconCheckBoxFill width={22} height={22} /> : <IconCheckBox width={22} height={22} />}
                </span>
                {label}
                {optionalText && <span className={cx('optional')}>{optionalText}</span>}
            </label>
        </div>
    );
}

export default CheckBox;

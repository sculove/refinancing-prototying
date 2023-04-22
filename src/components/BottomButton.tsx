import classNames from 'classnames/bind';
import {forwardRef} from 'react';

import styles from './BottomButton.module.scss';
import { ButtonBoxMax } from '@defign/ui';

const cx = classNames.bind(styles);

type TBottomButtonProps = {
    fixed?: boolean;
    showAlertText?: string;
    buttonInfo: {
        text: string;
        onClick?: () => void
    }
};

const BottomButton = forwardRef<HTMLDivElement, TBottomButtonProps>(({fixed, showAlertText, buttonInfo}, ref) => {
    return (
        <div className={cx('article', {'is-fixed': fixed, 'with-text': showAlertText})}>
            <div className={cx('inner')} ref={ref}>
                {showAlertText && <p className={cx('alert-text')}>{showAlertText}</p>}
                <ButtonBoxMax
                    color="green"
                    {...buttonInfo}
                />
            </div>
        </div>
    );
});

export default BottomButton;

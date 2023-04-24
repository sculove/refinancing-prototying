import classNames from 'classnames/bind';

import type {ReactNode} from 'react';

import styles from './SwitchTitle.module.scss';

const cx = classNames.bind(styles);

type TSwitchTitleProps = {
    title: ReactNode;
    description?: string;
};

function SwitchTitle({title, description}: TSwitchTitleProps) {
    return (
        <div className={cx('article')}>
            <h3 className={cx('title')}>{title}</h3>
            {description && <p className={cx('description')}>{description}</p>}
        </div>
    );
}

export default SwitchTitle;

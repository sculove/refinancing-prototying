import classNames from 'classnames/bind';

import styles from './CloseHeader.module.scss';
import { CloseButton } from './HeaderBtn';

const cx = classNames.bind(styles);

export function CloseHeader() {
    return (
        <div className={cx('article', {'is-fixed': false}, {'is-ellipsis': true})}>
            <div className={cx('inner')}>
                <div className={cx('side-right')}><CloseButton /></div>
            </div>
        </div>
    );
}

export default CloseHeader;

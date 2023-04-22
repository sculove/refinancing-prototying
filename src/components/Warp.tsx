import classNames from 'classnames/bind';
import {PropsWithChildren, useEffect} from 'react';
import styles from './Wrap.module.scss';

const cx = classNames.bind(styles);


function Wrap({children}: PropsWithChildren) {
    useEffect(() => {
        document.body.style.backgroundColor = "white"
    })
    return (
        <div
            className={cx('article', {
                'type-pc': false
            })}>
            {children}
        </div>
    );
}

export default Wrap;

import classNames from 'classnames/bind';

import type {PropsWithChildren} from 'react';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home({children}: PropsWithChildren) {
    return (
        <>
            <div className={cx('article')}>
                {children}
            </div>
        </>
    );
}

export default Home;

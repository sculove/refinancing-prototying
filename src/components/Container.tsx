import classNames from 'classnames/bind';

import type {PropsWithChildren} from 'react';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

type TContainerProps = PropsWithChildren<{
    articleClassName?: string;
}>;

function Container({articleClassName, children}: TContainerProps) {
    return <div className={cx('article', articleClassName)}>{children}</div>;
}
export default Container;

import classNames from 'classnames/bind';

import type {PropsWithChildren} from 'react';

import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

type TContentWrapperProps = PropsWithChildren<{}>;

function ContentWrapper({children}: TContentWrapperProps) {
    return <div className={cx('article')}>{children}</div>;
}
export default ContentWrapper;

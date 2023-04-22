import classNames from 'classnames/bind';

import type {PropsWithChildren, RefObject} from 'react';

import styles from './ResultContent.module.scss';

const cx = classNames.bind(styles);

type TResultContentProps = {typeResponsive?: boolean; divRef?: RefObject<HTMLDivElement>};

function ResultContent({typeResponsive, divRef, children}: PropsWithChildren<TResultContentProps>) {
    return (
        <div className={cx('article', {'type-responsive': typeResponsive})} ref={divRef}>
            {children}
        </div>
    );
}

export default ResultContent;

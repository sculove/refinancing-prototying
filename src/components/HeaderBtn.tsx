import classNames from 'classnames/bind';
import IconBackHeader from '../assets/IconSvg/IconBackHeader';
import IconCloseHeader from '../assets/IconSvg/IconCloseHeader';

import styles from './HeaderBtn.module.scss';

const cx = classNames.bind(styles);

// 닫기버튼
export function CloseButton() {
    return (
        <button className={cx('button-close')} type="button">
            <IconCloseHeader width={30} height={30} />
            <span className="blind">닫기</span>
        </button>
    );
}

type TBackButtonProps = {
    backText?: string;
};

// 뒤로가기 버튼
export function BackButton({backText = ''}: TBackButtonProps) {
    return (
        <button className={cx('button-back')} type="button">
            {backText ? (
                <span className={cx('text')}>
                    {backText}
                    <span className="blind">로 돌아가기</span>
                </span>
            ) : (
                <>
                    <IconBackHeader width={30} height={30} />
                    <span className="blind">뒤로가기</span>
                </>
            )}
        </button>
    );
}

const HeaderBtn = {CloseButton, BackButton};

export default HeaderBtn;

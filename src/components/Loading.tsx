import classNames from 'classnames/bind';

import IconCloseLayer from '../assets/IconSvg/IconCloseLayer';

import styles from './Loading.module.scss';
import LoadingGif from '../assets/images/loading_3.gif'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const DURATION = 5000

function Loading() {
    const [percent, setPercent] = useState<number>(0)
    const ref = useRef<NodeJS.Timeout>()
    const navigate = useNavigate()

    useEffect(() => {
        if(ref) {
            if(percent < 100) {
                ref.current = setTimeout(() => {
                    setPercent(prev => Math.min(prev + 10, 100))
                }, DURATION/10)
            } else {
                navigate("/product")
            }
        }
        return () => {
            ref && ref.current && clearTimeout(ref.current)
        }
    },[percent])

    return (
        <div className={cx('article')}>
            <h1 className="blind">네이버페이 대출비교</h1>
            <div className={cx('inner')}>
                <div className={cx('area-ani')}>
                    <img src={LoadingGif} width="165" height="150" alt="loading" />
                </div>
                <p className={cx('percent')}>{percent}%</p>
                <div className={cx('box')}>
                    <h2 className={cx('title')}>서류를 정리하고 있어요</h2>
                    <p className={cx('desc')}>알고 계셨나요? 대출 금리와 한도를 확인해도<br/>신용점수에 전혀 영향이 없어요.</p>
                </div>
            </div>
            <button type="button" className={cx('button-close')}>
                <IconCloseLayer width={30} height={30} />
                <span className="blind">창닫기</span>
            </button>
        </div>
    );
}

export default Loading;

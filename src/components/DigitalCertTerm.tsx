import classNames from 'classnames/bind';
import IconArrowRight from '../assets/IconSvg/IconArrowRight';
import IconCheck from '../assets/IconSvg/IconCheck';
import IconCheckboxFillBold from '../assets/IconSvg/IconCheckboxFillBold';
import ImgCertificate from '../assets/images/img_certificate.png';

import styles from './DigitalCertTerm.module.scss';
import CloseHeader from './CloseHeader';
import Container from './Container';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const LIST = [
    "(필수) 네이버 전자증명서 이용약관",
    "(필수) 네이버-행정안전부 개인정보이용동의",
    "(필수) 행정안전부-네이버 개인정보이용동의",
    "(필수) 정부 전자문서지갑 이용약관",
    "(필수) 정부 전자문서지감 개인정보 이용약관",
    "(필수) 네이버-행정안전부 제 3자 제공동의",
    "(필수) 네이버-네이버파이낸셜 제 3자 제공동의"
]

function DigitalCertTerm() {
    const navigate = useNavigate()
    return (
        <>
            <CloseHeader/>
            <Container>
                <div className={cx('article', {scroll: true})}>
                    <h2 className={cx('title')}>
                        <span className={cx('point-color')}>네이버 인증서</span>로 서류를 받아와
                        <br />
                        네이버페이로 보낼께요
                    </h2>
                    <div className={cx('area-image')}>
                        <img src={ImgCertificate} width="334" height="130" alt="" />
                    </div>
                    <div className={cx('area-check')}>
                        <div className={cx('checkbox')}>
                            <input
                                type="checkbox"
                                id="agree"
                                checked={true}
                                className="hidden"
                                
                            />
                            <label htmlFor="agree" className={cx('all-label')}>
                                <IconCheckboxFillBold width={22} height={22} fill="#462eff" />
                                모두 동의합니다
                            </label>
                        </div>
                        <ul className={cx('list-check')}>
                            {LIST.map(v => {
                                return (<li className={cx('item')}>
                                    <input
                                        type="checkbox"
                                        checked={true}
                                        className="hidden"
                                    />
                                    <label className={cx('label')}>
                                        <IconCheck
                                            width={15}
                                            height={12}
                                            fill={'#462EFF'}
                                        />
                                        {v}
                                    </label>
                                    <a
                                        href={"#"}
                                        className={cx('link')}
                                        onClick={(e)=> e.preventDefault()}
                                        rel="noreferrer">
                                        <IconArrowRight width={6} height={10} fill="#1e1e23" />
                                        <span className={cx('blind')}>자세히보기</span>
                                    </a>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className={cx('area-fixed')}>
                    <div className={cx('link-text')}>
                        <a
                            href={"#"}
                            className={cx('link')}
                            onClick={(e) => e.preventDefault()}>
                            직접 입력하기
                        </a>
                    </div>
                    <button
                        type="button"
                        className={cx('button', {disabled: false})}
                        onClick={() => {
                            navigate('/loading')
                        }}>
                        다음
                    </button>
                </div>
            </Container>
        </>
    );
}

export default DigitalCertTerm;

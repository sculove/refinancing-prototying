import classNames from 'classnames/bind';
import styles from './PhoneAuth.module.scss';
import AuthTitle from './AuthTitle';
import AuthContent from './AuthContent';
import { useNavigate } from 'react-router-dom';
import InputText from './InputText';
import InputNumber from './InputNumber';
import PhoneSelectBox from './PhoneSelectBox';
import BottomButton from './BottomButton';

const cx = classNames.bind(styles);

function PhoneAuth() {
    const navigate = useNavigate();
    return (
        <>
            <AuthContent>
                <div className={cx('article')}>
                    <AuthTitle
                        title={
                                <>
                                    통신사를
                                    <br />
                                    선택해 주세요
                                </>
                        }
                    />
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <InputText
                                placeholder="이름"
                                title="이름"
                                isFocus={false}
                                value={"김페이"}
                            />
                        </li>
                        <li className={cx('item')}>
                            <PhoneSelectBox/>
                        </li>
                        <li className={cx('item')}>
                            <InputNumber
                                placeholder="휴대폰번호"
                                title="휴대폰번호"
                                value={"01057659763"}
                                showDeleteButton={true}
                            />
                        </li>
                    </ul>
                </div>
            </AuthContent>
            <BottomButton
                fixed={true}
                buttonInfo={{
                    text: '인증번호 요청하기',
                    onClick: () => {
                        navigate('/personal')
                    },
                }}
            />
        </>
    );
}

export default PhoneAuth;

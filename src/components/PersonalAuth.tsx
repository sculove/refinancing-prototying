import classNames from 'classnames/bind';
import AuthContent from './AuthContent';
import AuthTitle from './AuthTitle';
// import RegistrationNumberInput from '$/components/auth/personal/RegistrationNumberInput';

import styles from './PersonalAuth.module.scss';
import BottomButton from './BottomButton';
import { useNavigate } from 'react-router-dom';
import RegistrationNumberInput from './RegistrationNumberInput';

const cx = classNames.bind(styles);

function PersonalAuth() {
    const navigate = useNavigate();
    return (
        <>
            <AuthContent>
                <AuthTitle
                    title={
                        <>
                            주민등록번호 뒷자리를
                            <br />
                            입력해 주세요
                        </>
                    }
                />
                <div className={cx('input-area')}>
                    <RegistrationNumberInput/>
                </div>
            </AuthContent>
            <BottomButton
                fixed={true}
                buttonInfo={{
                    text: '다음',
                    onClick: () => {
                        navigate('/list')
                    }
                }}
            />
        </>
    );
}

export default PersonalAuth;

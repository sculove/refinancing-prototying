import classNames from 'classnames/bind';

import styles from './SwitchButton.module.scss';
import BottomButton from './BottomButton';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);


function SwitchButton() {
    const navigate = useNavigate()
    return (
        <div className={cx('article')}>
            <BottomButton buttonInfo={{text: '1개 선택하기', onClick: () => {
                navigate("/cert")
            }}} />
        </div>
    );
}

export default SwitchButton;

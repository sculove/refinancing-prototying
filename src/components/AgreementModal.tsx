import classnames from 'classnames/bind';
import {HalfLayerWrapper} from '@financial/common-elements';
import {ButtonBoxLargeFull} from '@defign/ui'
import styles from './AgreementModal.module.scss';
import ModalTitle from './ModalTitle';
import CheckBox from './CheckBox';
import CheckItem from './CheckItem';
import SubList from './SubList';
import DetailItem from './DetailItem';
import { useNavigate } from 'react-router-dom';

const cx = classnames.bind(styles);


type TAgreementModalProps = {
    isShow: boolean;
    onClose: (e: React.SyntheticEvent) => void;
};

function AgreementModal({isShow, onClose}: TAgreementModalProps) {
    const navigate = useNavigate();

    return (
        <HalfLayerWrapper innerWrapperClass={cx('layer')} onClose={onClose} isShow={isShow} showCloseButton={true}>
            <div className={cx('article')}>
                <ModalTitle
                    title={
                        <>
                            한도와 금리 조회를 위해
                            <br />
                            동의해 주세요
                        </>
                    }
                />
                <div className={cx('check-area')}>
                    <CheckBox
                        id="all"
                        label="모두 동의합니다"
                        checked={true}
                        styleEmphasis={true}
                        optionalText="(선택 동의 포함)"/>
                </div>
                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <CheckItem
                            id={"1"}
                            text={`(필수) 대환 관련 이용동의`}
                            checked={true}>
                            <SubList>
                                <DetailItem
                                    key={"1"}
                                    linkText={"금융결제원 위임장"}
                                />
                                <DetailItem
                                    key={"2"}
                                    linkText={"대환대출 목적 마이데이터 분석/활용 동의"}
                                />
                                <DetailItem
                                    key={"3"}
                                    linkText={"마이데이터 제 3자 제공동의"}
                                />
                                <DetailItem
                                    key={"4"}
                                    linkText={"대환관련 동의서"}
                                />
                            </SubList>
                        </CheckItem>
                    </li>
                </ul>
                <div className={cx('area-button', {scroll: false})}>
                    <ButtonBoxLargeFull
                        color="green"
                        text="다음"
                        variant="primary"
                        onClick={() => {
                            navigate("/sms")
                        }}
                    />
                </div>
            </div>
        </HalfLayerWrapper>
    );
}
export default AgreementModal;

import classNames from 'classnames/bind';
import styles from './ProductInfo.module.scss';
import { BiCorpCircleImage } from '@financial/common-bi';
import { SkeletonArea, SkeletonListText } from '@defign/ui';

const cx = classNames.bind(styles);

type TProductInfoProps = {
    corpId: string;
    name: string;
    account: string;
    interestRate?: number;
    amount?: number;
    loading?: boolean;
    disabled?: boolean;
};

function ProductInfo({corpId, name, account, interestRate, amount, loading, disabled}: TProductInfoProps) {
    return (
        <span className={cx('article', {disabled: disabled})}>
            <span className={cx('bi')}>
                <BiCorpCircleImage eSize={40} corpId={corpId} />
            </span>
            <span className={cx('area-text')}>
                <strong className={cx('name')}>{name}</strong>
                <span className={cx('account')}>
                    <span className="blind">계좌번호</span>
                    {account}
                </span>
                {loading && (
                    <SkeletonArea isShow={true} isFull={true}>
                        <SkeletonListText/>
                    </SkeletonArea>
                )}
                {interestRate && (
                    <span className={cx('info')}>
                        금리<em className={cx('bold')}>{interestRate}%</em>
                    </span>
                )}
                {amount && (
                    <span className={cx('info')}>
                        잔액<em className={cx('bold')}>{amount}원</em>
                    </span>
                )}
            </span>
        </span>
    );
}

export default ProductInfo;

import classNames from 'classnames/bind';
import {Fragment} from 'react';
import {sanitize} from 'isomorphic-dompurify';
import styles from './ProductResultContents.module.scss';

const cx = classNames.bind(styles);

const result = {
    productList: [
        {order: 1, title: '대출한도', text: ['최소 100만원 ~ 최대 1.5억']},
        {order: 2, title: '대출기간', text: ['최소 12개월 ~ 120개월','대출금액별 상환기간 차등']},
        {order: 3, title: '대출대상', text: ['근로소득자(4대보험적용) 현 직장 1년 이상 재직중','만 23세 이상 ~ 60세 내국인','신용점수 (NICE기준) 360점 이상']},
        {
            order: 4,
            title: '상환조건',
            text: ['원리금균등, 원금균등 (매월 지정결제일)','중도상환수수료는 연 1%입니다 (2년 이내 상환시)'],
        },
        {order: 5, title: '금리정보', text: ['12개월 최저 3.15원리금균등, 원금균등 (매월 지정결제일)']},
        {order: 6, title: '금리유형', text: ['고정금리, 12개월, 최저 3.15% ~ 14.3%']},
        {
            order: 7,
            title: '유의사항',
            text: [
'금리 인하 이벤트 진행 시, 상품 최저금리 미만으로는 금리 인하 불가능합니다.',
'계약 체결 전 상품설명서 및 약관을 확인하시기 바랍니다.',
'과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.',
'개인신용평점 하락으로 금융거래의 제약 또는 불이익이 발생할 수 있습니다.',
'연체 시 계약기한 만료 전 원리금 변제 의무가 발생할 수 있습니다.',
'해당 상품에 대해 충분한 사전 설명을 받을 권리가 있으며, 설명을 이해한 후 거래하시기 바랍니다.',
'SBI저축은행 대출상담센터 1600-8888 (평일 오전 9시 ~ 오후 6시 ) 수신자 부담전화',
'SBI저축은행 준법감시인 심의필 제 2021-1191(21.12.27 ~ 22.12 .26)',
            ],
        },
    ],
}

export default function ProductResultContents() {
    return (
        <div className={cx('article')} id="description">
            <h3 className={cx('title')}>상품안내</h3>
            <div className={cx('info')}>
                {result?.productList?.map(({title, text}, index) => {
                    return (
                        <Fragment key={index}>
                            <strong dangerouslySetInnerHTML={{__html: sanitize(title)}} />
                            <ul>
                                {text.map((html, innerIndex) => (
                                    <li key={innerIndex} dangerouslySetInnerHTML={{__html: sanitize(html)}} />
                                ))}
                            </ul>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}

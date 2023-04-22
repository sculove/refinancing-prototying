import { ButtonBoxMax } from '@defign/ui';
import ProductResultContents from './ProductResultContents';
import ProductResultDetailInfo from './ProductResultDetailInfo';
import ProductResultSwitchCalculation from './ProductResultSwitchCalculation';
import ResultContent from './ResultContent';
import Tab from './Tab';

// 대출_심사_완료
export default function ProductResult() {
    return (
        <>
            <ResultContent>
                <ProductResultDetailInfo />
            </ResultContent>
            <ResultContent>
                <Tab tabList={[
                        {
                            text: '갈아타기 계산기',
                            isSelected: true,
                        },
                        {
                            text: '상품안내',
                            isSelected: false,
                        },
                    ]}
                />
                <ProductResultSwitchCalculation />
            </ResultContent>
            <ResultContent>
                <ProductResultContents />
            </ResultContent>
            <ButtonBoxMax
                    color="green"
                    text="대출갈아타기"
                    onClick={() => {
                        alert("우리은행으로 고!")
                    }}
                />
        </>
    );
}

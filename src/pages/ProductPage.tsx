import Container from "../components/Container"
import Header from "../components/Header"
import ProductResult from "../components/ProductResult"

export default function ProductPage() {
    return <>
        <Header title="신용대출비교" main={true}/>
        <Container>
            <ProductResult/>
        </Container>
    </>
}

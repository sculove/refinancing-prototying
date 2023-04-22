import Container from "../components/Container"
import Header from "../components/Header"
import ProductDetail from "../components/ProductDetail"

export default function ProductPage() {
    return <>
        <Header title="신용대출비교" main={true}/>
        <Container>
            <ProductDetail/>
        </Container>
    </>
}

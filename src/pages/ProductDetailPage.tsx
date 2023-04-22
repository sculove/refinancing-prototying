import { ButtonBoxMax } from "@defign/ui"

export default function ProductDetailPage() {
    return <>
        <h1>ProductDetailPage</h1>
        <ButtonBoxMax
            color="green"
            text="우리은행은?"
            onClick={() => {
                alert("우리은행으로...")
            }}
        />
    </>
}

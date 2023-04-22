import { ButtonBoxMax } from "@defign/ui"
import { useNavigate } from "react-router-dom"

export default function ProductPage() {
    const navigate=useNavigate()
    return <>
        <h1>ProductPage</h1>
        <ButtonBoxMax
            color="green"
            text="비교상세로"
            onClick={() => {
                navigate("/product/id")
            }}
        />
    </>
}

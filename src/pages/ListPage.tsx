import { ButtonBoxMax } from "@defign/ui"
import { useNavigate } from "react-router-dom"

export default function List() {
    const navigate=useNavigate()
    return <>
        <h1>대출 리스트...</h1>
        <ButtonBoxMax
            color="green"
            text="전자증명서 약관으로"
            onClick={() => {
                navigate("/cert")
            }}
        />
    </>
}

import { ButtonBoxMax } from "@defign/ui"
import { useNavigate } from "react-router-dom"

export default function LoadingPage() {
    const navigate=useNavigate()
    return <>
        <h1>로딩페이지</h1>
        <ButtonBoxMax
            color="green"
            text="비교결과로"
            onClick={() => {
                navigate("/product")
            }}
        />
    </>
}

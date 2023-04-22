import { ButtonBoxMax } from "@defign/ui"
import { useNavigate } from "react-router-dom"

export default function CertPage() {
    const navigate=useNavigate()
    return <>
        <h1>인증서 페이지</h1>
        <ButtonBoxMax
            color="green"
            text="로딩으로"
            onClick={() => {
                navigate("/loading")
            }}
        />
    </>
}

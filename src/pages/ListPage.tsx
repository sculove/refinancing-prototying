import { useEffect, useState } from "react"
import SwitchLoading from "../components/SwitchLoading"
import SwitchSelect from "../components/SwitchSelect"

const DURATION = 3000
export default function List() {
    const [isComplete, setIsComplete] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setIsComplete(true)
        },DURATION)
    }, [] )

    return ( isComplete ? <SwitchSelect/> : <SwitchLoading/>)
}

import { FC } from "react"
import { BotResponse } from "@/types"
import { Divider } from "@nextui-org/react"

interface BeautifyProps {
    message: string | BotResponse[]
}

const Beautify:FC<BeautifyProps> = ({message}) => {
    if(typeof message === 'string') return <p>{message}</p>
    return(
        <div className="flex flex-col">
        {message.map((msg,index)=>(
            <div key={index} className="flex flex-col">
                <h1>Result {index+1}</h1>
                <div className="flex my-2">
                    <p className="mr-2">Relevance Score -</p>
                    <p className="mr-2">{msg.Output.RelevanceScore}</p>
                </div>
                <div className="flex my-2">
                    <p className="mr-2">Facts </p>
                    <p className="mr-2">{msg.Output.Facts}</p>
                </div>
                <div className="flex my-2">
                    <p className="mr-2">Summary </p>
                    <p className="mr-2">{msg.Output.CaseSummary}</p>
                </div>
                <Divider className="my-4" />
            </div>
        ))}
        </div>
    )
}

export default Beautify;
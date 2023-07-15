import { BotResponse } from "@/types";
import { Divider } from "@nextui-org/react";
import { FC } from "react";
import Similarity from "./Buttons/Similarity";
import Summary from "./Buttons/Summary";

interface BeautifyProps {
    message: BotResponse[]
    UserMessage: string | number | BotResponse[]
}

const Beautify:FC<BeautifyProps> = ({message,UserMessage}) => {
    if(typeof UserMessage !== "string") return <p>Please Enter a string !!</p>
    return(
        <>
        {message.map((msg,index)=>(
            <div key={index} className="flex flex-col">
                <h1 className="font-bold">Result {index+1}</h1>
                <div className="flex my-2">
                    <p className="mr-2 font-bold">Relevance Score -</p>
                    <p className="mr-2">{msg.Output.RelevanceScore}</p>
                </div>
                <div className="flex my-2">
                    <p className="mr-2 font-bold">Facts: </p>
                    <p className="mr-2">{msg.Output.Facts}</p>
                </div>
                <div className="flex my-2">
                    <p className="mr-2 font-bold">Summary: </p>
                    <p className="mr-2">{msg.Output.CaseSummary}</p>
                </div>
                <div className="flex my-2 justify-center">
                    <Similarity message={msg} query={UserMessage} />
                </div>
                <div className="flex my-2 justify-center">
                    <Summary message={msg}/>
                </div>
                <Divider className="my-4" />
            </div>
        ))}
        </>
    )
}

export default Beautify;
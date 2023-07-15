'use client'
import { BotResponse, MessageGroup } from "@/types";
import { useState } from "react";
import ChatInput from "./ChatInput";
import TextMessage from "./Text";
import Upload from "./Welcome";

export default function Chat() {
    const test:BotResponse[]  = [{"Output":{"CaseSummary":" In National Insurance Co. Ltd. vs Parveen Kumar And Ors. (2005 ACJ 1178, (2005) 139 PLR 230), the Punjab-Haryana High Court referred the matter to a Full Bench due to a disagreement between two of the judges on the law laid down by a Division Bench in a previous case. The Full Bench was to consider the points involved in the case, which were subject to decision in a number of pending cases. The Supreme Court held that a driver must hold an effective driving license for the type of vehicle they intend to drive, and the owner of the car was vicariously liable for the accident due to the driver's negligence. The Court also held that when interpreting social welfare legislation, the external and internal aids must be taken into account. The defence of the insurance company can only succeed if it is proven that the accident was caused solely due to the driver not having the required licence.\n","Facts":"The case titled \"National Insurance Co. Ltd. vs Parveen Kumar And Ors.\" was heard by the Punjab-Haryana High Court. The case involved a dispute regarding the liability of an insurance company to pay compensation in a motor vehicle accident. The Division Bench referred the case to a Full Bench for reconsideration of the law laid down in a previous judgment. The Full Bench examined the interpretation of the Motor Vehicles Act and concluded that the insurance company cannot be absolved of its liability based solely on a technical breach of the driver's license conditions. The case was subsequently remanded to the Division Bench or Single Bench for a decision on the merits.","FileName":"National Insurance Co. Ltd. vs Parveen Kumar And Ors. on 8 November, 2004\n","RelevanceScore":"0.44539177417755127"}},{"Output":{"CaseSummary":" This case examines the liability of the owner of a motor vehicle in cases of death or permanent disablement resulting from an accident. The court held that the owner of the vehicle is liable to pay compensation in accordance with Section 140 of the Motor Vehicles Act, 1988, without having to plead or establish any wrongful act, neglect or default of the owner or any other person. The Claims Tribunal is entitled to make an award under Section 140 of the Act as soon as it is determined that the owner of the vehicle was involved and insured. The insurer's liability is absolute and cannot be questioned on the grounds of no fault liability. The purpose of Section 140 is to provide immediate relief to the disabled victim of an accident in case of permanent disability, and thus the defences raised by the insurer should not delay the payment of compensation.\n","Facts":"The case titled \"New India Assurance Co. Ltd. vs Babubhai Purshottambhai Harijan\" was heard in the Gujarat High Court. The appeal was filed by New India Assurance Company Limited against the award given by the Motor Accident Claims Tribunal. The accident occurred on 6th February 2004 when the claimant boarded a truck that was being driven recklessly. As a result of the accident, the claimant suffered multiple injuries and permanent disability. The claimant sought a total compensation of Rs. 1,25,000 from the opponents. The Tribunal awarded a compensation of Rs. 25,000 with interest to be paid by the opponents jointly and severally. The High Court dismissed the appeal, upholding the Tribunal's decision.","FileName":"New India Assurance Co. Ltd. vs Babubhai Purshottambhai Harijan ... on 24 January, 2006","RelevanceScore":"0.44628655910491943"}}]
    const testuserMessage = "John was hit by a car. The driver of the car was drunk."
    const [messages, setMessages] = useState<MessageGroup[]>([{message:testuserMessage,user:"user"},{message:test, user:"bot"}]);
    
    const handleSendMessage = (message: MessageGroup) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    const SetLoading = (key: boolean) => {
        if(key){
            handleSendMessage({message: 1, user: 'bot'})
        }else{
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages.pop(); 
                return updatedMessages;
              });
        }
    }
    
    return (
        <>
            <div className="flex flex-col h-screen message group">
                {messages.length <= 0 ? (
                    <Upload />
                ) : (
                    <TextMessage Messages={messages}/>
                )}

                <ChatInput onSendMessage={handleSendMessage} MessageLength={messages.length} Loading={SetLoading}/>
            </div>
        </>
    )
}
'use client'
import { FC, useState } from "react";
import { BotResponse } from "@/types"
import { Button } from "@nextui-org/button";

interface ButtonProps {
    message: BotResponse
}

const Summary:FC<ButtonProps> = ({message}) => {
    const [Loading, SetLoading] = useState(false);
    return (
        <>
            <Button color="secondary" variant="ghost" isLoading={Loading}>
                Show Summary
            </Button>   
        </>
    )
}

export default Summary;
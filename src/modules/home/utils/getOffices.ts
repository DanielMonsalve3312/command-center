"use server"
import { Office } from "@/types/offices";

interface ReturnValue {
    offices: Office[]
}

export const getOffices = async ({queryParams = ""}: {queryParams: string}): Promise<ReturnValue | null> => {
    try {
        const response = await fetch("http://localhost:3000/api/offices" + queryParams, {method: "GET"});
        const data = await response.json();

        return data as ReturnValue;        
    } catch (error) {
        return null;
    }
}
import { Office } from "@/types/offices";
import { useEffect, useState } from "react";
import { getOffices } from "./getOffices";

interface HookProps {
    offices: Office[]
};

let interval: any;
const useOfficeList = ({offices}: HookProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [generalError, setGeneralError] = useState<string>("");
    const [data, setData] = useState<Office[]>(offices);

    const handleFilterOfficesByName = async (officeName: string) => {
        clearInterval(interval);

        setLoading(true);
        setGeneralError("");

        try {
            const response = await getOffices({queryParams: `?name=${officeName}`});
            
            if (response) {
                setData(response.offices)
            } else {
                setGeneralError("Ha ocurrido un error")
            }
        } catch (error) {
            setGeneralError("Ha ocurrido un interno")
        } finally {
            setLoading(false)

            interval = setInterval(() => {
                handleFilterOfficesByName(officeName)
            }, 60000)
        }
    }

    const handleUpdateOffice = (office: Office) => {
        const newOfficeList = data.map(item => item.id === office.id ? office : item);
        setData(newOfficeList);
    };

    useEffect(() => {
        interval = setInterval(() => {
            handleFilterOfficesByName("")
        }, 60000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    return { loading, generalError, data, handleFilterOfficesByName, handleUpdateOffice }
}

export { useOfficeList }
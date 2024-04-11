import { Office } from "@/types/offices";

export const useUpdateOfficeStatus = (handleUpdateOffice: (office: Office) => void) => {
    const handleChangeOfficeStatus = async (id: number) => {
        try {
            const response = await fetch("http://localhost:3000/api/offices/" + id, {method: "PATCH"});
            const data = await response.json();
            
            handleUpdateOffice(data as Office)     
        } catch (error) {
            return null;
        }
    }

    return { handleChangeOfficeStatus }
} 
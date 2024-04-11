import { Office } from "@/types/offices";
import { offices } from "./data";

let officesList = offices?.offices ?? [];

export class OfficeModel {
    static async getAll ({ officeName = "" }: {officeName: string | undefined}): Promise<Office[]> {

        const filteredOffices = officesList.filter(office => office.name.toLowerCase().includes(officeName?.toLowerCase()))

        return new Promise((res) => {
            setTimeout(() => {
                res(filteredOffices);
            }, 1500)
        })
    }

    static async changeStatus ({ id }: {id: number}): Promise<Office | null> {

        const office = officesList.find(item => item.id === id);
        let updatedOffice: Office | null = null;

        if (office) {
            updatedOffice = {...office, online: !office.online};

            officesList = officesList.map(item => item.id === office.id ? updatedOffice as Office : item)
        }

        return new Promise((res) => {
            setTimeout(() => {
                res(updatedOffice);
            }, 1500)
        })
    }
}
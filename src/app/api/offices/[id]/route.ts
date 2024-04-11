import { OfficeModel } from '../model';

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const updatedOffice = await OfficeModel.changeStatus({ id: +id });

        if (updatedOffice) {
            return Response.json(updatedOffice, {status: 200});
        } else {
            return Response.json({message: "Not Found"}, {status: 404});
        }
    } catch {
        return Response.json({message: "Internal server Error"}, {status: 500});
    }
}
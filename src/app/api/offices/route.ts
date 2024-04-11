import { NextRequest } from "next/server";
import { OfficeModel } from "./model";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const officeName = searchParams.get("name") ?? "";

    try {
        const filteredOffices = await OfficeModel.getAll({ officeName });

        return Response.json({offices: filteredOffices}, {status: 200});
    } catch {
        return Response.json({message: "Internal server Error"}, {status: 500});
    }
}
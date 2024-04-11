import { Office } from "@/types/offices";
import { createRequire } from 'node:module';

export const readJson = createRequire(import.meta.url);

const offices: { offices: Office[] } = readJson("../../offices.json");

export { offices };

export interface Office {
    id: number;
    name: string;
    online: boolean,
    lines: OfficeLine[];
}

export interface OfficeLine {
    waiting: number,
    elapsed: number
}
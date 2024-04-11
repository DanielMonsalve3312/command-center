import duration from "dayjs/plugin/duration"
import { OfficeLine } from "@/types/offices";
import classNames from "classnames";
import { FaUserGroup, FaClock } from "react-icons/fa6"
import dayjs from "dayjs";

interface CardPropd {
    officeName: string;
    lines: OfficeLine[]
    active: boolean
    onChangeStatus(): void;
}

export const Card = ({officeName, active, lines, onChangeStatus}: CardPropd) => {
    dayjs.extend(duration);

    let users = 0;
    let time = 0;

    for (const line of lines) {
        users += line.waiting,
        time += line.elapsed;
    }

    time = time / lines.length;

    const hours = dayjs.duration(time, "seconds").format("H:mm");
    const hourAndMinute = hours.split(":");
    const waitingTime = Number(hourAndMinute[0]) > 0 ? `${Number(hourAndMinute[0])}:${hourAndMinute[1]}` + " h" : Number(hourAndMinute[1]) + " min";

    const userMessage = users === 1 ? "Persona" : "Personas";

    return (
        <div className="border border-brand p-4 rounded-lg my-2 mx-1.5">
            <p className="text-brand text-2xl font-bold mb-1">{officeName}</p>
            <span className={classNames("text-sm py-1 px-3 rounded-lg text-white", {
                "bg-green-400": active,
                "bg-red-600": !active
            })}>
                {active ? "Abierto" : "Cerrado"}
            </span>
            <div className="flex items-center mt-2">
                <FaUserGroup className="mr-2"/>
                <p>{users} {userMessage} en la fila</p>
            </div>
            <div className="flex items-center mt-2">
                <FaClock className="mr-2"/>
                <p>Tiempo promedio de espera: {waitingTime}</p>
            </div>
            <button
                type="button"
                onClick={() => onChangeStatus()}
                className="py-1 px-4 bg-brand-pink text-white rounded-lg hover:opacity-90 transition-all cursor-pointer mt-3"
            >
                {active ? "Cerrar" : "Abrir"}
            </button>
        </div>
    )
}
import { Spinner } from "@/components/atoms";

const Loading = () => {
    return (
        <div className="w-full py-24 flex justify-center items-center">
            <Spinner spinnerClassName="w-10 h-10"/>
        </div>
    )
}

export default Loading;
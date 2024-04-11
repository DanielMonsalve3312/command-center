import Image from "next/image";

export const Hero = () => (
    <div className="relative w-full">
        <div className="absolute h-full w-full overflow-hidden">
            <div className="absolute inline h-full w-full bg-white opacity-80 md:hidden" />
            <div className="absolute left-0 z-10 hidden h-full w-full bg-gradient-to-r from-white via-white to-transparent md:inline" />
            <div className="relative z-20 flex h-full items-center px-4 xs:px-6 sm:px-10 md:px-0 md:pl-12">
                <div className="w-full">
                    <h1 className="mb-2 text-center font-brand font-extrabold leading-7 text-brand xs:mb-4 text-3xl sm:mb-6 sm:text-5xl md:text-start md:text-5xl 2xl:text-6xl">
                        Oficinas
                    </h1>
                </div>
            </div>
        </div>
        <div className="flex w-full justify-end">
            <Image
                src="/assets/offices.jpg"
                width={750}
                height={300}
                className="sm:w-full md:w-[750px] 2xl:w-[1300px]"
                alt="First section"
            />
        </div>
    </div>
)
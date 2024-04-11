'use client'
import { Hero } from "../components/Hero"
import { Card } from "../components/Card"
import { Filters } from "../components/Filters"
import { Office } from "@/types/offices"
import { useOfficeList } from "../utils/useOfficeList"
import { Spinner } from "@/components/atoms"
import { useUpdateOfficeStatus } from "../utils/useUpdateOfficeStatus"

interface HomeProps {
    offices: Office[]
}

export const Home = ({offices}: HomeProps) => {
    const { data, handleFilterOfficesByName, loading, generalError, handleUpdateOffice } = useOfficeList({offices});
    const { handleChangeOfficeStatus } = useUpdateOfficeStatus(handleUpdateOffice);

    const handleSearch = (officeName: string) => {
        handleFilterOfficesByName(officeName)
    };

    return (
        <section className="w-full pb-16">
            <Hero />
            <div className="px-4">
                <Filters onSearch={handleSearch} loading={loading}/>
                <div className="max-w-7xl w-full flex justify-end items-center mx-auto h-11">
                    {loading ? (
                        <Spinner spinnerClassName="w-7 h-7"/>
                    ) : null}
                </div>
                {generalError ? (
                    <div className="py-8">
                        <p className="text-red-600 text-center">{generalError}</p>
                    </div>
                ): data?.length > 0 ? (
                    <div className="max-w-7xl grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-2">
                        {data?.map(item => (
                            <Card 
                                active={item.online}
                                officeName={item.name}
                                lines={item.lines}
                                key={item.id}
                                onChangeStatus={() => handleChangeOfficeStatus(item?.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mx-auto">
                        <p className="text-red-600 text-center">No se encontraron resultados</p>
                    </div>
                )}
            </div>
        </section>
    )
}
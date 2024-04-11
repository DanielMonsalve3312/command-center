'use client'
import { Input } from "@/components/atoms"
import { useState } from "react"

interface FiltersProps {
    onSearch: (value: string) => void;
    loading: boolean;
}

export const Filters = ({ onSearch, loading }: FiltersProps) => {
    const [officeName, setOfficeName] = useState<string>("");

    const handleChange = (value: string) => {
        setOfficeName(value)
    }

    return (
        <div className="flex items-center justify-center mt-8 mx-auto">
            <Input placeholder="Buscar Oficina" className="relative z-50 outline-none sm:w-60" onChange={(e) => handleChange(e.currentTarget?.value)} disabled={loading}/>
            <button
                type="button"
                className="py-2 px-4 bg-brand text-white rounded-lg hover:opacity-90 transition-all cursor-pointer -ml-4 border border-brand pl-7"
                onClick={() => onSearch(officeName)}
            >
                Buscar
            </button>
        </div>
    )
}
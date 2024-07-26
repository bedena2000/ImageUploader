import { Theme } from "@/context/MyContext";

export function style(theme: Theme = 'Light') {
    return {
        title: `font-bold text-2xl ${theme === "Light" ? "" : "text-white"}`,
        spanTitle: `text-indigo-900 cursor-pointer hover:text-indigo-600 ease-in transition ${theme === "Light" ? "" : "text-white"}`,
        errorMessage: `${theme === "Light" ? "" : "bg-white text-slate-950"} bg-zinc-950 text-bold p-2 mt-4 rounded-lg text-white `,
        description: `${theme === "Light" ? "" : "text-white"}`,
        fileInfo: `${theme === 'Light' ? '' : 'text-white'}`,
        upload: `text-xl mb-2 ${theme === 'Light' ? '' : 'text-white'}`
    }
};
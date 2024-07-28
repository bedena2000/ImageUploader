import { Theme } from "@/context/MyContext";

export function style(theme: Theme = 'Light') {
    return {
        header: `border-b border-slate-200 ${theme === "Light" ? "" : "bg-slate-950"}`,
        buttons: `p-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl cursor-pointer ${theme === "Light" ? "" : "bg-slate-200"}`
    }
};
import { useEffect } from "react";

export const useResolutionListener = (handler: (innerWidth: number)=>void) => {
    useEffect( () =>{
        const listener =  (ev:UIEvent) => {
            const w = ev.target as Window;
            handler?.(w.innerWidth);
        }
        window.addEventListener('resize', listener);
        if(!handler) return  window.removeEventListener('resize', listener);
    }, [handler]);
}
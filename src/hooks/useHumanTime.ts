
export const useHumanTime:(format: 'time' | 'date' | 'all')=> (timeForParse:number)=> string = (format: string) => {
    const withZero = (cropData:string) => {
        const crop = (`0${cropData}`).slice(-2);
       return crop === '00' ? '12' :  crop;
    }
    return (timeForParse:number) => {
        if(format==='time') return `${withZero(new Date(timeForParse).getHours().toString())}:${withZero(new Date(timeForParse).getMinutes().toString())}`;
        if(format==='date') return `${withZero(new Date(timeForParse).getDate().toString())}.${withZero(new Date(timeForParse).getMonth().toString())}.${new Date(timeForParse).getFullYear()}`;
        return `${withZero(new Date(timeForParse).getHours().toString())}:${withZero(new Date(timeForParse).getMinutes().toString())} 
            ${withZero(new Date(timeForParse).getDate().toString())}.${withZero(new Date(timeForParse).getMonth().toString())}.${new Date(timeForParse).getFullYear()}
        `;
    }
}
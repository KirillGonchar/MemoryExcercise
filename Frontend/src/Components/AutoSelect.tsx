import { ReactNode } from 'react';


const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

interface Props {
    children: ReactNode;
    country?: string;
    setCountry?: (country: string) => void;
}



const AutoSelect = (props: Props) => {
console.log(API_KEY,'     ', API_URL)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default AutoSelect

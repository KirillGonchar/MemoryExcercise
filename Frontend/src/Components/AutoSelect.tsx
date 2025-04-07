import { useEffect, useRef, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

interface Country {
    name: string;
    full_name: string;
    capital: string;
    continent: string;
    population: number;
    currency: string;
    size: string;
}

const CountryAutoSelect = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [country, setCountry] = useState<string>("");
    const [userInput, setUserInput] = useState<string>("");
    const CountryInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`${API_URL}/countries`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`
                    }
                }
                );
                const data = await response.json();
                if (response.ok) {
                    setCountries(data.data);
                } else {
                    console.error("Error fetching countries:", response);
                }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        if (userInput.length > 3) {
            const country = countries.find((country) => country.name.toLowerCase().startsWith(userInput!.toLowerCase()));
            if (country && country.name != userInput) {
                setCountry(country.name);
                setTimeout(() => {
                    CountryInput.current?.focus();
                    CountryInput.current?.setSelectionRange(userInput.length, country.name.length);
                }, 0);
            }
        }
    }
        , [userInput]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry("");
        setUserInput(event.target.value);
    }
    const value = country ? country : userInput;
    return (

        <input type="text"
            placeholder="Country"
            className="formInput"
            onChange={handleChange}
            ref={CountryInput}
            value={value}
        />
    )
}

export default CountryAutoSelect
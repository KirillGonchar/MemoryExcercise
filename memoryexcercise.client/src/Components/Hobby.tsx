import React, { useEffect } from 'react'
import './Hobby.css'

interface Hobby {
    hobbyName: string;
    description: string;
}

const Hobby = () => {
    const HobbyInput = React.useRef<HTMLInputElement>(null)
    const [hobbies, setHobbies] = React.useState<string[]>([])
    const [userInput, setUserInput] = React.useState<string>("");
    const [autoComplete, setAutoComplete] = React.useState<string>("");
    const value = userInput + autoComplete;
    const [hobbiesListWithDescription, setHobbiesListWithDescription] = React.useState<Hobby[]>([]);
    const [hobbiesList, setHobbiesList] = React.useState<string[]>([]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        const inputValue = (event.nativeEvent as InputEvent).data;
        const inputType = (event.nativeEvent as InputEvent).inputType;
        if (inputType.includes("delete")) {
            if (autoComplete) {
                setAutoComplete("");
                return;
            }
            else if (userInput) {
                setUserInput((current) => current.slice(0, current.length - 1));
                return;
            }
            return;
        }

        if (!inputValue || inputValue === ',') {
            addHobby(userInput + autoComplete);
            return;
        }

        const hobbyToFind = userInput ? userInput + inputValue : inputValue;
        const hobby = hobbiesList.find((hobby) => hobby.toLowerCase().startsWith(hobbyToFind!.toLowerCase()));
        if (hobby && hobby !== userInput) {
            setAutoComplete(hobby.slice(hobbyToFind.length, hobby.length));
            setTimeout(() => {
                HobbyInput.current?.focus();
                HobbyInput.current?.setSelectionRange(hobbyToFind!.length, hobby.length);
            }, 0);
        }
        else setAutoComplete("");
        setUserInput((current) => current + inputValue!);
    }

    const addHobby = (hobby: string) => {
        const capitalizedHobby = hobby.charAt(0).toUpperCase() + hobby.slice(1).toLowerCase();
        if (!hobbies.find((h) => h.toLowerCase() === hobby.toLowerCase())) {
            setHobbies((current) => [...current, capitalizedHobby]);
        }
        setUserInput("");
        setAutoComplete("");
    }

    const removeHobby = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        event.preventDefault();
        const h = [...hobbies];
        h[index] = "";
        setHobbies(h);
    }

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            userInput && addHobby(userInput + autoComplete);
        }
    }

    async function getHobbies() {
        const response = await fetch('hobbies');
        try {
            if (response.ok) {
                const contentType = response.headers.get("Content-Type");
                let hobbies = [];
                if (contentType && contentType.includes("application/json")) {
                    hobbies = await response.json();
                } else {
                    console.error('Unexpected content type:', contentType);
                    throw new Error('Invalid content type');
                }
                setHobbiesListWithDescription(hobbies);
                setHobbiesList(hobbies.map((hobby: Hobby) => hobby.hobbyName));
            }
        }
        catch (error) {
            console.log('catch error: ', error);
        }
    }

    useEffect(() => {
        getHobbies();
    }, []);

    return (
        <span className='hobbies'>
            <span className='hobbiesContainer'>
                {hobbies.map((hobby, index) => {
                    const description = hobbiesListWithDescription.find((hobbyWithDescription: Hobby) => hobbyWithDescription.hobbyName === hobby)?.description;
                    const tooltip = description && { hobby, description };
                    return (
                        hobby && <div key={index} className='hobbyBubble'>
                            {hobby}
                            <button onClick={(event) => { removeHobby(event, index) }}
                                className='removeButton'>X</button>
                            {tooltip && tooltip.hobby === hobby && (
                                <div className='tooltip'>
                                    <strong>{tooltip.hobby}</strong>: {tooltip.description}
                                </div>
                            )}
                        </div>
                    )
                })
                }
            </span>
            <input type="text"
                className='hobbiesInput'
                placeholder="Hobbies"
                ref={HobbyInput}
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={value}
            />
        </span>
    )
}

export default Hobby
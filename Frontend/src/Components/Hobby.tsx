import React from 'react'
import './Hobby.css'


const Hobby = () => {
    const HobbyInput = React.useRef<HTMLInputElement>(null)
    const [hobbies, setHobbies] = React.useState<string[]>([])
    const [userInput, setUserInput] = React.useState<string>("");
    const [autoComplete, setAutoComplete] = React.useState<string>("");
    const value = userInput + autoComplete;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    return (
        <span className='hobbies'>
            <span className='hobbiesContainer'>
                {hobbies.map((hobby, index) => {
                    const description = hobbiesListWithDescription.find((hobbyWithDescription) => hobbyWithDescription[0] === hobby)?.[1];
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

//this data could be fetched from somwhere, but for now it is hardcoded
const hobbiesListWithDescription = [
    ["Hiking", "Exploring nature trails and mountain paths on foot"],
    ["Photography", "Capturing moments and scenes through a camera lens"],
    ["Cooking", "Creating delicious meals through culinary experimentation"],
    ["Gardening", "Growing and nurturing plants and flowers"],
    ["Reading", "Enjoying books across various genres and topics"],
    ["Painting", "Expressing creativity through colors on canvas"],
    ["Knitting", "Creating garments and items with yarn and needles"],
    ["Chess", "Strategic board game of tactical thinking"],
    ["Cycling", "Riding bicycles for exercise and exploration"],
    ["Fishing", "Catching fish in lakes, rivers, or oceans"],
    ["Woodworking", "Crafting items from wood using various techniques"],
    ["Dancing", "Moving rhythmically to music for expression or exercise"],
    ["Bird watching", "Observing and identifying different bird species"],
    ["Pottery", "Creating ceramic objects by molding clay"],
    ["Yoga", "Practice combining physical poses with mindful breathing"],
    ["Rock climbing", "Ascending rock formations using physical strength and technique"],
    ["Calligraphy", "Artistic, decorative handwriting or lettering"],
    ["Skiing", "Gliding over snow with special equipment"],
    ["Surfing", "Riding waves using a surfboard"],
    ["Quilting", "Sewing together layers of fabric into blankets"],
    ["Model building", "Constructing miniature replicas of objects or scenes"],
    ["Bread making", "Creating homemade loaves through baking techniques"],
    ["Astronomy", "Observing celestial objects and phenomena"],
    ["Beekeeping", "Managing honeybee colonies for honey production"],
    ["Candle making", "Creating decorative wax candles for light or scent"],
    ["Archery", "Shooting arrows using a bow at targets"],
    ["Meditation", "Practice of training attention and awareness"],
    ["Scuba diving", "Underwater exploration using special breathing equipment"],
    ["Geocaching", "Outdoor treasure hunting using GPS coordinates"],
    ["Origami", "Japanese art of paper folding"],
    ["Wine tasting", "Sampling and evaluating different wines"],
    ["Magic tricks", "Performing illusions to entertain and amaze"],
    ["Stamp collecting", "Gathering and organizing postage stamps from various places"],
    ["Jewelry making", "Crafting ornamental pieces worn as personal adornment"],
    ["Martial arts", "Traditional combat practices for self-defense and discipline"],
    ["Crossword puzzles", "Solving word games with intersecting clues"],
    ["Soap making", "Creating bars of soap using oils and lye"],
    ["Robotics", "Building and programming automated mechanical devices"],
    ["Homebrewing", "Making beer or other fermented beverages at home"],
    ["Fossil hunting", "Searching for preserved remains of ancient organisms"],
    ["Stand-up comedy", "Performing humorous monologues before a live audience"],
    ["Mushroom foraging", "Searching for edible fungi in natural settings"],
    ["Juggling", "Keeping multiple objects in continuous motion through air"],
    ["Podcasting", "Creating audio content for online distribution"],
    ["Stargazing", "Observing stars, planets, and constellations at night"],
    ["Ice skating", "Gliding on ice using metal-bladed boots"],
    ["Kayaking", "Paddling a small watercraft using a double-bladed oar"],
    ["Bonsai", "Growing and training miniature trees in containers"],
    ["Glassblowing", "Shaping molten glass by blowing through a tube"],
    ["Board games", "Playing tabletop games with specific rules and objectives"]
];

const hobbiesList = [
    "Hiking",
    "Photography",
    "Cooking",
    "Gardening",
    "Reading",
    "Painting",
    "Knitting",
    "Chess",
    "Cycling",
    "Fishing",
    "Woodworking",
    "Dancing",
    "Bird watching",
    "Pottery",
    "Yoga",
    "Rock climbing",
    "Calligraphy",
    "Skiing",
    "Surfing",
    "Quilting",
    "Model building",
    "Bread making",
    "Astronomy",
    "Beekeeping",
    "Candle making",
    "Archery",
    "Meditation",
    "Scuba diving",
    "Geocaching",
    "Origami",
    "Wine tasting",
    "Magic tricks",
    "Stamp collecting",
    "Jewelry making",
    "Martial arts",
    "Crossword puzzles",
    "Soap making",
    "Robotics",
    "Homebrewing",
    "Fossil hunting",
    "Stand-up comedy",
    "Mushroom foraging",
    "Juggling",
    "Podcasting",
    "Stargazing",
    "Ice skating",
    "Kayaking",
    "Bonsai",
    "Glassblowing",
    "Board games",

];
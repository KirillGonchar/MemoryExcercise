import React from 'react'
import './UserForm.css'
import AutoSelect from './AutoSelect'

interface Props {

}

const UserForm = (props: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }
    const [country, setCountry] = React.useState<string>("");
    return (
        <>
            <form>
                <input type="text" placeholder="Username" className='formInput' />
                <AutoSelect country={country} setCountry={setCountry}>
                    <input type="text" placeholder="Country" className='formInput' onChange={handleChange} value={country}/>
                </AutoSelect>
            </form>
        </>
    )
}

export default UserForm

import './UserForm.css'
import CountryAutoSelect from './AutoSelect'

const HelloForm = () => {

    return (
        <>
            <form className='userForm'>
                <div className='inputs'>
                    <input type="text" placeholder="Username" />
                    <CountryAutoSelect />
                </div>
                <button type="submit" className='formButton'>Start</button>
            </form>
        </>
    )
}

export default HelloForm
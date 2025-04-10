import './HelloForm.css'
import CountryAutoSelect from './AutoSelect'
import Hobby from './Hobby'

const HelloForm = () => {

    return (
        <>
            <form className='userForm' onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                }}}>
                <div className='inputs'>
                    <input type="text" placeholder="Username" />
                    <CountryAutoSelect />
                </div>
                <Hobby />
                <button type="submit" className='startButton'>Start</button>
            </form>
        </>
    )
}

export default HelloForm
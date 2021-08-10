import Form from '../../img/Form.png';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as ROUTES from '../../constants/routes'
import UserContext from '../../context/user';
import fetchAPI from '../../helpers/fetch';

const Register = () => {
    const history = useHistory()
    const fetch = new fetchAPI()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('')
    const [errors, setErrors] = useState('');
    const isInvalid = name === '' || password === '' || email === '' || age === '';
    const { user, setUser } = useContext(UserContext);

    const handleLogin = (event) => {
        event.preventDefault();
        fetch.post('https://api-nodejs-todolist.herokuapp.com/user/register',
            {
                name: name,
                email: email,
                password: password,
                age: age
            })
        .then(data => {
            console.log(data)
            if(data.token){
                setErrors('');
                console.table(data.user)
                history.push(ROUTES.LOGIN)
            } else {
                setErrors(data);
                setName('')
                setEmail('');
                setPassword('');
                setAge('');
            }
        })
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            history.push(ROUTES.TASKS);
            return;
           } 
        document.title = 'TODO APP - Sign Up';
    }, [])

    return (
        <div className='flex justify-center items-center w-full'>
           
            <div className='w-auto flex flex-col gap-3 justify-center items-center mt-24'>
                <form 
                    onSubmit={handleLogin}
                    className='flex flex-col justify-center items-center gap-5 border border-gray-400 rounded px-5 py-4 w-min bg-white dark:bg-gray-600 text-sm'>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-poppins font-bold text-2xl'>TODO APP</h1>
                    </div>
                    {errors && <p className="mb-4 text-xs text-center text-red-500">{errors}</p>}
                    <div className='flex justify-center items-center space-x-3 gap-3'>
                        <input 
                            aria-label='Enter your name'
                            className='px-3 py-2 border border-gray-500 rounded'
                            type="text" 
                            placeholder='Name...' 
                            onChange={({target}) => setName(target.value)}
                            value={name || ''}
                        />
                    </div>
                    <div className='flex justify-center items-center space-x-3 gap-3'>
                        <input 
                            aria-label='Enter your email'
                            className='px-3 py-2 border border-gray-500 rounded'
                            type="text" 
                            placeholder='Email...' 
                            onChange={({target}) => setEmail(target.value)}
                            value={email || ''}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-3' >
                        <input 
                            aria-label='Enter your Password'
                            className='px-3 py-2 border border-gray-500 rounded'
                            type="password" 
                            placeholder='Password...' 
                            onChange={({target}) => setPassword(target.value)}
                            value={password || ''}
                        />
                    </div>
                    <div className='flex justify-center items-center space-x-3 gap-3'>
                        <input 
                            aria-label='Enter your age'
                            className='px-3 py-2 border border-gray-500 rounded'
                            type="text" 
                            placeholder='age...' 
                            onChange={({target}) => setAge(target.value)}
                            value={age || ''}
                        />
                    </div>
                    <div className="flex justify-center items-center w-full ">
                        <button 
                            type='submit' 
                            className={`flex justify-center items-center px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm w-full ${isInvalid && ' opacity-50'}`}
                            disabled={isInvalid}
                        >Sign Up</button>
                    </div>
                </form>
                <div className=" flex justify-center items-center mt-4 px-5 py-4 border border-gray-400 bg-white rounded w-full ">
                    <p className='text-sm'>Have an account! {' '} 
                        <Link className='text-blue-700 font-semibold' to={ROUTES.LOGIN}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;
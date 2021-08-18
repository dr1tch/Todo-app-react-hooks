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

    const handleRegister = (event) => {
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
                setUser(data.user);
                localStorage.setItem('token', data.token);
                console.table(data.user)
                history.push(ROUTES.TASKS)
                localStorage.setItem('user', data.user);
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
        <div className='flex justify-center items-center w-full bg-black'>
           
            <div className='w-72 flex flex-col gap-3 mt-24 justify-center items-center'>
                <form 
                    onSubmit={handleRegister}
                    className='w-full flex flex-col justify-center items-center gap-5 rounded shadow-md px-5 py-4 bg-gray-light text-sm'>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-roboto font-bold text-2xl text-gray-50'>TODO APP</h1>
                    </div>
                    {errors && <p className="mb-4 text-xs w-auto text-center text-red-200">{errors}</p>}
                    <div className='flex justify-center items-center gap-3 w-full'>
                        <input 
                            aria-label='Enter your name'
                            className='font-roboto px-3 py-2 bg-gray-default text-gray-50 rounded focus:outline-none focus:ring-0 shadow-md w-full'
                            type="text" 
                            placeholder='Name...' 
                            onChange={({target}) => setName(target.value)}
                            value={name || ''}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-3 w-full'>
                        <input 
                            aria-label='Enter your email'
                            className='font-roboto px-3 py-2 bg-gray-default text-gray-50 rounded focus:outline-none focus:ring-0 shadow-md w-full'
                            type="text" 
                            placeholder='Email...' 
                            onChange={({target}) => setEmail(target.value)}
                            value={email || ''}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-3 w-full' >
                        <input 
                            aria-label='Enter your Password'
                            className='font-roboto px-3 py-2 bg-gray-default text-gray-50 rounded focus:outline-none focus:ring-0 shadow-md w-full'
                            type="password" 
                            placeholder='Password...' 
                            onChange={({target}) => setPassword(target.value)}
                            value={password || ''}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-3 w-full'>
                        <input 
                            aria-label='Enter your age'
                            className='font-roboto px-3 py-2 bg-gray-default text-gray-50 rounded focus:outline-none focus:ring-0 shadow-md w-full'
                            type="text" 
                            placeholder='Age...' 
                            onChange={({target}) => setAge(target.value)}
                            value={age || ''}
                        />
                    </div>
                    <div className="flex justify-center items-center w-full ">
                        <button 
                            type='submit' 
                            className={`flex justify-center items-center px-3 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 text-sm font-medium font-roboto w-full ${isInvalid && ' opacity-50'}`}
                            disabled={isInvalid}
                        >Sign Up</button>
                    </div>
                </form>
                <div className="font-roboto font-medium flex justify-center items-center mt-4 px-5 py-4 bg-gray-light text-gray-50 rounded shadow-md w-full">
                    <p className='text-sm'>Have an account! {' '} 
                        <Link className='text-blue-400 font-semibold' to={ROUTES.LOGIN}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;
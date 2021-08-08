import Form from '../../img/Form.png';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as ROUTES from '../../constants/routes'
import UserContext from '../../context/user';
const Login = () => {
    const history = useHistory()
    console.log(history)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const isInvalid = password === '' || email === '';
    const { user, setUser } = useContext(UserContext);

    const handleLogin = (event) => {
        event.preventDefault();
        fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
            'Content-Type':'Application/json' 
            },
            body: JSON.stringify({
                "email" : email,
                "password" : password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.token){
                setErrors('');
                localStorage.setItem('token', data.token);
                console.log('token', data.token);
                setUser(data.user);
                history.push(ROUTES.HOME)
            } else {
                setErrors(data + '. Please verify your email and password.');
                setEmail('');
                setPassword('');
            }
        })
    }

    useEffect(() => {
        document.title = 'TODO APP - Login';
    }, [])

    return (
        <div className='flex lg:justify-between justify-center mt-16 items-center w-full'>
            <div className='lg:w-3/5 hidden lg:flex'>
                <img className="" src={Form} alt="" />
            </div>
            
            <div className='lg:w-2/5 w-auto flex flex-col gap-3 justify-center items-center'>
                <form 
                    onSubmit={handleLogin}
                    className='flex flex-col justify-center items-center gap-5 border border-gray-400 rounded px-5 py-4 w-min lg:w-3/5 bg-white dark:bg-gray-600 text-sm'>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-poppins font-bold text-2xl'>TODO APP</h1>
                    </div>
                    {errors && <p className="mb-4 text-xs text-center text-red-500">{errors}</p>}
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
                    <div className="flex justify-center items-center w-full ">
                        <button 
                            type='submit' 
                            className={`flex justify-center items-center px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm w-full ${isInvalid && ' opacity-50'}`}
                            disabled={isInvalid}
                        >Login</button>
                    </div>
                </form>
                <div className=" flex justify-center items-center mt-4 px-5 py-4 border border-gray-400 bg-white rounded w-full lg:w-3/5">
                    <p className='text-sm'>Dont have an account! {' '} 
                        <Link className='text-blue-700 font-semibold' to={ROUTES.REGISTER}>Signup</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
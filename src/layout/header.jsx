import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user';
import User from '../img/user.png';
import { SettingsIcon, AvatarIcon, TurnOffIcon } from '../icons/index';
import AddTask from '../components/addTask';

const Header = () => {
    const user = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setIsOpen(false)
    }, [setIsOpen])
    return (
        <header className='font-roboto bg-white'>
            <nav className=' h-12 container mx-auto flex flex-row justify-between items-center '>
                <div>
                    <Link to='/'>
                        <h1 className='text-darkest font-semibold font-Lato'>TODO</h1>
                    </Link>
                </div>
                <div className='flex flex-row justify-start gap-10 items-center'>
                    {/* <AddTask /> */}
                    {
                        localStorage.length === 0 &&
                    <>
                    <Link to='/login' className='dark:text-gray-50 text-gray-600 hover:text-gray-800 font-medium'>Login</Link>
                    <Link to='/register' className='text-gray-50 bg-gray-500 dark:bg-gray-50 px-2.5 py-1.5 dark:text-gray-600 hover:bg-gray-800 font-medium rounded-md'>Register</Link>
                    </>
                    }
                    { localStorage.length > 0 &&
                    <div className='relative inline-block text-left'>
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} className='inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm' >
                                <img className="w-6 h-6 shadow-md rounded-full" src={User} alt="" />
                                <h1>{user.name}</h1>
                            </button>
                        </div>
                        {
                            isOpen &&
                        <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <div className='flex flex-col justify-start items-start'>
                                <Link to="/me/:username" className='flex flex-row gap-3 justify-start items-center dark:text-gray-50 text-gray-600 hover:text-gray-800 hover:bg-gray-100 font-regular px-5 py-4 border-b-2 w-full '>
                                    <AvatarIcon className='w-5 h-5'/>
                                    Profile
                                </Link>
                                <Link to="/edit-profile" className='flex flex-row gap-3 justify-start items-center dark:text-gray-50 text-gray-600 hover:text-gray-800 hover:bg-gray-100 font-regular px-5 py-4 border-b-2 w-full '>
                                    <SettingsIcon className='w-5 h-5'/>
                                    Edit Profile
                                </Link>
                                <Link to='/logout' className='flex flex-row gap-3 justify-start items-center dark:text-gray-50 text-gray-600 hover:text-gray-800 font-regular px-5 py-4 hover:bg-gray-100 border-b-2 w-full'>
                                    <TurnOffIcon className='w-5 h-5'/>
                                    Logout
                                </Link>
                            </div>
                        </div>
                        }
                        
                    </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;
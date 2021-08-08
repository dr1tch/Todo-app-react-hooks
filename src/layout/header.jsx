import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='font-poppins bg-gray-50 dark:bg-gray-800 shadow-md'>
            <nav className='h-16 container mx-auto flex flex-row justify-between items-center '>
                <div>
                    <Link to='/'>
                        <h1 className='text-2xl text-indigo-700 font-semibold'>TODO APP</h1>
                    </Link>
                </div>
                <div className='flex flex-row justify-start gap-10 items-center'>
                    <Link to='/login' className='dark:text-gray-50 text-gray-600 hover:text-gray-800 font-medium'>Login</Link>
                    <Link to='/register' className='text-gray-50 bg-gray-500 dark:bg-gray-50 px-2.5 py-1.5 dark:text-gray-600 hover:bg-gray-800 font-medium rounded-md'>Register</Link>
                    <Link to='/logout' className='dark:text-gray-50 text-gray-600 hover:text-gray-800 font-medium'>Logout</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;
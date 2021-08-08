import { useEffect } from "react";
import { Link } from "react-router-dom"
import Tasks from '../img/tasks.svg';
const Home = (props) => {

    useEffect(() => {
        document.title='TODO APP - Welcome'
    }, [])

    return (
        <div className='flex lg:justify-evenly sm:text-center lg:text-left sm:flex-col-reverse w-full lg:flex-row items-center sm:gap-10 lg:gap-3 mt-14'>
            <div className='w-3/5'>
                <h1 className="text-4xl font-semibold text-gray-700 mb-4">TODO LIST WEB APP</h1>
                <h3 className="text-lg font-medium text-gray-500 mb-6">The best and the simplest todo list web application.
                    <br/>
                    Get your task organized, plan your day, and be more productive.
                </h3>
                <Link to='/register' className="bg-indigo-200 hover:bg-indigo-300 text-indigo-700 px-3 py-2 rounded font-poppins font-medium text-lg">Get Started</Link>
            </div>
            <div className='flex-1 w-2/5 mt-6'>
                <img src={Tasks} alt="right-side-calendar-banner" />
            </div>
        </div>
    )
}

export default Home;
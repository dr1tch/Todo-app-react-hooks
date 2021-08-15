import { useState } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const show = isOpen ? 'block' : 'hidden';


    return (

        <div>
            <button 
                className='bg-indigo-600 hover:bg-indigo-700 text-white rounded px-3 py-2'
                onClick={openModal}
            >Open Modal</button>
            <div className={`${show} fixed top-0 left-0 right-0 bottom-0 min-h-full min-w-full bg-gray-800 bg-opacity-70`}>
                <motion.div
                    animate={{scale: 2}}
                    transition={{ease: "easeOut", duration: 2 }}
                 className='bg-white rounded-lg w-72 max-w-auto h-auto center-item shadow-2xl px-6 py-4 flex flex-col gap-3'>
                    { children }
                    <h1>Title</h1>
                    <hr />
                    <p>this is the body!</p>
                    <hr />
                    <button
                        className='bg-red-600 hover:bg-red-700 text-white rounded px-3 py-2 mt-6 w-min text-sm'
                        onClick={closeModal}
                    >Close</button>
                </motion.div>
            </div>
        </div>
    );
}

export default Modal;
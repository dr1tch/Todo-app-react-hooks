import { useState } from 'react';
import { motion } from 'framer-motion';

// How to use the modal : Documentation:
// props: ---> isOpen, closeModal, children
// Example:
// <Modal isOpen={true/false [isOpen]} closeModal={closeModal} >
//     <p>This is A modal</p>
// </Modal>

const Modal = ({ isOpen, closeModal, children }) => {

    
    const show = isOpen ? 'block' : 'hidden';


    return (

        <div>
           
            <motion.div
                transition={{ duration: 4 }}
             className={`${show} text-sm fixed top-0 left-0 right-0 bottom-0 min-h-full min-w-full bg-gray-800 bg-opacity-70 transition duration-500 ease-out`}>
                <div
                 className='bg-white rounded-md w-72 max-w-auto h-auto center-item shadow-2xl px-4 py-3 flex flex-col gap-3 '>
                    { children }
                    
                    <button
                        className='bg-red-200 hover:bg-red-300 text-red-700 font-medium rounded px-3 py-2 mt-2 w-min text-sm'
                        onClick={closeModal}
                    >Close</button>
                </div>
            </motion.div>
        </div>
    );
}

export default Modal;
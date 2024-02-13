import React, { useContext, useState } from 'react'
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalContext';

const DeleteModal = ({ isOpen, onClose, id }) => {

    const [loading, setLoading] = useState(false);

    const {baseUrl, setError} = useContext(GlobalContext)

    const deleteProduct = () => {
        const token = localStorage.getItem("token");

        if (token) {
            setLoading(true)
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            axios
                .delete(`${baseUrl}/products/${id}`, { headers })
                .then((res) => {
                    console.log(res)
                    onClose()
                    setLoading(false)

                })
                .catch((error) => {
                    setError(error?.response?.data?.error)
                    setLoading(false)
                });
        } else {
            navigate("/login/");
        }




    };


    return (
        <div className={`fixed top-0 left-0 z-[1000] w-screen h-screen bg-black/[0.174] ${isOpen ? "flex" : "hidden"} items-center justify-center`}>
            <div className='w-96 h-auto bg-white rounded-md flex flex-col gap-2 justify-start items-start p-6'>
                <h1 className='text-2xl font-bold text-black'>
                    Delete item?
                </h1>
                <span className='text-sm font-medium text-[#959595]'>
                    Are you sure you want to delete item?
                </span>

                <div className='w-full h-auto flex justify-end items-center gap-2 mt-2'>
                    <button onClick={deleteProduct} className='w-auto h-9 rounded-md px-2 flex justify-center items-center text-xs bg-red-500 text-white font-medium'>
                        Delete
                    </button>

                    <button onClick={onClose} className='w-auto h-9 rounded-md px-2 flex justify-center items-center text-xs bg-gray-100 text-black font-medium'>
                        Cancel
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DeleteModal
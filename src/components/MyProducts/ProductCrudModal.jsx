import React, { useState } from 'react'
import DeleteModal from './DeleteModal'
import { Link } from 'react-router-dom'

const ProductCrudModal = ({isOpen, setIsCrudOpen, product, setRealTimeReload}) => {

    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    const toggleDeleteConfirmationModal = () => {
        setIsDeleteOpen((prev) => !prev)
    }

  return (
    <div   className={`${isOpen ? "flex" : "hidden"} absolute top-10 z-20 right-4 w-32 h-auto  flex-col justify-start items-start p-3 bg-white rounded-lg shadow-md shadow-black/[0.4] gap-1`}>
        <Link to={`/update-product/${product?.id}`} className='text-sm font-medium hover:font-semibold text-black'>
            Edit
        </Link>
        <button onClick={toggleDeleteConfirmationModal} className='text-sm font-medium hover:font-semibold text-black'>
            Delete
        </button>
        <DeleteModal isOpen={isDeleteOpen} onClose={toggleDeleteConfirmationModal} id={product?.id} setRealTimeReload={setRealTimeReload}/>
        
    </div>
  )
}

export default ProductCrudModal
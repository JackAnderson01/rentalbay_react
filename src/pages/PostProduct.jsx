import React, { useContext, useEffect, useState } from 'react'
import { IoImageOutline } from "react-icons/io5";
import { BsFillImageFill } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import PostInput from '../components/PostProduct/PostInput';
import PriceInput from '../components/PostProduct/PriceInput';
import PostDescriptionInput from '../components/PostProduct/PostDescriptionInput';
import Calender from '../components/PostProduct/Calender';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BtnLoader from '../components/global/BtnLoader';



const PostProduct = () => {

    const { baseUrl, setError } = useContext(GlobalContext)
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [category, setCategory] = useState("Electronics");
    const [subCategory, setSubCategory] = useState("Screens");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [pricePerFour, setPricePerFour] = useState("");
    const [pricePerTwelve, setPricePerTwelve] = useState("");
    const [initialDate, setInitialDate] = useState(null);
    const [finalDate, setFinalDate] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        const promises = files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const base64String = e.target.result.split(',')[1]; // Remove data:image/jpeg;base64,
                    resolve(base64String);
                };

                reader.onerror = (error) => {
                    reject(error);
                };

                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises)
            .then(base64Strings => {
                setImages([...images, ...base64Strings]);
            })
            .catch(error => {
                console.error('Error reading files:', error);
            });
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };


    // Sending data to the backend:
    const postProduct = () => {
        const token = localStorage.getItem("token");
        if (images.length < 1) {
            setError("You must add atleast one image.");
        } else if (name == "") {
            setError("Name cannot be left empty.");
        } else if (location == "") {
            setError("Location cannot be left empty.");
        } else if (state == "") {
            setError("State cannot be left empty.");
        } else if (city == "") {
            setError("City cannot be left empty.");
        } else if (category == "") {
            setError("Category cannot be left empty.");
        } else if (subCategory == "") {
            setError("Sub Category cannot be left empty.");
        } else if (quantity == "") {
            setError("Qunatity cannot be left empty.");
        } else if (description == "") {
            setError("Description cannot be left empty.");
        } else if (pricePerFour == "") {
            setError("You must add price per four hour.");
        } else if (pricePerTwelve == "") {
            setError("You must add price per twelve hour.");
        } else if (initialDate == null || finalDate == null) {
            setError("You must select a date range");
        } else {

            if (token) {
                setLoading(true)
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const data = {
                    "sub_category_id": 1,
                    "images": images,
                    "name": name,
                    "description": description,
                    "state": state,
                    "city": city,
                    // "address": location, 
                    "pickup_lat": 41.6528,
                    "pickup_long": 83.5379,
                    "four_hours_rate": pricePerFour,
                    "twelve_hours_rate": pricePerTwelve,
                    "available_from": initialDate,
                    "available_till": finalDate,
                    "available_inventory": quantity
                };

                axios
                    .post(`${baseUrl}/products/create`, data, { headers })
                    .then((res) => {
                        console.log(res)
                        setLoading(false)

                    })
                    .catch((error) => {
                        setError(error?.response?.data?.error)
                        setLoading(false)
                    });
            } else {
                navigate("/login/");
            }
        }



    };



    return (
        <div className='relative w-full h-auto bg-white min-h-screen px-6 lg:px-14 py-6 lg:py-10 flex justify-start items-start gap-6 '>
            <div className='w-full border-2 border-gray-100 h-auto p-2 lg:p-6 flex flex-col gap-5 justify-start items-start'>
                <span className='text-xl font-bold text-gray-900'>
                    Post Product
                </span>

                <button onClick={() => document.getElementById("post-input-ref").click()} className=' cursor-pointer w-full h-auto p-8 border border-orange-500 border-dashed flex flex-col gap-1 items-center justify-center rounded-md'>
                    <IoImageOutline className='text-5xl text-gray-300' />
                    <span className='text-xs font-medium text-orange-500'>
                        Upload Image
                    </span>
                    <input type="file" accept="image/png, image/jpeg, image/jpg" id='post-input-ref' className='hidden' multiple onChange={handleImageChange} />
                </button>

                <div className='w-full h-auto flex flex-wrap gap-2 px-3 justify-start items-center '>

                    {/* Image component */}
                    {
                        images.map((image, key) => {
                            return (
                                <div className='relative w-[23%] md:w-[13%] lg:w-20 h-20 bg-gray-200 rounded-md'>
                                    <img src={`data:image/webp;base64,${image && image}`} className='w-full h-full rounded-md object-cover' />
                                    <button onClick={() => handleRemoveImage(key)} className='w-5 h-5 rounded-full bg-orange-500 absolute top-1 right-1 flex items-center justify-center shadow-md '>
                                        <MdClose className='text-xs text-white' />
                                    </button>
                                </div>
                            )
                        })
                    }



                </div>

                {/* input container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <PostInput text={"Name"} onChange={(e) => setName(e.target.value)} value={name} type={"text"} />
                    <div className='w-full flex flex-col lg:flex-row justify-start gap-1 items-center'>
                        <PostInput text={"Pickup Location"} onChange={(e) => setLocation(e.target.value)} value={location} type={"text"} />
                        <PostInput text={"State"} onChange={(e) => setState(e.target.value)} value={state} type={"text"} />
                        <PostInput text={"City"} onChange={(e) => setCity(e.target.value)} value={city} type={"text"} />

                    </div>
                </div>

                {/* Map container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <img src='/map.png' className='w-full' />
                </div>


                {/* Set avaialaility container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <span className='text-sm font-bold text-gray-900'>
                        Set Availability
                    </span>
                    <Calender setInitialDate={setInitialDate} setFinalDate={setFinalDate} />
                </div>


                {/* Pricing input container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <div className='w-full h-auto flex  gap-2 justify-start items-start'>
                        <PriceInput text={"Price / 4hr"} onChange={(e) => setPricePerFour(e.target.value)} value={pricePerFour} type={"text"} />
                        <PriceInput text={"Price / 12hr"} onChange={(e) => setPricePerTwelve(e.target.value)} value={pricePerTwelve} type={"text"} />
                    </div>
                    <PostInput text={"Qty."} onChange={(e) => setQuantity(e.target.value)} value={quantity} type={"text"} />
                </div>

                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <span className='text-sm font-bold text-gray-900'>
                        Select Category
                    </span>
                    <div className='relative w-full'>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full h-10 border border-gray-200 px-3 outline-none focus:border-orange-500 text-xs'>
                            <option value="" >
                                Select Category
                            </option>
                        </select>
                    </div>

                </div>


                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <span className='text-sm font-bold text-gray-900'>
                        Select Sub Category
                    </span>
                    <div className='relative w-full'>
                        <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className='w-full h-10 border border-gray-200 px-3 outline-none focus:border-orange-500 text-xs'>
                            <option value="" >
                                Select Sub Category
                            </option>
                        </select>
                    </div>
                </div>


                <PostDescriptionInput value={description} onChange={(e) => setDescription(e.target.value)} text={"Description"} />

                {/* Buttons container */}
                <div className="w-auto flex gap-2 justify-start items-center">

                    <button onClick={postProduct} className='w-36 h-10 bg-orange-500 text-xs font-medium flex items-center justify-center text-white uppercase'>
                        {
                            loading ? <BtnLoader /> : "Post Now"
                        }
                    </button>

                    <button className='w-auto px-2 h-10 bg-white text-xs  flex items-center justify-center font-medium text-orange-500 hover:underline underline-offset-2 uppercase'>
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    )
}

export default PostProduct
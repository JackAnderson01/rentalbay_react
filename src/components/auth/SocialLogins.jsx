"use client"

import React, { useContext } from 'react'
// firebase imports:
import { auth, googleProvider, appleProvider } from "../../firebase/firebase"
import {
    signInWithPopup,
} from "firebase/auth";
import { GlobalContext } from '../../context/GlobalContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SocialLogins = () => {

    const { setFormError, baseUrl } = useContext(GlobalContext)

    const navigate = useNavigate()


    const handleAppleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, appleProvider);
            console.log(auth)
            if (result) {
                const token = await result?.user?.getIdToken();
                if (token) {
                    axios
                        .post(`${baseUrl}/login-social`, {
                            id_token: token
                        })
                        .then(
                            (response) => {
                                // just for now
                                localStorage.setItem("token", response?.data?.data?.token);
                                if (response?.data?.data?.token) {
                                    navigate("/home/");
                                }
                            },
                            (error) => {
                                // setFormError(error?.response?.data?.error)
                                if (error?.response?.data?.error == "No user found") {
                                    axios
                                        .post(`${baseUrl}/register-social`, {
                                            id_token: token
                                        })
                                        .then(
                                            (response) => {
                                                console.log(response)
                                                if (response?.status == 201) {
                                                    axios
                                                        .post(`${baseUrl}/login-social`, {
                                                            id_token: token
                                                        })
                                                        .then(
                                                            (response) => {
                                                                // just for now
                                                                localStorage.setItem("token", response?.data?.data?.token);
                                                                console.log(response)
                                                                if (response?.data?.data?.token) {
                                                                    navigate("/home/");
                                                                }
                                                            },
                                                            (error) => {
                                                                setFormError(error?.response?.data?.error)
                                                                console.log(error)
                                                            }
                                                        );
                                                    if (response?.data?.data?.token) {
                                                        navigate("/home/");
                                                    }
                                                }
                                            },
                                            (error) => {
                                                setFormError(error?.response?.data?.error)
                                                console.log(error)
                                            }
                                        );
                                }
                                console.log(error)
                            }
                        );
                }
            }
        } catch (err) {
            console.log(err);
            setFormError("Cannot open apple signin modal.");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(auth)
            if (result) {
                const token = await result?.user?.getIdToken();
                if (token) {
                    axios
                        .post(`${baseUrl}/login-social`, {
                            id_token: token
                        })
                        .then(
                            (response) => {
                                // just for now
                                localStorage.setItem("token", response?.data?.data?.token);
                                if (response?.data?.data?.token) {
                                    navigate("/home/");
                                }
                            },
                            (error) => {
                                // setFormError(error?.response?.data?.error)
                                if (error?.response?.data?.error == "No user found") {
                                    axios
                                        .post(`${baseUrl}/register-social`, {
                                            id_token: token
                                        })
                                        .then(
                                            (response) => {
                                                console.log(response)
                                                if (response?.status == 201) {
                                                    axios
                                                        .post(`${baseUrl}/login-social`, {
                                                            id_token: token
                                                        })
                                                        .then(
                                                            (response) => {
                                                                // just for now
                                                                localStorage.setItem("token", response?.data?.data?.token);
                                                                console.log(response)
                                                                if (response?.data?.data?.token) {
                                                                    navigate("/home/");
                                                                }
                                                            },
                                                            (error) => {
                                                                setFormError(error?.response?.data?.error)
                                                                console.log(error)
                                                            }
                                                        );
                                                    if (response?.data?.data?.token) {
                                                        navigate("/home/");
                                                    }
                                                }
                                            },
                                            (error) => {
                                                setFormError(error?.response?.data?.error)
                                                console.log(error)
                                            }
                                        );
                                }
                                console.log(error)
                            }
                        );
                }
            }
        } catch (err) {
            console.log(err);
            setFormError("Cannot open google signin modal.");
        }
    };


    return (
        <div className='w-full h-auto flex flex-col justify-start items-center gap-4 mt-4 lg:mt-10'>
            {/* Google Button */}
            <button onClick={handleGoogleLogin} className='w-full h-10 rounded-xl bg-gray-100 transition-all duration-150 hover:bg-gray-200 px-6 flex justify-start gap-4 items-center'>
                <img src='/google-icon.png' className='h-4 lg:h-6' />
                <span className='text-sm mx-auto font-semibold text-gray-800'>
                    Continue with google
                </span>
            </button>

            {/* Apple Button */}
            <button onClick={handleAppleLogin} className='w-full h-10 rounded-xl bg-gray-100 transition-all duration-150 hover:bg-gray-200 px-6 flex justify-start gap-4 items-center'>
                <img src='/apple-icon.png' className='h-4 lg:h-6' />
                <span className='text-sm mx-auto font-semibold text-gray-800'>
                    Continue with apple
                </span>
            </button>


            {/* Facebook Button */}
            <button className='w-full h-10 rounded-xl bg-gray-100 transition-all duration-150 hover:bg-gray-200 px-6 flex justify-start gap-4 items-center'>
                <img src='/facebook-icon.png' className='h-4 lg:h-6' />
                <span className='text-sm mx-auto font-semibold text-gray-800'>
                    Continue with facebook
                </span>
            </button>
        </div>
    )
}

export default SocialLogins
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import SocialLogins from '../SocialLogins'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineLock } from 'react-icons/md'
import { FaRegUser } from "react-icons/fa6";
import FormError from '../../global/FormError'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = () => {


    const { formError, setFormError, emailError, passwordError, setEmailError, setPasswordError, baseUrl } = useContext(GlobalContext)

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)


    // Form Input States:
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Form Error states:
    const [nameError, setNameError] = useState(false);





    const handleSignup = () => {
        
        if (email == "") {
            setEmailError("Email is required.");
            setTimeout(() => {
                setEmailError(false);
            }, 3000)
        } else if (password ==  "") {
            setPasswordError("Password is required.");
            setTimeout(() => {
                setPasswordError(false);
            }, 3000)
        }else if (password.length < 6) {
            setPasswordError("Password must be atleast 6 characters long.");
            setTimeout(() => {
                setPasswordError(false);
            }, 3000)
        } else if (name == "") {
            setNameError("Full Name is required.");
            setTimeout(() => {
                setNameError(false);
            }, 3000)
        } else {
            setLoading(true)
            axios
                .post(`${baseUrl}/register-email`, {
                    full_name: name,
                    email: email,
                    password: password,
                })
                .then(
                    (response) => {
                        navigate("/verify-email-otp")
                    },
                    (error) => {
                        setLoading(false);
                        setFormError(error?.response?.data?.error)
                    }
                );
        }

    }


    return (
        <div className="w-full h-full flex flex-col justify-start items-start gap-3">

            <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
                    Create an account!
                </h1>
                <span className="text-sm lg:text-lg text-[#959595] font-medium">
                    Enter the below details to create an account
                </span>

            </div>

            <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
                {formError && <FormError />}

                <div className='w-full h-auto flex flex-col gap-[2px]'>
                    <AuthInput text={"Full Name"} icon={<FaRegUser />} state={name} setState={setName} type={"text"} />
                    {
                        nameError && <label className='ml-3 text-xs font-medium capitalize text-red-500'>{nameError}</label>
                    }
                </div>

                <div className='w-full h-auto flex flex-col gap-[2px]'>

                    <AuthInput text={"Email Address"} icon={<HiOutlineMail />} state={email} setState={setEmail} type={"email"} />
                    {
                        emailError && <label className='ml-3 text-xs font-medium capitalize text-red-500'>{emailError}</label>
                    }
                </div>
                <div className='w-full h-auto flex flex-col gap-[2px]'>

                    <AuthInput text={"Password"} icon={<MdOutlineLock />} state={password} setState={setPassword} type={"password"} />
                    {
                        passwordError && <label className='ml-3 text-xs font-medium capitalize text-red-500'>{passwordError}</label>
                    }
                </div>

                <AuthButton onClick={handleSignup} text={"Create an account"} loading={loading} />
            </div>

            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-auto flex justify-center items-center gap-1'>
                    <span className='text-[#959595] text-sm font-medium'>
                        Already have an account?
                    </span>
                    <Link to="/login" className='text-sm text-orange-500 font-semibold'>
                        Login
                    </Link>
                </div>
            </div>

            {/* Social Logins */}
            <SocialLogins />

        </div>
    )
}

export default RegisterForm
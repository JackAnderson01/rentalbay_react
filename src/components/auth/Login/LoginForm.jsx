import React, { useContext, useState } from 'react'
import AuthButton from '../AuthButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthInput from '../AuthInput';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";
import axios from "axios";
import { GlobalContext } from '../../../context/GlobalContext';
import SocialLogins from '../SocialLogins';
import FormError from '../../global/FormError';


const LoginForm = () => {

    const { formError, setFormError, emailError, passwordError, setEmailError, setPasswordError, baseUrl } = useContext(GlobalContext)

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)


    // Form Input States:
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = () => {
        if (email == "") {
            setEmailError("Email is required.");
            setTimeout(() => {
                setEmailError(false);
            }, 3000)
        } else if (password == "") {
            setPasswordError("Password is required.");
            setTimeout(() => {
                setPasswordError(false);
            }, 3000)
        } else if (password.length < 6 ) {
            setPasswordError("Minimum password length is 6.");
            setTimeout(() => {
                setPasswordError(false);
            }, 3000)
        }
         else {
            setLoading(true)
            axios
                .post(`${baseUrl}/login-email`, {
                    email: email,
                    password: password,
                })
                .then(
                    (response) => {
                        localStorage.setItem("token", response?.data?.data?.token);
                        if (response?.data?.data?.token) {
                            navigate("/home/");
                        }
                        setLoading(false);
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
                    Welcome back!
                </h1>
                <span className="text-sm lg:text-lg text-[#959595] font-medium">
                    Enter the below details to log in
                </span>

            </div>


            <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
                {formError && <FormError />}
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
                <div className='w-full h-auto mt-1 flex justify-end items-center'>
                    <Link to="/verify-email" className='text-xs font-semibold text-blue-500'>
                        Forgot Password?
                    </Link>

                </div>
                <AuthButton onClick={handleLogin} text={"Login"} loading={loading} />
            </div>

            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-auto flex justify-center items-center gap-1'>
                    <span className='text-[#959595] text-sm font-medium'>
                        Don't have an account?
                    </span>
                    <Link to="/register" className='text-sm text-orange-500 font-semibold'>
                        Create One
                    </Link>
                </div>
            </div>

            {/* Social Logins */}
            <SocialLogins />

        </div>
    )
}

export default LoginForm
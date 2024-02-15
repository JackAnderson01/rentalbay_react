import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FormError from '../../global/FormError'





const VerifyEmailOtp = () => {


    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { formError, setFormError, baseUrl } = useContext(GlobalContext)



    // Form Input States:
    const [otp, setOtp] = useState("");

    // Form Error States
    const [otpError, setOtpError] = useState(false)

    const handleSendAgain = () => {
        // Hit api
        console.log("Send again")
    }


    const handleOtpVerification = () => {
        if (otp == "") {
            setOtpError("*OTP cannot be left empty.");
            setTimeout(() => {
                setOtpError(false);
            }, 3000)
        } else if (otp.length < 6) {
            setOtpError("*OTP cannot be less than 6 digits.");
            setTimeout(() => {
                setOtpError(false);
            }, 3000)
        } else {
            setLoading(true)
            axios
                .post(`${baseUrl}/verify-otp`, {
                    otp: otp,
                })
                .then(
                    (response) => {
                        console.log(response);
                        // just for now
                        localStorage.setItem("otp", otp)
                        navigate("/login/")
                        setLoading(false);
                    },
                    (error) => {
                        setLoading(false);
                        console.log(error)
                        setFormError(error?.response?.data?.error)
                    }
                );
        }

    }

    return (

        <div className="w-full h-full flex flex-col justify-start items-center gap-3">

            <div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
                <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
                    We just sent you an email!
                </h1>
                <span className="text-sm lg:text-lg text-center text-[#959595] font-medium">
                    Enter the verification code sent to oli*****@gmail.com
                </span>

            </div>

            {formError && <FormError />}

            <div className='w-full h-auto flex flex-col gap-[2px]'>
                <AuthInput text={"OTP Code"} icon={<MdOutlineNoEncryptionGmailerrorred />} state={otp} setState={setOtp} type={"text"} />
                {
                    otpError && <label className='ml-3 text-xs font-medium capitalize text-red-500'>{otpError}</label>
                }
            </div>

            <AuthButton onClick={handleOtpVerification} text={"Verify"} loading={loading} />

            <div className='w-[80%] mt-2 h-auto flex justify-center items-center'>
                <div className='w-auto flex justify-center items-center gap-1'>
                    <span className='text-[#959595] text-sm font-medium'>
                        Didn't recieved a code?
                    </span>
                    <button onClick={handleSendAgain} className='text-sm text-orange-500 font-semibold'>
                        Send Again
                    </button>
                </div>
            </div>


        </div>
    )
}

export default VerifyEmailOtp
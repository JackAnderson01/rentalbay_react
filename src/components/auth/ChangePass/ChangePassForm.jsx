import React, { useState, useContext } from 'react'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import { MdOutlineLock } from "react-icons/md";
import axios from 'axios'
import { GlobalContext } from '../../../context/GlobalContext';
import FormError from '../../global/FormError';
import { useNavigate } from 'react-router-dom';


const ChangePassForm = () => {

  const navigate = useNavigate()

  const { formError, setFormError, baseUrl } = useContext(GlobalContext)


  const [loading, setLoading] = useState(false)

  // form states
  const [password, setPassword] = useState("");
  const [reEnterPass, setReEnterPass] = useState("");


  // form error states
  const [passError, setPassError] = useState(false);
  const [rePassError, setRePassError] = useState(false);




  const handleChangePass = () => {
    if (password == "") {
      setPassError("*Password is required");
      setTimeout(() => {
        setPassError(false)
      }, 3000)
    } else if (password.length < 6) {
      setPassError("*Password cannot be less than 6 characters");
      setTimeout(() => {
        setPassError(false)
      }, 3000)
    } else if (reEnterPass == "") {
      setRePassError("*Re-enter password is required");
      setTimeout(() => {
        setRePassError(false);
      }, 3000)
    } else if (reEnterPass !== password) {
      setRePassError("*Password doesn't match");
      setTimeout(() => {
        setRePassError(false);
      }, 3000)
    } else {
      // just for now
      const otp = localStorage.getItem("otp")
      setLoading(true)
      axios
        .post(`${baseUrl}/users/update/forgotten-password`, {
          otp: otp,
          new_password : password
        })
        .then(
          (response) => {
            console.log(response);
            navigate("/password-updated/")
            setLoading(false);
          },
          (error) => {
            setLoading(false);
            console.log(error)
            setFormError(error?.response?.data?.message)
          }
        );
    }

  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-3">

      <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
        <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
          Set a new Password!
        </h1>
        <span className="text-sm lg:text-lg text-[#959595] font-medium">
          Fill both password fields to continue
        </span>

      </div>

      <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
        {formError && <FormError />}
        <div className='w-full h-auto flex flex-col gap-[2px]'>

          <AuthInput text={"Password"} icon={<MdOutlineLock />} state={password} setState={setPassword} type={"password"} />
          {
            passError && <label className='ml-3 text-xs font-medium capitalize text-red-500'>{passError}</label>
          }
        </div>

        <div className='w-full h-auto flex flex-col gap-[2px]'>


          <AuthInput text={"Re-enter Password"} icon={<MdOutlineLock />} state={reEnterPass} setState={setReEnterPass} type={"password"} />
          {
            rePassError && <label className='ml-3 text-xs font-medium capitalize text-red-500'>{rePassError}</label>
          }
        </div>

        <AuthButton onClick={handleChangePass} text={"Save"} loading={loading} />
      </div>

    </div>
  )
}

export default ChangePassForm
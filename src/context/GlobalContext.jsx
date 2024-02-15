import React, { createContext, useState, useRef } from "react";
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const cartRef = useRef(null);
  const filterRef = useRef(null);
  const baseUrl = "https://sweet-ace-pika.ngrok-free.app/api";
  const imageUrl = "http://192.168.18.45:8000/storage/";

  const toggleCart = () => {
    // Check if the cartRef.current is not null before accessing its classList
    if (cartRef.current) {
      cartRef.current.classList.toggle("translate-x-0");
      cartRef.current.classList.toggle("translate-x-96");
    }
  };

  const toggleFilter = () => {
    // Check if the cartRef.current is not null before accessing its classList
    if (filterRef.current) {
      filterRef.current.classList.toggle("translate-x-0");
      filterRef.current.classList.toggle("-translate-x-full");
    }
  };

  // Global states or error handling:
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Authentication states:
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        cartRef,
        toggleCart,
        filterRef,
        toggleFilter,
        formError,
        setFormError,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        baseUrl,
        isLoggedIn,
        setIsLoggedIn,
        imageUrl,
        error,
        setError,
        success,
        setSuccess,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

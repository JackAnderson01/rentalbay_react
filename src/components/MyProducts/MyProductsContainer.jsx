import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MyProductsCard from "./MyProductsCard";
import axios from "axios";
import MyProductSkeleton from "./MyProductSkeleton";

const MyProductsContainer = () => {
  const { baseUrl } = useContext(GlobalContext);

  const [myProducts, setMyProducts] = useState([]);
  const dummy = [1,2,3,4,5,6]
  const [productLoading, setProductLoading] = useState(false);
  const [realTimeReload, setRealTimeReload] = useState(false);

  const getUserLentedProducts = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setProductLoading(true);
      const headers = {
        "ngrok-skip-browser-warning": true,
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/products/user`, { headers }).then(
        (response) => {
          setMyProducts(response?.data?.data?.products);
          setProductLoading(false);
        },
        (error) => {
          setProductLoading(false);
        }
      );
    }
  };

  useEffect(() => {
    getUserLentedProducts();
  }, []);

  useEffect(() => {
    getUserLentedProducts();
  }, [realTimeReload]);

  return (
    <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
      <span className="text-lg font-bold text-gray-900">My Products</span>

      <div className="flex items-start justify-start w-full h-auto flex-wrap">
        {productLoading
          ? dummy?.map((item) => {
              return <MyProductSkeleton />;
            })
          : myProducts?.map((product, key) => (
              <MyProductsCard
                product={product}
                key={key}
                setRealTimeReload={setRealTimeReload}
              />
            ))}
      </div>
    </div>
  );
};

export default MyProductsContainer;

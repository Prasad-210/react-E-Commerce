import { useEffect, useState } from "react";

const useGetProductDetails = (productId) => {
  const [singlProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            // console.log("a", data);
            setSingleProduct(data);
        } catch (error) {
            console.error('Error fetching product data:', error);   
        }
      };

  return singlProduct;
};

export default useGetProductDetails;

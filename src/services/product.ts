import axios from "axios"

export const getAllProducts = async() => {
    try {
        const res = await axios.get('http://localhost:3000/products');
        return res.data
    } catch (error) {
        return [];
    }
}

export const getProductById = async (id: number | string) => {
    try {
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
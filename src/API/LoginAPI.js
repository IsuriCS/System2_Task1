import axios from "axios";

const API_URL = "https://app-it6agnk4fq-uc.a.run.app"

const loginPost = async (username, password) => {
    try {
        const response=await axios.post(`${API_URL}/login`, {
            username: username,
            password: password,
        });
        return response.status;
    } catch (error) {
        console.error('Axios error:', error); 
        return error.response.status || "An error occurred";
    }
};

export default loginPost;
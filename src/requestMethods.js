import axios from "axios";


const BASE_URL = "http://localhost:5000/api/"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzE1Njk5YzAzYzRhZDY5MTZmNDRiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTU5OTc3NSwiZXhwIjoxNjUxODU4OTc1fQ.B66GjXlObND_spV5BRt4J2vQKxSjtRTw5T0QCZE2cF0";


export const publicRequest = axios.create({
    baseURL : BASE_URL,

});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
    

});
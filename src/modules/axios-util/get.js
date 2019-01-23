import axios from "axios"
// axios.defaults.withCredentials = true;
const Get = ({ url, data})=>{
    return axios.get(url,{
        params:data
    })
}
export default Get;
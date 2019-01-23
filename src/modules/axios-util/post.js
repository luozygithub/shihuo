import axios from "axios"
// import qs from "qs"

const Post = ({url , data})=>{
    return axios.post(url, data)
}
export default Post;
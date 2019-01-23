import Post from "./post"
import Get from "./get"
import {Component} from "react"

Component.prototype.$post = Post;
Component.prototype.$get = Get;
export {
    Post,
    Get
}
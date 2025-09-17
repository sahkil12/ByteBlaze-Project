import toast from "react-hot-toast";

export const getBlogs = ()=>{
    let blogs = [];
    const storedBlogs = localStorage.getItem("blogs");
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}
// save blogs in localstorage
export const setBlogs = (blog) =>{

    let blogs = getBlogs();
    const exits = blogs.find(b => b.id === blog.id);
    if(exits){
        toast.error("Already Bookmarked!")
    }else{
        blogs.push(blog)
        localStorage.setItem("blogs", JSON.stringify(blogs))
        toast.success("Blog Bookmark Successfully")
    }
}
// remove blogs in localstorage
export const removeBlog = (id) =>{
    let blogs = getBlogs()
    const remainingBlogs = blogs.filter(b => b.id !== id)
    localStorage.setItem("blogs", JSON.stringify(remainingBlogs))
    toast.success("Blog Remove From Bookmark!")
}
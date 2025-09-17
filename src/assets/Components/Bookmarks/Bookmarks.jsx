import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getBlogs, removeBlog } from "../DataBase/LocalData";
import BlogCart from "./../Blogs/BlogCart";
import EmptyPage from "../ErrorPage/EmptyPage";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleRemove = (id) => {
    removeBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

if(blogs.length == 0) return <EmptyPage msg={"No Bookmark Available"}></EmptyPage>
  return (
    <div>
      <Helmet>
        <title>Bookmarks | ByteBlaze</title>
      </Helmet>
      <div className="grid md:mx-14 px-5 sm:px-8 lg:px-16 py-8 justify-center grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 19).map((blog, idx) => (
          <BlogCart
            handleRemove={handleRemove}
            deleteAble={true}
            key={idx}
            blog={blog}
          ></BlogCart>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;

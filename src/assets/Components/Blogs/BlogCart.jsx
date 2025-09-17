import { Link } from "react-router-dom";
import missingImg from "../image/404.jpg"
import { MdDeleteForever } from "react-icons/md";

const BlogCart = ({blog, deleteAble, handleRemove}) => {

    const {cover_image, published_at, title, description, id} = blog
   
    return (
        <div className="flex relative  max-w-sm">
            <div className=" border-2 p-2 border-purple-400 hover:scale-105 transition hover:border-secondary max-w-sm ">
           <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image || missingImg} />
				<div className="p-6 space-y-3">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date (published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
        </div>
                {deleteAble && <button onClick={()=>handleRemove(id)} className="-top-7 -right-7 h-16 w-16 absolute bg-purple-300 hover:bg-purple-400 items-center rounded-full flex justify-center hover:scale-105 overflow-hidden"><MdDeleteForever size={30} className="text-red-700 "></MdDeleteForever></button>}
        </div>
    );
};

export default BlogCart;
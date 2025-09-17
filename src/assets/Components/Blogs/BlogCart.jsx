import { Link } from "react-router-dom";
import missingImg from "../image/404.jpg"
const BlogCart = ({blog}) => {
    console.log(blog);
    const {cover_image, published_at
, title, description, id} = blog
    return (
        <div className="border-2  p-2 border-purple-400 hover:scale-105 transition hover:border-secondary ">
           <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image || missingImg} />
				<div className="p-6 space-y-3">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date (published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
        </div>
    );
};

export default BlogCart;
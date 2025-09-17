import { useLoaderData } from "react-router-dom";
import missingImg from "../image/404.jpg"

const Content = () => {
    const blog = useLoaderData()
    const {cover_image, published_at
, title, description, tags,social_image} = blog
    return (
        <div className="border-2 p-2 border-gray-200">
                 <div rel="noopener noreferrer" href="#" className=" mx-auto group hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image || missingImg} />
                <div className="flex flex-wrap py-6 gap-2 ">
			
			{tags.map(tag=> (
					<a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm text-black hover:underline">#{tag}</a>
			))}
		</div>
				<div className="p-6 space-y-3">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date (published_at).toLocaleDateString()}</span>
					<p>{description}</p>
                    <p>{description} {description} {description} {description} </p>
                    <h3 className="text-xl font-semibold">{title}</h3>
				</div>
            <img src={social_image} alt="" />
				<div className="p-6 space-y-3">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date (published_at).toLocaleDateString()}</span>
					<p>{description}</p>
                    <p>{description} {description} {description} {description} </p>
                    <h3 className="text-xl font-semibold">{title}</h3>
				</div>
            <img src={social_image} alt="" />
			</div>
        </div>
    );
};

export default Content;
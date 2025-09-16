import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="">
            <div className="hero  ">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">
        Welcome To {""}
         <span className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary text-transparent bg-clip-text animate-gradient ">ByteBlaze</span>
      </h1>
      <p className="py-6 text-lg">
        ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
      </p>
     <div className="flex gap-3 justify-center ">

       <Link to={'/blogs'} href="#_" className="relative inline-flex items-center justify-center p-4 px-7 text-lg py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-600">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-800"></span>
    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
    <span className="relative text-white">Read Blogs</span>
</Link>
       <Link to={'/bookmarks'} href="#_" className="relative inline-flex items-center justify-center p-4 px-7 text-lg py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-600">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
    <span className="relative text-white">Bookmarks</span>
</Link>
       
      
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
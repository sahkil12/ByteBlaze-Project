import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)] relative">
            <Banner></Banner>

            <img className="w-full absolute bottom-0" src={'/public/wave.svg'} alt="" />
        </div>
    );
};

export default Home;
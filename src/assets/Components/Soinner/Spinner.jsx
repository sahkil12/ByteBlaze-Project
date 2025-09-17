import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-col  justify-center items-center min-h-[calc(100vh-180px)]">
      <HashLoader color="#60bcff" size={75} />
    </div>
  );
};

export default Spinner;

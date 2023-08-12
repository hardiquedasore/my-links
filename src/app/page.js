import Link from "next/link";
import Tree from "./pages/Tree";
import constants from "../../constants"

const Home = () => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen w-full`} style={{backgroundColor:  `${constants.background}`, backgroundImage:  `${constants.backgroundImage}`, color: `${constants.color}` }}>
      
     <Tree/>
    </div>
  );
};

export default Home;

import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Tutorial from "@/components/Tutorial";
import Initialization from "@/components/Initialization";

const Home = () => {
  return (
    <div className="w-screen flex flex-col">
      <Banner />
      <Tutorial />
      <Initialization />
      <Footer />
    </div>
  );
};

export default Home;

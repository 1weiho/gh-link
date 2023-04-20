import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Tutorial from "@/components/Tutorial";
import Initialization from "@/components/Initialization";

const Home = () => {
  return (
    <div className="flex w-screen flex-col">
      <Banner />
      <Tutorial />
      <Initialization />
      <Footer />
    </div>
  );
};

export default Home;

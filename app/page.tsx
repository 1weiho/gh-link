import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Tutorial from "@/components/homepage/Tutorial";
import Initialization from "@/components/homepage/Initialization";

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

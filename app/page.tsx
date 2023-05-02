import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Tutorial from "@/components/homepage/Tutorial";
import Initialization from "@/components/homepage/Initialization";
import { BlurColor } from "@/components/BlurColor";

const Home = () => {
  return (
    <div>
      <BlurColor />
      <Banner />
      <div className="flex w-screen flex-col lg:px-20 xl:px-48">
        <Tutorial />
        <Initialization />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

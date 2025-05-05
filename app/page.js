import MainBanner from "@/components/Home/MainBanner";
import Statistic from "@/components/Home/Statistic";
import TopStore from "@/components/Home/TopStore";
import Companies from "@/components/Home/Companies";
import TopDiscount from "@/components/Home/TopDiscount";
import Advertise from "@/components/Home/Advertise";
import FaveStore from "@/components/Home/FaveStore";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <Statistic />
      <TopStore />
      <Companies />
      <TopDiscount />
      <Advertise />
      <FaveStore />
      <About />
    </div>
  );
}

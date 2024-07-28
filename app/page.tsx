import FeatureSection from "@/components/molecules/FeatureSection";
import MusicSchoolTestemonial from "@/components/MusicSchoolTestemonial";
import HeroSection from "@/components/molecules/HeroSection";
import UpcomingWebiner from "@/components/molecules/UpcommingWebiner"
import WhyChooseUs from "@/components/molecules/WhyChooseUs";
import Instructors from "@/components/molecules/Instructors";
import Footer from "@/components/molecules/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-gird-white/[0.02]">
    <div>
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs />
      <MusicSchoolTestemonial/>
      <UpcomingWebiner />
      <Instructors/>
      <Footer/>
    </div>
    </main>
  );
}

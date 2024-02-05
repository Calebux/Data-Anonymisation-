import CoreFeatures from "../features/home/CoreFeatures";
import HomeHero from "../features/home/HomeHero";
import HowItWorks from "../features/home/HowItWorks";
import Footer from "../ui/Footer";

function LandingPage() {
  return (
    <div>
      <HomeHero />
      <CoreFeatures />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;

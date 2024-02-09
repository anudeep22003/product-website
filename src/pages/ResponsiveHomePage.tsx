import Footer2 from "@/components/sections/Footer2";
import Testimonials from "@/components/sections/Testimonials";
import Header from "@/components/sections/responsive-sections/Header";
import Hero from "@/components/sections/responsive-sections/Hero";
import HowItWorks from "@/components/sections/responsive-sections/HowItWorks";
import SocialProof from "@/components/sections/responsive-sections/SocialProof";
import WhyUse from "@/components/sections/responsive-sections/WhyUse";

const ResponsiveHomePage = () => {
    return (
        <div className="flex flex-col gap-9 px-4 pb-4">
            <Header />
            <Hero />
            <SocialProof />
            <WhyUse />
            <HowItWorks />
            <Testimonials />
            <Footer2 />
        </div>
    );
};

export default ResponsiveHomePage;

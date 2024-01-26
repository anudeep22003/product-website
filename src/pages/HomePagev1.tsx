import AboutFounders from "@/components/sections/AboutFounders";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import { Separator } from "@radix-ui/react-dropdown-menu";

const HomePagev1 = () => {
    return (
        <div className="container relative ">
            <Header />
            <Separator />
            <Hero />
            <Separator />
            <Features />
            <Separator />
            <SocialProof />
            <Separator />
            <div className="flex text-4xl text-center m-8 justify-start font-semibold">
                The Team
            </div>
            <AboutFounders />
            <Separator />
            <Footer />
        </div>
    );
};

export default HomePagev1;

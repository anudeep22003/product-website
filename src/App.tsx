import AboutFounders from "./components/sections/AboutFounders";
import FAQs from "./components/sections/FAQs";
import Footer2 from "./components/sections/Footer2";
import Header2 from "./components/sections/Header2";
import Hero2 from "./components/sections/Hero2";
import SocialProof2 from "./components/sections/SocialProof2";
import Testimonials from "./components/sections/Testimonials";
import WhyUse2 from "./components/sections/WhyUse2";
// import HomePagev1 from "./pages/HomePagev1";

const HomePageApp = () => {
    return (
        <div className="flex items-center justify-center">
            {/* <HomePagev1 /> */}
            <div className="flex flex-col ml-12 mr-12 p-4 gap-8 w-3/4 items-center">
                <Header2 />
                <Hero2 />
                <SocialProof2 />
                <WhyUse2 />
                <FAQs />
                <Testimonials />
                <Footer2 />
            </div>
        </div>
    );
};

const AboutPageApp = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col ml-12 mr-12 p-4 gap-8 w-3/4 items-center">
                <Header2 />
                <AboutFounders />
                <Footer2 />
            </div>
        </div>
    );
};

function App() {
    return <AboutPageApp />;
}

export default App;
export { HomePageApp, AboutPageApp };

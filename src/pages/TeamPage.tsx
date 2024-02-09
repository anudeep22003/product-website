import Footer2 from "@/components/sections/Footer2";
import Header from "@/components/sections/responsive-sections/Header";
import TeamSection from "@/components/sections/responsive-sections/TeamSection";

const TeamPage = () => {
    return (
        <div className="flex flex-col gap-9 px-4 pb-4">
            <Header />
            <TeamSection />
            <Footer2 />
        </div>
    );
};

export default TeamPage;

import { useNavigate } from "react-router-dom";
import ButtonCTA from "../ButtonCTA";

const Header2 = () => {
    const navigate = useNavigate();
    return (
        <section className="flex w-full mt-12 gap-4 items-center justify-center">
            <div className="text-center text-black text-4xl font-bold font-['Inter'] ">
                - REWARD -
            </div>
            <div
                id="header-button-row"
                className="flex grow justify-end gap-16"
            >
                <div
                    className="text-black cursor-auto text-2xl font-medium font-['Inter']"
                    onClick={() => navigate("/")}
                >
                    Home
                </div>
                <div
                    className="text-black text-2xl font-medium font-['Inter']"
                    onClick={() => navigate("/about")}
                >
                    Team
                </div>
            </div>
            <div className="flex ml-12" id="spacer"></div>
            <ButtonCTA />
        </section>
    );
};

export default Header2;

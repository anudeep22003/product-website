import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section
            id="hero"
            className="flex p-4 items-center justify-between font-serif font-bold"
        >
            <h1>REWARD</h1>
            <div className="flex gap-8 items-center font-sans font-light">
                <div className="flex gap-2">
                    <Link to="/">Home</Link>
                    <Link to="/team">Team</Link>
                </div>
                <div className="flex">
                    <Button size={"sm"}>
                        <a href="https://cal.com/anudeepy/learn-more-about-rlhf-and-reward-ai">
                            Chat with us
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Header;

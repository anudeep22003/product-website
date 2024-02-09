import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <section
            id="hero"
            className="flex p-4 items-center justify-between font-serif font-bold"
        >
            <h1>REWARD</h1>
            <div className="flex gap-8 items-center font-sans font-light">
                <div className="flex gap-2">
                    <a href="/" className="">
                        Home
                    </a>
                    <a href="team" className="">
                        Team
                    </a>
                </div>
                <div className="flex">
                    <Button size={"sm"}>Click Me</Button>
                </div>
            </div>
        </section>
    );
};

export default Header;

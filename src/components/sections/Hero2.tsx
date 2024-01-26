import ButtonCTA from "../ButtonCTA";
import Ellipse from "../Ellipse";

const Hero2 = () => {
    return (
        <section className="flex">
            <div
                id="hero-text-section"
                className="flex flex-col gap-8 mt-32 items-start"
            >
                <div className="w-[600px] text-black text-6xl font-bold font-['Inter']">
                    Use human feedback, teach your AI
                </div>
                <div className="w-[600px] text-black text-2xl font-['Inter']">
                    Use RLHF{" "}
                    <span className="  ">
                        (the technique used by OpenAI to train ChatGPT)
                    </span>{" "}
                    to consolidate the experience of your workforce and use it
                    to create a perpetually learning AI
                </div>
                <ButtonCTA />
            </div>
            <div className="flex">
                <Ellipse />
            </div>
        </section>
    );
};

export default Hero2;

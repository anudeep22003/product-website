import { Button } from "@/components/ui/button";
import Ellipse from "../../Ellipse";

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex gap-4 flex-col md:flex-row relative justify-center"
        >
            <div className="p-2 overflow-clip">
                <Ellipse />
            </div>
            <div className="flex flex-col gap-4 p-2 items-start absolute h-full justify-end md:w-1/3 w-full">
                <h1 className="font-bold text-2xl">
                    Use Human feedback, teach your AI
                </h1>
                <p className="text-gray-500">
                    Use RLHF (the technique used by OpenAI to train ChatGPT) to
                    consolidate the experience of your workforce and use it to
                    create a perpetually learning AI
                </p>
                <Button>Join Now</Button>
            </div>
        </section>
    );
};

export default Hero;

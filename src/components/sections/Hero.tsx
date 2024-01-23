import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="grid grid-cols-6">
            <div className="flex flex-col col-span-3 items-start justify-center p-16 gap-8 bg-slate-300 rounded-md rounded-r-none">
                <h1 className="text-4xl font-bold text-start">
                    {/* Craft conversational experiences using RLHF */}
                    Infuse emotion, tone and personality into your
                    conversational agents
                </h1>
                <p className="text-lg">
                    {
                        "Generate, consolidate and distil your organizational knowledge into reward models, that sculpt your AI"
                    }
                </p>
                <Button>Get Started</Button>
            </div>
            <div className="flex col-span-3 aspect-auto m-8">
                <img src="/sample_image.png" alt="sample" />
            </div>
        </section>
    );
};

export default Hero;

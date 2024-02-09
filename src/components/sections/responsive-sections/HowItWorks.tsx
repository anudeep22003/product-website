type HowItWorksBaseProps = {
    variant: number;
    text: string;
};

const HowItWorksBase = ({ variant, text }: HowItWorksBaseProps) => {
    return (
        <div className="flex items-start gap-8 self-stretch">
            <p className="text-2xl font-bold font-sans">{variant}</p>
            <p className="text-md">{text}</p>
        </div>
    );
};

const HowitWorksVariants = ({ variant }: { variant: 1 | 2 | 3 | 4 }) => {
    switch (variant) {
        case 1:
            return (
                <HowItWorksBase
                    variant={variant}
                    text="We will work with you to define your purpose, answer question and fill in the detail that would go into the form."
                />
            );
        case 2:
            return (
                <HowItWorksBase
                    variant={variant}
                    text="We will breakdown your tasks in 80/20, 80% will be taken care of by our trained humans, while 20% will be generated by your team to supervise our 80%"
                />
            );
        case 3:
            return (
                <HowItWorksBase
                    variant={variant}
                    text="We will use your data and train your proprietary reward model, and then use it to finetune an open-source LLM for you"
                />
            );
        case 4:
            return (
                <HowItWorksBase
                    variant={variant}
                    text="We will then deploy the LLM and your reward model on our servers, and you can use our API to connect to it."
                />
            );
        default:
            throw new Error("Invalid variant");
    }
};

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="flex flex-col gap-10 p-6 items-start self-center bg-slate-100 rounded-md md:w-2/3 lg:w-1/2 "
        >
            <h1 className="text-lg font-semibold self-stretch">How it works</h1>
            <HowitWorksVariants variant={1} />
            <HowitWorksVariants variant={2} />
            <HowitWorksVariants variant={3} />
            <HowitWorksVariants variant={4} />
        </section>
    );
};

export default HowItWorks;

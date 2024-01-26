type UseCardProps = {
    imgSource: string;
    headerText: string;
    bodyText: string;
};

const UseCard = ({ bodyText, headerText, imgSource }: UseCardProps) => {
    return (
        <div className="grid grid-cols-6 grid-rows-6 gap-1 rounded-md bg-slate-100 p-4 w-1/3 min-w-[350px] max-w-[400px] items-center">
            <img
                src={imgSource}
                alt={imgSource}
                className="row-start-1 row-span-2 col-span-2 col-start-3"
            />
            <div className="flex flex-shrink row-start-3 col-start-2 col-span-4 text-center text-black text-2xl font-bold font-['Inter'] underline tracking-wider">
                {headerText}
            </div>
            <div className="row-start-4 row-span-3 col-start-1 col-span-6 text-black text-xl font-light tracking-wide font-['Inter'] whitespace-pre-line bg-slate-50 p-4 m-4 rounded-md self-start drop-shadow-md">
                {bodyText}
            </div>
        </div>
    );
};

const WhyUseCard = ({ variant }: { variant: 1 | 2 | 3 }) => {
    switch (variant) {
        case 1: {
            const props: UseCardProps = {
                imgSource: "neural_net.png",
                headerText: "Train Your Reward Model",
                bodyText: `Build your Intellectual Property, your reward model is yours.

                    We’ll manage training, updating and versioning your reward models. `,
            };
            return <UseCard {...props} />;
        }
        case 2: {
            const props: UseCardProps = {
                imgSource: "neural_net.png",
                headerText: "Automate human feedback pipeline",
                bodyText: `We will distribute the feedback tasks to our human-network, so we handle the 80%.

                Your 20% is used to guide the output of our 80%.`,
            };
            return <UseCard {...props} />;
        }
        case 3: {
            const props: UseCardProps = {
                imgSource: "neural_net.png",
                headerText: "Offload training, and running of AI",
                bodyText: `RLHF training is quite sensitive and finnicky.

                    We’ll take care of training, maintaining and running it. You can focus on distributing it to your customers.

                    `,
            };
            return <UseCard {...props} />;
        }
    }
};

export default WhyUseCard;

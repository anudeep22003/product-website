type UseCardProps = {
    imgSource: string;
    headerText: string;
    bodyText: string;
};

const UseCard = ({ bodyText, headerText, imgSource }: UseCardProps) => {
    return (
        <div className="flex flex-col w-[300px] p-4 items-center gap-6 bg-slate-200 rounded-md self-stretch justify-between">
            <img src={imgSource} alt={imgSource} className="w-1/4" />
            <h1 className="w-2/3 text-lg font-semibold text-center underline">
                {headerText}
            </h1>
            <div className="flex p-2 items-center self-stretch bg-slate-100 whitespace-pre-wrap">
                <p className="text-center">{bodyText}</p>
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

We’ll take care of training, maintaining and running it. You can focus on distributing it to your customers.  `,
            };
            return <UseCard {...props} />;
        }
    }
};

export default WhyUseCard;

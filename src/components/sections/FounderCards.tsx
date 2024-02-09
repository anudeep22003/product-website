type FounderCardProps = {
    addionalClasses?: string;
};

const CirclewithImage = ({ imgSource }: { imgSource: string }) => {
    return (
        <div className="flex w-48 h-48 rounded-full bg-slate-200 text-slate-800 font-extrabold">
            <img src={imgSource} alt="anudeep" className="rounded-full" />
        </div>
    );
};

const FounderCardAnudeep = ({ addionalClasses }: FounderCardProps) => {
    return (
        <div
            className={`grid grid-cols-subgrid col-span-10 ${addionalClasses}`}
        >
            <div className="grid row-span-1 -1 col-span-3 bg-slate-50 items-start rounded-md">
                <div className="flex justify-end h-full col-span-3 m-4">
                    <CirclewithImage imgSource="/anudeep.jpeg" />
                </div>
            </div>
            <div className="grid gap-1 col-span-7 rounded-lg bg-slate-200">
                <div className="flex flex-col col-span-7 p-2 m-4">
                    <h1 className="text-4xl p-2">Anudeep Yegireddi</h1>
                    <ul className="list-disc p-[1.5rem] text-lg">
                        <li>
                            Has been a PM and a full stack engineer, studied at
                            Yale, worked at Apple, and founded grant-backed
                            health-tech in Sierra Leone
                        </li>
                        <li>
                            Motivated by RL, specifically RLHF as a method of
                            democratizing human feedback and decentralizing AI
                        </li>
                        <li>
                            Built RAG architecture conversational experiences
                            and text to animation pipelines using a physics
                            engine
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const FounderCardSachin = ({ addionalClasses }: FounderCardProps) => {
    return (
        <div
            className={`grid grid-cols-subgrid col-span-10 ${addionalClasses}`}
        >
            <div className="grid row-span-1 gap-1 col-span-3 bg-slate-50 items-start rounded-md">
                <div className="flex justify-end h-full col-span-3 m-4">
                    <CirclewithImage imgSource="/sachin.jpeg" />
                </div>
            </div>
            <div className="grid gap-1 col-span-7 rounded-lg bg-slate-200">
                <div className="flex flex-col col-span-7 p-2 m-4">
                    <h1 className="text-4xl p-2">Sachin Dharashivkar</h1>
                    <ul className="list-disc p-[1.5rem] text-lg">
                        <li>
                            Held various engineering roles at companies
                            including Samsung, JP Morgan, Unity and AutoDesk.
                            Studied CS with a focus on Reinforcement Learning at
                            UMass.
                        </li>
                        <li>
                            Deeply passionate about RL, worked on robotics
                            applications during his masters.
                        </li>
                        <li>
                            Built instruction tuned AI implementations. Most
                            recently built an Automated penetration testing tool
                            for security applications and an AI enabled case law
                            search engine for India.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { FounderCardSachin, FounderCardAnudeep };

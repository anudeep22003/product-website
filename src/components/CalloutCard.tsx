type CalloutCardProps = {
    content: string;
    index: number;
};

const CircleWithIndex = ({ index }: { index: number }) => {
    return (
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-extrabold">
            {index}
        </div>
    );
};

const CalloutCard = ({ content, index }: CalloutCardProps) => {
    return (
        <div className="grid grid-cols-subgrid col-span-5 mt-4" key={index}>
            <div className="flex col-span-2 col-start-1 justify-end">
                {<CircleWithIndex index={index} />}
            </div>
            <div className="flex col-span-3 col-start-3 text-start">
                {content}
            </div>
        </div>
    );
};

export default CalloutCard;

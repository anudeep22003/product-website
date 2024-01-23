import CalloutCard from "../CalloutCard";

const content = `distribute your tasks to our gig-economy of human annotators, and watch data streaming in days.

monitor human preferences, and resolve inter labeler disagreements

we train your reward model, that is your ip
finetune an open-source llm using your reward model. we handle the complexities of training.

deploy your llm to your customers
your reward model is your core ip, keep updating it and expanding its zone of capabilities. or break it into reward models with a smaller scope, and use them in different contexts.  `;

const Features = () => {
    return (
        <section className="grid grid-cols-12 grid-rows-2 gap-4 m-4 p-4">
            <div className="flex col-span-12 justify-center items-center text-3xl font-bold bg-slate-200 rounded-md drop-shadow-lg">
                How do you do it?
            </div>
            {content.split("\n\n").map((c, idx) => (
                <CalloutCard content={c} index={idx + 1} />
            ))}
        </section>
    );
};

export default Features;

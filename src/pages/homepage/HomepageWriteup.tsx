const content = `distribute your tasks to our gig-economy of human annotators, and watch data streaming in days.

monitor human preferences, and resolve inter labeler disagreements

we train your reward model, that is your ip
finetune an open-source llm using your reward model. we handle the complexities of training.

deploy your llm to your customers
your reward model is your core ip, keep updating it and expanding its zone of capabilities. or break it into reward models with a smaller scope, and use them in different contexts.  `;

const HomepageWriteup = () => {
    console.log(content.split("\n\n"));

    return (
        <div className="flex flex-col gap-8 p-8 m-8 items-center">
            <div className="flex" id="heroSection">
                Add personality, vibe and tone to your chatbot by building your
                own reward model
            </div>
            <div className="flex">
                The hardest part is often gathering human preference training
                data at scale.
            </div>
            <div className="flex">
                Use our 80/20 rule, 80% of humans supplied by us label data for
                you, 20% of humans at your org direct the preferences of the
                80%.
            </div>
            What we offer:
            <div className="flex text-md justify-center gap-8 flex-wrap"></div>
            <div className="flex">
                Your reward model is your core IP, keep updating it and
                expanding its zone of capabilities. Or break it into reward
                models with a smaller scope, and use them in different contexts.
            </div>
        </div>
        // <Markdown>{`${mdText}`}</Markdown>
        // <div className="flex flex-col gap-8 items-center w-[60ch] text-xl p-8 m-16">
        //     <h1>
        //         Empower businesses and individuals to build and maintain their
        //         own reward models
        //     </h1>
        //     <h2>
        //         Reward models enable reinforcement learning with human feedback
        //         in Large Language Models.
        //     </h2>
        //     <p>However, constructing a reward model is challenging.</p>
        //     <ol>
        //         The two major classes of problems are:
        //         <li>
        //             Coordinating preference data over a sufficiently large human
        //             group, and resolving preference ambiguities.
        //         </li>
        //         <li>
        //             Using the reward model to train the LLM is a sensitive
        //             process and prone to reward-hacking and other perturbations.
        //         </li>
        //     </ol>
        //     <ol>
        //         <p>
        //             There are advantages to reward models that outweigh the
        //             challenges:
        //         </p>
        //         <li>You own your reward model, it is your IP</li>
        //         <li>
        //             Reward models are portable, you can reuse the same reward
        //             model even if you switch LLM backends
        //         </li>
        //         <li>
        //             Reward models are an order of magnitude smaller in size, and
        //             thus can be stored and run from your phone
        //         </li>
        //     </ol>
        //     <h2>
        //         We beleive the future of AI is in decentralized reward models.
        //     </h2>
        //     <h3>
        //         Our mission is to build tools that enable RLHF at scale. Our
        //         vision is to align Artificial Intelligence to humans.
        //     </h3>{" "}
        // </div>
    );
};

export default HomepageWriteup;

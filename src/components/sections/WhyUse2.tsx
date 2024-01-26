import WhyUseCard from "../WhyUseCard";

const WhyUse2 = () => {
    return (
        <section
            id="why-use-section"
            className="flex flex-col m-4 gap-8 items-center"
        >
            <div className="flex grow justify-center text-black text-3xl font-bold font-['Inter']">
                Why use Reward AI?
            </div>
            <div className="flex gap-12">
                <WhyUseCard variant={1} />
                <WhyUseCard variant={2} />
                <WhyUseCard variant={3} />
            </div>
        </section>
    );
};

export default WhyUse2;

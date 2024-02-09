import WhyUseCard from "@/components/WhyUseCard";

const WhyUse = () => {
    return (
        <section id="why-use" className="flex flex-col gap-8 p-4 items-center">
            <h1 className="text-lg font-semibold">Why Use Reward AI</h1>
            <div className="flex justify-center items-start gap-8 flex-wrap">
                <WhyUseCard variant={1} />
                <WhyUseCard variant={2} />
                <WhyUseCard variant={3} />
            </div>
        </section>
    );
};

export default WhyUse;

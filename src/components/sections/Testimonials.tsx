const CirclewithImage = ({ imgSource }: { imgSource: string }) => {
    return (
        <div className="flex w-48 h-48 rounded-full bg-slate-200 text-slate-800 font-extrabold">
            <img src={imgSource} alt="anudeep" className="rounded-full" />
        </div>
    );
};

const TestimonialCard = () => {
    return (
        <div className="flex flex-col p-4 gap-2 items-center justify-center bg-slate-100 rounded-xl w-[400px] drop-shadow-lg">
            <div className="flex flex-col items-center justify-center rounded-md">
                <CirclewithImage imgSource="/abhineet.jpeg" />
                <div className="flex flex-col m-2 items-center">
                    <p>Abhineet Kumar</p>
                    <p>CEO, RocketHealth</p>
                </div>
            </div>
            <div className="flex rounded-md w-4/5 justify-center bg-slate-50 p-4 ">
                <p>
                    Allowing our therapists to give feedback into AI is helping
                    us shape the tone and personality of our AI.
                    <br />
                    <br />
                    This process is helping us build confidence that the AI
                    reflects our company’s values.
                </p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex flex-col gap-8 items-center">
            <h1 className="text-4xl font-bold">Testimonials</h1>
            <TestimonialCard />
        </section>
    );
};

export default Testimonials;

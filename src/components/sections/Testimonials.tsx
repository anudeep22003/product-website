const CirclewithImage = ({ imgSource }: { imgSource: string }) => {
    return (
        <div className="flex w-48 h-48 rounded-full bg-slate-200 text-slate-800 font-extrabold">
            <img src={imgSource} alt="anudeep" className="rounded-full" />
        </div>
    );
};

const TestimonialCard = () => {
    return (
        <div className="flex flex-col w-[360px] justify-center items-center gap-8 p-8 rounded-md bg-slate-100">
            <div className="flex flex-col items-center justify-center rounded-md">
                <CirclewithImage imgSource="/abhineet.jpeg" />
                <div className="flex flex-col m-2 items-center">
                    <p>Abhineet Kumar</p>
                    <p>CEO, RocketHealth</p>
                </div>
            </div>
            <div className="flex rounded-md justify-center bg-slate-50 p-4 ">
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
        <section
            id="testimonials"
            className="flex flex-col gap-8 items-center p-4 self-stretch"
        >
            <h1 className="text-3xl font-bold">Testimonials</h1>
            <p className="text-center">
                What people we are working with are saying about us
            </p>
            <TestimonialCard />
        </section>
    );
};

export default Testimonials;

const backers = {
    cruise: "Cruise",
    AtoB: "AtoB",
    apple: "Apple",
    jpMorgan: "JP Morgan",
    autodesk: "Autodesk",
    unity: "Unity",
};
const SocialProof = () => {
    return (
        <section className="grid grid-cols-6 grid-rows-2 mb-8">
            <h1 className="text-xl col-span-6 flex justify-left m-4 p-4 font-semibold">
                Our team is built and backed by people affiliated with
            </h1>

            {Object.entries(backers).map(([, v]) => (
                <div className="flex row-start-2 col-span-1 bg-slate-50 m-1 drop-shadow-sm items-center justify-center text-xl font-bold">
                    {v}
                </div>
            ))}
        </section>
    );
};

export default SocialProof;

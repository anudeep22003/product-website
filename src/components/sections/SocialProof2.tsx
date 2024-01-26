const backers = {
    cruise: "Cruise",
    AtoB: "AtoB",
    apple: "Apple",
    jpMorgan: "JP Morgan",
    autodesk: "Autodesk",
    unity: "Unity",
};

const SocialProof2 = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-2 ">
            <p className="col-span-12 row-start-1 text-2xl font-['Inter'] font-medium">
                Built and backed by people affiliated with
            </p>
            <div className="grid grid-cols-subgrid row-start-2 col-span-12 ">
                {Object.entries(backers).map(([, v]) => (
                    <div className="flex col-span-2 bg-slate-100 m-1 items-center justify-center text-xl font-bold p-4 font-['Inter']">
                        {v}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialProof2;

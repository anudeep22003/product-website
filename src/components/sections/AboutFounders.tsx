import { FounderCardAnudeep, FounderCardSachin } from "./FounderCards";

const AboutFounders = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-2 gap-2 m-2">
            <FounderCardAnudeep />
            <FounderCardSachin addionalClasses="col-start-2" />
        </div>
    );
};

export default AboutFounders;

import { Link } from "react-router-dom";

const Footer2 = () => {
    return (
        <section
            id="footer"
            className="flex flex-col w-full px-8 pt-8 pb-4 gap-8 items-start content-between bg-slate-50 rounded-md"
        >
            <div className="flex flex-col items-start gap-4 self-stretch">
                <p className="text-md">Made with 🖤 by @anudeep</p>
                <p className="text-sm">Copyright 2024, All rights reserved</p>
            </div>
            <div className="flex px-8 justify-end items-start gap-8 self-stretch">
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
            </div>
        </section>
    );
};

export default Footer2;

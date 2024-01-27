import { useNavigate } from "react-router-dom";

const Footer2 = () => {
    const navigate = useNavigate();
    return (
        <section id="footer" className="flex bg-slate-100 p-8 w-full">
            <div className="flex flex-col items-start justify-end w-1/3">
                <p className="text-md">Made with 🖤 by @anudeep</p>
                <p className="text-sm">Copyright 2024, All rights reserved</p>
            </div>
            <div className="flex w-2/3 justify-end items-end ">
                <p className="m-8" onClick={() => navigate("/")}>
                    Home
                </p>
                <p className="m-8" onClick={() => navigate("about")}>
                    Team
                </p>
            </div>
        </section>
    );
};

export default Footer2;

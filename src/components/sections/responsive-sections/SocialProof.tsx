import LogoApple from "@/components/logos/LogoApple";
import LogoAtob from "@/components/logos/LogoAtob";
import LogoAutodesk from "@/components/logos/LogoAutodesk";
import LogoCruise from "@/components/logos/LogoCruise";
import LogoJPMorgan from "@/components/logos/LogoJPMorgan";

const SocialProof = () => {
    return (
        <section id="social-proof" className="flex flex-col items-center gap-4">
            <h2 className="text-lg font-semibold">
                Built and backed by people affiliated with
            </h2>
            <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
                <LogoCruise />
                <LogoAtob />
                <LogoAutodesk />
                <LogoJPMorgan />
                <LogoApple />
            </div>
        </section>
    );
};

export default SocialProof;

import {
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { BsSubstack } from "react-icons/bs";

const LogoWithLink = ({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) => {
    return <a href={href}>{children}</a>;
};

type LinksType = {
    hreftwitter: string;
    hrefli: string;
    hrefgithub?: string;
};

type PersonCardProps = {
    img: string;
    name: string;
    desription: string;
    links: LinksType;
    childrenLogos?: ReactNode;
};

const PersonCardBase = ({
    img,
    desription,
    name,
    links,
    childrenLogos,
}: PersonCardProps) => {
    return (
        <div className="flex flex-col p-4 gap-4 items-center min-w-[320px] max-w-[600px] rounded bg-slate-50 ">
            <img
                src={img}
                alt="person"
                className="rounded-full w-1/2 md:w-[120px]"
                // width={"66px"}
            />
            <h3 className="text-lg font-bold">{name}</h3>
            <div className="flex gap-8">
                <LogoWithLink href={links.hreftwitter}>
                    <TwitterLogoIcon />
                </LogoWithLink>
                {links.hrefgithub && (
                    <LogoWithLink href={links.hrefgithub}>
                        <GitHubLogoIcon />
                    </LogoWithLink>
                )}
                <LogoWithLink href={links.hrefli}>
                    <LinkedInLogoIcon />
                </LogoWithLink>
                {childrenLogos}
            </div>
            <div className="p-4 bg-slate-200 whitespace-pre-wrap  ">
                {desription}
            </div>
        </div>
    );
};

const PersonCard = ({ name }: { name: string }) => {
    switch (name) {
        case "Anudeep":
            return (
                <PersonCardBase
                    img="/anudeep.jpeg"
                    name="Anudeep"
                    links={{
                        hreftwitter: "https://twitter.com/anudeepy_",
                        hrefli: "https://www.linkedin.com/in/anudeepyegireddi/",
                        hrefgithub: "https://github.com/anudeep22003",
                    }}
                    desription={`Has been a PM and a full stack engineer, studied at Yale, worked at Apple, and founded grant-backed health-tech in Sierra Leone

Motivated by RL, specifically RLHF as a method of democratizing human feedback and decentralizing AI

Built RAG architecture conversational experiences and text to animation pipelines using a physics engine
                    `}
                />
            );
        case "Sachin":
            return (
                <PersonCardBase
                    img="/sachin.jpeg"
                    name="Sachin"
                    links={{
                        hreftwitter: "https://twitter.com/sachdh",
                        hrefli: "https://www.linkedin.com/in/sachin-dharashivkar/",
                        hrefgithub: "",
                    }}
                    childrenLogos={
                        <LogoWithLink href="https://sachindharashivkar.substack.com/">
                            <BsSubstack />
                        </LogoWithLink>
                    }
                    desription={`Held various engineering roles at companies including Samsung, JP Morgan, Unity and AutoDesk. Studied CS with a focus on Reinforcement Learning at UMass.

Deeply passionate about RL, worked on robotics applications during his masters.

Built instruction tuned AI implementations. Most recently built an Automated penetration testing tool for security applications and an AI enabled case law search engine for India.
                    `}
                />
            );
        default:
            throw new Error("Invalid name");
    }
};

const TeamSection = () => {
    return (
        <section className="flex flex-wrap justify-center content-start gap-10 items-stretch">
            <PersonCard name="Anudeep" />
            <PersonCard name="Sachin" />
        </section>
    );
};

export default TeamSection;

import Image from "next/image";
import LogoIMG from "../../assets/imgs/Logo.svg";

export const Logo = () => {
    return (
        <>
            <Image src={LogoIMG} width={140} height={28} alt="logo" />
        </>
    );
};

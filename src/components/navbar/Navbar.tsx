import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar max_screen_width">
            <div className="max-w-[131px] w-full aspect-[4/3] relative md:hidden mx-auto">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
        </div>
    );
}

export default Navbar;
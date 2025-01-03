import Link from "next/link";
import Image from "next/image";
import ContentWidth from "./contentWidth";

export default function Navbar() {
    return (
        <nav className="bg-primary sticky top-0 w-full z-50">
            <ContentWidth>
                <Link href="/" title="Home Page">
                    <Image
                        className="invert"
                        src="/logo/tba-cityrail.png"
                        alt="CityRoad Logo"
                        width={100}
                        height={100}
                    />
                </Link>
            </ContentWidth>
        </nav>

    );
}

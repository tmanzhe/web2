import Image from "next/image";
import snoopyImage from "@/public/assets/snoopy.png";

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-[85vh]">
            {/* Two-column layout: one for text and one for the image */}
            <div className="flex items-start space-x-10 ml-10 animate-fadeIn"  style={{ animationDelay: '0.5s' }}>
                {/* Text Column */}
                <div className="flex flex-col mt-28">
                    <h1 className="text-8xl">
                        <span>Hello,</span>
                        <br />
                        <span>I'm Truman</span>
                    </h1>
                    <p className="mt-5 text-lg max-w-lg">
                        A second-year student pursuing a double degree at York for CS and MMGT at Schulich
                    </p>
                </div>

                {/* Image Column */}
                <div className="flex-shrink-0">
                    <Image src={snoopyImage} alt="Snoopy" width={600} height={600} />
                </div>
            </div>
        </main>
    );
}

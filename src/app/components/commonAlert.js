"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CommonAlert() {
    // Array of alert texts
    const alertText = [
        "เว็บไซต์ของเราอยู่ระหว่างการพัฒนา อาจจะมีบางสิ่งที่ยังไม่ทำงาน ขออภัยในความไม่สะดวก",
        "รถไฟฟ้ามหานคร สายสีส้ม คาดว่าจะเปิดให้บริการช่วงปี 2070"
    ];

    // State for the current alert index
    const [currentAlert, setCurrentAlert] = useState(0);

    // Effect to cycle through alerts every 10 seconds
    useEffect(() => {
        if (alertText.length > 1) {
            const interval = setInterval(() => {
                setCurrentAlert((prev) => (prev + 1) % alertText.length);
            }, 10000); // 10 seconds
            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [alertText.length]);

    // Return null if no alert texts exist
    if (alertText.length === 0) {
        return null;
    }

    return (
        <div className="bg-warning text-warning-content p-4 flex flex-col sm:flex-row sm:items-center justify-start sm:justify-start">
            {/* Alert Icon (Left-aligned on mobile, on the left of text for all screen sizes) */}
            <div className="mr-4 mt-0 mb-3 sm:mb-0 sm:mr-4 sm:mr-0 sm:mt-0 order-1 sm:order-none">
                <Image
                    src="/warning.png"
                    alt="Alert Icon"
                    width={24} // Adjusted size for mobile
                    height={24} // Adjusted size for mobile
                    className="w-6 h-6 sm:w-8 sm:h-8" // Smaller on mobile, larger on desktop
                />
            </div>
            {/* Alert Text (Text right of logo on mobile, remains left-aligned) */}
            <div className="flex flex-col items-start sm:items-start sm:text-left order-0 sm:order-none sm:ml-4">
                <div className="mt-1">
                    <h3 className="text-sm sm:text-lg mb-1 text-left sm:text-left"> {/* Left-align on all screens */}
                        ข่าวล่าสุด: {alertText[currentAlert]}{" "}
                        <span className="text-xs sm:text-sm text-gray-700 ml-3">
                            [{currentAlert + 1}/{alertText.length}]
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

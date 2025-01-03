"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const logo = {
    "Buryland Metro": { src: "/logo/buryland_metro.png", width: 50, height: 50 },
    "Airlink": { src: "/logo/airlink.png", width: 50, height: 50 },
    "Intercity": { src: "/logo/intercity.png", width: 50, height: 50 },
    "Meugon Connect": { src: "/logo/meugon.png", width: 50, height: 50 },
    "Bus Services": { src: "/logo/bus.png", width: 50, height: 50 },
    "Boat Services": { src: "/logo/boat.png", width: 50, height: 50 },
    "Road Services": { src: "/logo/road.png", width: 50, height: 50 },
    "Incheon Connect": { src: "/logo/incheon.png", width: 50, height: 50 },
    // Add other operators' logos here as needed
};

const Status = () => {
    const [statusData, setStatusData] = useState([]);

    useEffect(() => {
        fetch(
            "https://script.googleusercontent.com/macros/echo?user_content_key=2Oh0A0E8HZ5B9wr4AFBgAZCu5rN3Ne-7HAxJxb7UbhOglXEQ0GKINyQCvu7oGGWq4-n8Kmpd_D1CmALHKXOeW3FGaVR_jPzAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD62zT1h2z_vD7kvy6NoLDam6SPgXh07FrJjKbCCZsaF8aYFnmyK7fESZ4ZFsvX_qc6fU0xwrd49dUT7c85_zdDcddn2qz7mj9z9Jw9Md8uu&lib=Ml0Escz_lWkFxxC60B0U6jcuLjXA8Iszf"
        )
            .then((response) => response.json())
            .then((data) => {
                // Process data
                const processedData = data.slice(1).reduce((acc, [prefix, route, operator, status]) => {
                    let category = acc.find((cat) => cat.title === operator);
                    if (!category) {
                        category = {
                            title: operator,
                            upvotes: 0,
                            items: [],
                        };
                        acc.push(category);
                    }
                    category.items.push({ label: route, status });
                    return acc;
                }, []);
                setStatusData(processedData);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-base-200">
            {statusData.map((section) => (
                <div key={section.title} className="bg-base-100 p-4 rounded relative pb-8">
                    {/* Title and Logo */}
                    <div className="flex items-center mb-2">
                        {logo[section.title] && (
                            <Image
                                className="mr-2"
                                src={logo[section.title].src}
                                alt={section.title}
                                width={40}
                                height={40}
                            />
                        )}
                        <h3 className="text-sm sm:text-lg font-semibold">{section.title}</h3>
                    </div>
                    {/* Items List */}
                    <ul className="list-none">
                        {section.items.map((item) => (
                            <li key={item.label} className="flex items-center justify-between mb-1">
                                <div className="flex items-center">
                                    <span className="text-xs sm:text-sm">{item.label}</span>
                                </div>
                                <span
                                    className={`px-2 py-1 text-xs sm:text-sm rounded-sm ${
                                        item.status === "Cancelled" || item.status === "Closed"
                                            ? "bg-error text-error-content"
                                            : item.status === "Congestion" || item.status === "Crowded"
                                                ? "bg-warning text-warning-content"
                                                : item.status === "Operation" || item.status === "Not Busy"
                                                    ? "bg-success text-success-content"
                                                    : "bg-info text-info-content"
                                    }`}
                                >
                                    {item.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Status;

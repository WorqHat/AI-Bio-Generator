"use client";

import Image from "next/image";
// import { IconSquareRoundedNumber1Filled, IconSquareRoundedNumber2Filled, IconSquareRoundedNumber3Filled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
// import { IconCopy } from "@tabler/icons-react";

const socialMediaLinks = [
    {
        name: "Instagram",
        icon: "/instagram-icon.svg",
        url: "https://instagram.com/worqhat",
    },
    {
        name: "Discord",
        icon: "/discord-icon.svg",
        url: "https://discord.gg/KHh9mguKBx",
    },
    {
        name: "LinkedIn",
        icon: "/linkedin-icon.svg",
        url: "https://linkedin.com/company/worqhat",
    },
    {
        name: "Twitter",
        icon: "/twitter-icon.svg",
        url: "https://twitter.com/worqhat",
    },
    {
        name: "GitHub",
        icon: "/github-icon.svg",
        url: "https://github.com/worqhat",
    },
];

export default function Home() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <Layout>
            <>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <a
                                aria-label="Worqhat"
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                                href="#pablo"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    className="w-24 h-12"
                                    width={100}
                                    height={50}
                                />
                            </a>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                aria-label="Toggle navigation"
                            ></button>
                        </div>
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                {socialMediaLinks.map((link, index) => (
                                    <li key={index} className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={link.icon}
                                                alt={link.name}
                                                width={20}
                                                height={20}
                                                className="text-lg leading-lg text-white opacity-75"
                                            />
                                            <span className="ml-2">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </Layout>
    );
}

"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
    // {
    //     num: "01",
    //     name: "Cen-Rental",
    //     title: "project 1",
    //     description: "",
    // },
    {
        num: "01",
        projectName: "WiMu - Wisata Kamu",
        title: "project 1",
        description: "website for a travel agency",
        stack: [{name: "Next.js"}, {name: "TailwindCSS"}, {name: "Supabase"}, {name: "Kinde"}, {name: "TypeScript"}],
        image: "/assets/work/wimu.png",
        live: "",
        github: "https://github.com/Danardi-L/WiMu-Wisata-Kamu",
    },
    {
        num: "02",
        projectName: "D2M",
        title: "project 2",
        description: "website for cosplay rental",
        stack: [{name: "PHP"}, {name: "JavaScript"}, {name: "CSS"}, {name: "HTML"}],
        image: "/assets/work/D2M.png",
        live: "",
        github: "https://github.com/Danardi-L/d2m-website"
    },
    {
        num: "03",
        projectName: "DoTaKu",
        title: "project 3",
        description: ["app for money management",<br />,"Dev: Danardi L, Poundra Adiyatma"],
        stack: [{name: "Dart"}, {name: "C++"}],
        image: "/assets/work/DoTaKu.png",
        live: "",
        github: "https://github.com/Danardi-L/DoTaKu"
    },
    {
        num: "04",
        projectName: "Hell Ducks",
        title: "project 4",
        description: "Retro FPS game",
        stack: [{name: "Unity"}, {name: "C#"}],
        image: "/assets/work/HellDucks.png",
        live: "",
        github: ""
    },
    {
        num: "05",
        projectName: "Quiz Sciences Indonesia",
        title: "project 5",
        description: "website for a car rental agency",
        stack: [{name: "Unity"}, {name: "C#"}],
        image: "/assets/work/QSI.png",
        live: "https://drive.google.com/drive/folders/1mvKTMYUtxa-SmmikAR0gjC8VOp907N-5?usp=sharing",
        github: ""
    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // set project to current slide
        setProject(projects[currentIndex]);
    }

    return(
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    {/* carousel */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project name */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize">
                                {project.projectName}
                            </h2>
                            {/* description */}
                            <p className="text-lg text-gray-400 mt-2">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return(
                                        <li key={index} className="text-xl text-blue-500">
                                            {item.name}
                                            {/** add comma if not the last item */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* github button */}
                                <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-blue-500" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>View on GitHub</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                </Link>
                                {/* live button */}
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-500" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>View Live</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    {/* swiper */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return(
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="w-full h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="w-full h-full relative">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderButtons
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-blue-500 hover:bg-blue-500-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';

//about data
const about = {
    title: "About Me",
    description: "I'm a full-stack developer with a passion for web development. I have experience in building web applications using modern technologies. I'm always eager to learn new things and improve my skills.",
    info:[
        {
            fieldName: 'Name',
            fieldValue: 'Danardi Listyono'
        },
        {
            fieldName: 'Phone',
            fieldValue: '+62 851-5944-1960'
        },
        {
            fieldName: 'Nasionality',
            fieldValue: 'Indonesian'
        },
        {
            fieldName: 'Email',
            fieldValue: 'danar.devs@gmail.com'
        },
        {
            fieldName: 'Email',
            fieldValue: 'danar.devs@gmail.com'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English, Bahasa Indonesia'
        }
    ],
};

//experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    jobs: [
        {
            company: "Institut Teknologi Indonesia",
            position: "Assistant Lab",
            date: "2023 - 2024",
        },
        
    ],
};

//education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    items: [
        {
            institution: "Insitut Teknologi Indonesia",
            degree: "Informatics Engineering",
            date: "2022 - present",
        },
    ],
};

//skills data
const skills = {
    title: "Skills",
    skillList: [
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <FaCss3 />,
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
        },
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
        <div className="conatiner mx-auto">
            <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className='min-h-[70vh] w-full'>
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.jobs.map((item, index) => {
                                        return ( 
                                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span>{item.date}</span>
                                            <h3>{item.position}</h3>
                                            <div>
                                                {/* dot */}
                                                <span></span>
                                                <p>{item.company}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                        education
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full">
                        skills
                    </TabsContent>
                    {/* about me */}
                    <TabsContent value="about" className="w-full">
                        about me
                    </TabsContent>
                </div>
            </Tabs>
        </div>    
    </motion.div>
    );
};

export default Resume;
"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaGit} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiRedux, SiStorybook, SiRadixui, SiReacthookform, SiReactquery, SiTypescript, SiSass, SiStyledcomponents, SiSwagger, SiAntdesign, SiAxios} from "react-icons/si"

const experience = {
    title: "My experience",
    items: [
        {
            work: "GEMUNION",
            degree: "Frontend Developer",
            description: 'Developed a tour constructor platform that empowers users to curate\n' +
                'their travel experiences. With an intuitive interface, users can select\n' +
                'their destination, devise a personalized itinerary, and customize\n' +
                'every facet of their journey, including hotel bookings, transport\n' +
                'arrangements, and excursion selections.',
            duration: "2023"
        },
        {
            work: "IT-INCUBATOR",
            degree: "Frontend Developer",
            description: 'Development and maintenance of the company\'s internal applications. As a frontend developer, I actively participated in the development and improvement of user interfaces. My work included creating responsive and performant components, integrating with backend services via API, and optimizing the user experience to achieve maximum efficiency and customer satisfaction.',
            duration: "2022"
        },
        {
            work: "Energy sales",
            degree: "Engineer",
            description: 'Conducting diagnostics of the condition of power equipment, identifying faults, and troubleshooting. Participating in the installation and commissioning of new power equipment, bringing it into operation. Monitoring compliance with technical operation rules, safety instructions. Maintaining passports, logbooks of equipment operation, and reports. Analyzing data on energy resource consumption, identifying areas of energy loss.',
            duration: "2019"
        }],
}

const about = {
    title: "About me",
    description: "Hello! My name is Artsiom. Frontend developer with 2+ years of experience in Single Page Application development using TypeScript, JavaScript, React, Redux, Redux-toolkit, RTK Query.",
    info: [
        {
            fieldName: "name",
            fieldValue: "Artsiom Astrovsky"
        },
        {
            fieldName: "Phone",
            fieldValue: "+375(29) 658-15-65"
        },
        {
            fieldName: "Experience ",
            fieldValue: "2+ Year"
        },
        {
            fieldName: "Email",
            fieldValue: "artsiomastrovsky@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Belarusian"
        },
        {
            fieldName: "Telegram",
            fieldValue: "@ostriakart"
        },
    ]
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "A comprehensive overview of my educational journey, highlighting key qualifications and specialized training in Frontend Development and Engineering. This section encapsulates the foundational and advanced learning experiences that have equipped me with the skills to excel in the tech industry.",
    items: [
        {
            institution: "IT-INCUBATOR",
            degree: "Frontend Developer React JS",
            duration: "2022"
        },
        {
            institution: "Udemy",
            degree: "Web-разработчик JavaScript / CSS / HTML",
            duration: "2020"
        },
        {
            institution: "Belarusian State University of Informatics and Radioelectronics",
            degree: "Engineer",
            duration: "2019"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "html 5"
        },
        {
            icon: <FaCss3/>,
            name: "css 3"
        },
        {
            icon: <FaJs/>,
            name: "javascript"
        },
        {
            icon: <FaReact/>,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css"
        },
        {
            icon: <FaFigma/>,
            name: "figma"
        },
        {
            icon: <FaGit/>,
            name: "git"
        },
        {
            icon: <SiRedux/>,
            name: "redux"
        },
        {
            icon: <SiStorybook/>,
            name: "storybook"
        },
        {
            icon: <SiRadixui/>,
            name: "radix UI"
        },
        {
            icon: <SiReacthookform/>,
            name: "react-hook-form"
        },
        {
            icon: <SiReactquery/>,
            name: "RTK Query"
        },
        {
            icon: <SiTypescript/>,
            name: "typescript"
        },
        {
            icon: <SiSass/>,
            name: "sass"
        },
        {
            icon: <SiStyledcomponents/>,
            name: "Styled Components"
        },
        {
            icon: <SiSwagger/>,
            name: "swagger"
        },
        {
            icon: <SiAntdesign/>,
            name: "ant design"
        },
        {
            icon: <SiAxios/>,
            name: "axios"
        },
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import Link from "next/link";


const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: "easeIn"}
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"

        >
            <div className="container mx-auto">
                <Tabs defaultValue={"About me"} className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value={'experience'}>Experience</TabsTrigger>
                        <TabsTrigger value={'education'}>Education</TabsTrigger>
                        <TabsTrigger value={'skills'}>Skills</TabsTrigger>
                        <TabsTrigger value={'about'}>About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value={'experience'} className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <ul>
                                    <ScrollArea className="h-[400px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">{item.degree}</h3>
                                                    <span className="text-xs max-w-[760px] h-full text-center lg:text-left ">{item.description}</span>
                                                    {item.work === "GEMUNION" && <Link href={'https://triptile.com/'}>triptile.com</Link>}
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0"></span>
                                                        <p className="text-white/50 overflow-hidden text-ellipsis">{item.work}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ScrollArea>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value={'education'} className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ul>
                                    <ScrollArea className="h-[400px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[230px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0"></span>
                                                        <p className="text-white/50 overflow-hidden text-ellipsis">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ScrollArea>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value={'skills'} className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl  font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                                    {skills.skillList.map((item, index) => (
                                        <li key={index} className="flex flex-col items-center hover:text-accent">
                                            <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center ">
                                                <div className="text-6xl ">{item.icon}</div>
                                            </div>
                                            <p className="capitalize mt-2">{item.name}</p> {/* Текст под иконкой */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value={'about'} className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-1">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
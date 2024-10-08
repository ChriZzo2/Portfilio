"use client"

import {motion} from "framer-motion";
import {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsGithub, BsArrowUpRight} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


type projectType = {
    num: string,
    category: string,
    title: string,
    description: string,
    stack: Array<{ name: string }>,
    image: string,
    live: string,
    github: string
}

const projects: projectType[] = [
    {
        num: "01",
        category: "frontend",
        title: "TRIPTILE",
        description: "Разработал платформа-конструктор туров, которая позволяет пользователям создавать свои собственные путешествия. Благодаря интуитивно понятному интерфейсу пользователи могут выбрать свое направление, разработать персонализированный маршрут и настроить каждый аспект своего путешествия, включая бронирование отелей, организацию транспорта и выбор экскурсий.",
        stack: [{name: "Next.js"}, {name: "Styled-components"}, {name: "Emotion"},{name: "Node.js"} ],
        image: "/assets/work/work3.png",
        live: "https://triptile.com/",
        github: ""
    },
    {
        num: "02",
        category: "frontend",
        title: "Booky",
        description: "Платформа для бронирования номеров в отеле, разработанная с использованием Next.js и Tailwind CSS для создания быстрого и адаптивного интерфейса. Разработал функционал бронирования и интегрировал Strapi для управления контентом и бэкенд-логикой.",
        stack: [{name: "Next.js"}, {name: "Tailwind"}, {name: "Strapi"},{name: "Kinde"} ],
        image: "/assets/work/work1.png",
        live: "https://booking-ruby-nine.vercel.app/",
        github: "https://github.com/ChriZzo2/booking"
    },
    {
        num: "03",
        category: "frontend",
        title: "CheckFlow",
        description: "Проект предоставляет удобный интерфейс для создания, редактирования, удаления и отображения задач и списков дел.",
        stack: [{name: "React.js"}, {name: "Material UI"}, {name: "RTK"}, {name: "Axios"}],
        image: "/assets/work/work2.png",
        live: "https://checkflow-weld.vercel.app/login",
        github: "https://github.com/ChriZzo2/CheckFlow"
    }
]
const Work = () => {


    const [project, setProject] = useState<projectType>(projects[0])

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl: justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div
                                className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Project live</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}

                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} alt={''} fill className="object-contain "/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconsStyles=""

                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
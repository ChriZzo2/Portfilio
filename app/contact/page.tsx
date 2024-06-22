"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectLabel,
    SelectGroup,
    SelectValue
} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import {motion} from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+375(29) 658-15-65"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "artsiomastrovsky@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Belarus, Minsk"
    },
]


const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: "easeIn"}
            }}
            className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col  gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let`s work</h3>
                            <p className="text-white/60">Interested in collaborating or have a project in mind? Let`s
                                create something exceptional together. Reach out, and let`s start the conversation.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname"/>
                                <Input type="lastname" placeholder="Lastname"/>
                                <Input type="email" placeholder="Email"/>
                                <Input type="phone" placeholder="Phone number"/>
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a value"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a services</SelectLabel>
                                        <SelectItem value="est">Responsive Website Design</SelectItem>
                                        <SelectItem value="ctg">UI/UX Design Implementation</SelectItem>
                                        <SelectItem value="qwe">Web Performance Optimization</SelectItem>
                                        <SelectItem value="rty">Cross-Browser Compatibility</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[280px]" placeholder="Type your message here"/>
                            <Button size="sm" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none  mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div
                                            className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
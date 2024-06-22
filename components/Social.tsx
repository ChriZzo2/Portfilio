import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTelegram, FaCode} from "react-icons/fa"

type Props = {
    containerStyles: string
    iconStyles: string
}

const social = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaTelegram/>, path: ""},
    {icon: <FaCode/>, path: ""},
]

const Social = ({containerStyles, iconStyles}: Props) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
                )
            })}
        </div>
    );
};

export default Social;
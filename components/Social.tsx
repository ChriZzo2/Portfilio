import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTelegram, FaCode} from "react-icons/fa"

type Props = {
    containerStyles: string
    iconStyles: string
}

const social = [
    {icon: <FaGithub/>, path: "https://github.com/chrizzo2"},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaTelegram/>, path: "https://t.me/ostriakart"},
    {icon: <FaCode/>, path: "https://www.codewars.com/users/ChriZzo2"},
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
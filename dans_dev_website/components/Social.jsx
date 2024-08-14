import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Danardi-L"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/danardi-listyono/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/danardi_l/"},
];

const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
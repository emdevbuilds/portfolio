import { Mail } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const socialLinks = [
  {
    icon: <FaGithub size={15} />,
    label: "GitHub",
    value: "github.com/emdevbuilds",
    href: "https://github.com/emdevbuilds",
  },
  {
    icon: <FaLinkedin size={15} />,
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuel-i-chukwu",
    href: "https://linkedin.com/in/emmanuel-i-chukwu",
  },
  {
    icon: <Mail size={15} />,
    label: "Email",
    value: "emmanuel.devpro@gmail.com",
    href: "mailto:emmanuel.devpro@gmail.com",
  },
];

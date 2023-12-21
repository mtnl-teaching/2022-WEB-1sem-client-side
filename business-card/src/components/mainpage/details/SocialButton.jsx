import styles from "./SocialButton.module.css";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const SocialButton = ({ icon, link }) => {
  const Icon = allIcons[icon];

  return (
    <>
      <a href={link} target="_blank">
        <Icon className={styles.icon} />
      </a>
    </>
  );
};

const allIcons = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};

export default SocialButton;

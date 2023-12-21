import styles from "./DetailsFooter.module.css";
import SocialButton from "./SocialButton";

const DetailsFooter = () => {
  const data = [
    {
      icon: "twitter",
      link: "https://www.twitter.com",
    },
    {
      icon: "facebook",
      link: "https://www.facebook.com",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com",
    },
    {
      icon: "github",
      link: "https://www.github.com",
    },
  ];

  return (
    <div className={styles.footer}>
      {data.map((item) => {
        return <SocialButton icon={item.icon} link={item.link} />;
      })}
    </div>
  );
};

export default DetailsFooter;

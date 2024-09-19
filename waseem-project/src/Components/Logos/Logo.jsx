import styles from "./Logo.module.css";

const Logo = () => {
    console.log(styles);
    return (
        <div className={`${styles.log} container`}>
            <img className={`${styles.reddit} container`} src="./Images/Reddit.png" alt="Reddit" />
            <img className={`${styles.linkedin} container`} src="./Images/LinkedIn.png" alt="Reddit" />
            <img className={`${styles.insta} container`} src="./Images/Instagram.png" alt="Reddit" />
        </div>
    );
};

export default Logo;
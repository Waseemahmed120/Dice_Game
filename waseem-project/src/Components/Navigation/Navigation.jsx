import styles from "./Navigation.module.css";

const Navigation = () => {
  console.log(styles);
  return (
    <nav className={`${styles.navigation} ${styles.logo} container`}>
        <div >
            <img src="/Images/Frame 10.png" alt="logo1" />
        </div>

        <ul className={`${styles.list} `}>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contacts</li>
        </ul>
    </nav>
  );
};

export default Navigation
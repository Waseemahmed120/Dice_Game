
import styles from './Images.module.css';  // Correct path


const Images = () => {

console.log(styles);
return(
    <div className={`${styles.photo} container`}>
        <img src="./Images/Frame 8.png" alt="logo2" />
    </div>
);
};

export default Images;
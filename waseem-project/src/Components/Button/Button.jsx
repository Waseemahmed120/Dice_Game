import styles from "./Button.module.css"

const Button = () => {
    console.log(styles);
  return (
    <div className="container">
        <button className={styles.btn}>Get Started</button>
    </div>
  )
}
export default Button;


// import styles from "./Button.module.css";

// const Button = () => {
//   console.log(styles); // This will log the CSS module classes to the console.

//   return (
//     <div className="container"> {/* Assuming 'container' is a global class */}
//       <button className={styles.btn}>Get Started</button> {/* Apply the CSS module class here */}
//     </div>
//   );
// }

// export default Button;

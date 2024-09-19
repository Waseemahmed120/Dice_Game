
import styles from "./Ghutt.module.css";

const Ghutt = (props) => {
  const {isOutline, icon, text} = props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      
      {icon}
      {text}
      </button>
  );
};

export default Ghutt;
import Ghutt from "../Ghutt/Ghutt";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("something");
  const [email, setEmail] = useState("waseemgabol247@gmail.com");
  const [text, setText] = useState("Ok right");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  
  return (
    <section className={styles.container}>
        <div className={styles.container}>
          <div className={styles.top_btn} >
          <Ghutt text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Ghutt text="VIA CALL" icon={<MdLocalPhone fontSize="24px" />} />
          </div>
          <Ghutt 
          isOutline={true}
          text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

          <form onSubmit={onSubmit}>
            <div className={styles.control_form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>

            <div className={styles.control_form}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            </div>

            <div className={styles.control_form}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}/>
            </div>

            <div style={{display: "flex", justifyContent: "end"}}>
            <Ghutt text="SUBMIT"  />
            </div>
            <div>
              {name + " " + email + " " + text + " " }
            </div>
          </form>

        </div>
    </section>
  );
};

export default ContactForm;
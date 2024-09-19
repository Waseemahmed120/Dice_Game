import styles from "./ContactHeader.module.css"

const ContactHeader = () => {
    console.log(styles);
  return (
    <div className={`container ${styles.change} `}>
      <h1>Want A Professional Website.<br/>Your'e At Right Place.</h1>  
    <p>
        "Design Your Online Destiny! Visit, Order <br/>And Watch Your Dream Website Unfold. We Turn Ideas Into <br/>
     Pixels - Your Story, Our Code."
     </p>
     
    </div>
    
  )
}

export default ContactHeader;
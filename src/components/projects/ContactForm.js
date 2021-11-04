import Card from "../ui/Card";
import classes from "./ContactForm.module.css";
import { useRef } from 'react';

function ContactForm() {
    const titleInputRef = useRef();
    const emailInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault(); 

        const enteredTitle = titleInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const contactData = {
            title: enteredTitle,
            email: enteredEmail,
            description: enteredDescription,
        };

        console.log(contactData);
    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Message Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Message</label>
          <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;

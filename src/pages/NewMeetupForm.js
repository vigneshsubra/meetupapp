import { useRef } from 'react';
import BaseCard from '../components/ui/BaseCard';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription
    }

    console.log(enteredAddress);

    props.onAddMeetup(meetupData);
  }

  return (
    <BaseCard>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='img'>Image URL</label>
          <input type='url' required id='img' ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='desc'>Description</label>
          <textarea required id='desc' rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meet Up</button>
        </div>
      </form>
    </BaseCard>
  );
}

export default NewMeetupForm;
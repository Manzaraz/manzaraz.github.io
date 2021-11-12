import { useForm } from "../../hooks/useForm";
import Loader from "../loader/Loader";
import Message from "../message/Message";
import { useContext } from "react";
import { ThemeContext } from "../../helpers/context";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚÜúü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComents = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'Field "Name" is required!.';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'the "name" field only accepts letters and blanks';
  }
  if (!form.email.trim()) {
    errors.email = 'Field "Email" is required!.';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'the "emal" field must be a valid email';
  }
  if (!form.subject.trim()) {
    errors.subject = 'Field "Subject" is required!.';
  }
  if (!form.comments.trim()) {
    errors.comments = 'Field "Message" is required!.';
  } else if (!regexComents.test(form.comments.trim())) {
    errors.comments = "message field must contain between 1 and 255 characters";
  }

  return errors;
};

let styles = {
  width: "70%",
  fontWeight: "300",
  fontSize: ".8em",
  color: "#dc3545",
  lineHeight: "1em",
};

const ContactForm = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          autocomplete="off"
          type="text"
          name="name"
          placeholder="Your name..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
          style={{
            backgroundColor: darkMode ? "#27252750" : "#f5ede350",
            color: darkMode && "#F5EDE3",
          }}
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
          style={{
            backgroundColor: darkMode ? "#27252750" : "#f5ede350",
            color: darkMode && "#F5EDE3",
          }}
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          autoComplete="off"
          type="text"
          name="subject"
          placeholder="Subject..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
          style={{
            backgroundColor: darkMode ? "#27252750" : "#f5ede350",
            color: darkMode && "#F5EDE3",
          }}
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          rows="5"
          placeholder="Your Message..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
          style={{
            backgroundColor: darkMode ? "#27252750" : "#f5ede350",
            color: darkMode && "#F5EDE3",
          }}
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Submit" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="The message has been sent" bgColor="#198754" />
      )}
    </>
  );
};

export default ContactForm;

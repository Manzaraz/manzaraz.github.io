import { useForm } from "../../hooks/useForm";

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
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
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
          type="text"
          name="name"
          placeholder="Your name..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
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
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactForm;

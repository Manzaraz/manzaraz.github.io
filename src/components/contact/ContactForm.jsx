import { useForm } from "../../hooks/useForm";

const initialForm = {};

const validationsForm = (form) => {};

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
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        <textarea
          name="comments"
          rows="5"
          placeholder="Your Message..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactForm;

import { useForm } from "../../hooks/useForm";
import Loader from "../loader/Loader";
import Message from "../message/Message";
import { useContext } from "react";
import { ThemeContext } from "../../helpers/context";
import { useTranslation } from "react-i18next";

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
  let regexComents = /^.{1,280}$/;

  if (!form.name.trim()) {
    errors.name = "c-err-name1";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "c-err-name2";
  }
  if (!form.email.trim()) {
    errors.email = "c-err-email1";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "c-err-email2";
  }
  if (!form.subject.trim()) {
    errors.subject = "c-err-subject";
  }
  if (!form.comments.trim()) {
    errors.comments = "c-err-message1";
  } else if (!regexComents.test(form.comments.trim())) {
    errors.comments = "c-err-message2";
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
  const [t] = useTranslation("global");
  const [{ isDark }] = useContext(ThemeContext);

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
          autoComplete="off"
          type="text"
          name="name"
          placeholder={t("contact.c-name")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
          style={{
            backgroundColor: isDark ? "#27252750" : "#f5ede350",
            color: isDark && "#F5EDE3",
          }}
        />
        {errors.name && <p style={styles}>{t(`contact.${errors.name}`)}</p>}
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder={t("contact.c-email")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
          style={{
            backgroundColor: isDark ? "#27252750" : "#f5ede350",
            color: isDark && "#F5EDE3",
          }}
        />
        {errors.email && <p style={styles}>{t(`contact.${errors.email}`)}</p>}
        <input
          autoComplete="off"
          type="text"
          name="subject"
          placeholder={t("contact.c-subject")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
          style={{
            backgroundColor: isDark ? "#27252750" : "#f5ede350",
            color: isDark && "#F5EDE3",
          }}
        />
        {errors.subject && (
          <p style={styles}>{t(`contact.${errors.subject}`)}</p>
        )}
        <textarea
          name="comments"
          rows="5"
          placeholder={t("contact.c-message")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
          style={{
            backgroundColor: isDark ? "#27252750" : "#f5ede350",
            color: isDark && "#F5EDE3",
          }}
        ></textarea>
        {errors.comments && (
          <p style={styles}>{t(`contact.${errors.comments}`)}</p>
        )}
        <input type="submit" value={t("contact.c-submit")} />
      </form>
      {loading && <Loader />}
      {response && <Message msg={t("contact.c-success")} bgColor="#198754" />}
    </>
  );
};

export default ContactForm;

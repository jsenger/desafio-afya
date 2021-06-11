import { ContactContainer } from "./styles";

const Contact: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <section className="contact-content">
        <div className="contact-img">
          <img src="./img/contact-us.svg" alt="" />
        </div>
        <form>
          <h3>Fale conosco</h3>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" id="message" />
        </form>
      </section>
    </ContactContainer>
  );
};

export default Contact;

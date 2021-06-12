import { ContactContainer } from "./styles";

const Contact: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <form>
        <h3>Fale conosco</h3>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="message">Mensagem:</label>
        <textarea name="message" id="message" required />
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-img">
        <img src="./img/contact-us.svg" alt="" />
      </div>
    </ContactContainer>
  );
};

export default Contact;

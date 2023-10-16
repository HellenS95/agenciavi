
const ContatoForm = () => {
  return (
    <section className="form-contato">
      <div>
        <h1>Entre em Contato</h1>
        <p>
        Se você tiver alguma dúvida ou comentário, por favor, preencha o
        formulário abaixo e entraremos em contato em breve.
        </p>
        </div>

      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="mensagem">Mensagem:</label><br />
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          cols="50"
          required
        ></textarea>

        <button>Enviar </button>
      </form>
    </section>
  );
};

export default ContatoForm;

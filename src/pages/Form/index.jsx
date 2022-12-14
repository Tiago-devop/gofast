import { useState } from "react";
import { Title, FormStyled, Wrapper } from "./Form.style";
import { cnpj } from "./util/cnpj";

const Form = () => {
  const [valor, setValores] = useState({ CNPJ__c: "" });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setValores({
      ...valor,
      [name]: value,
    });
  };

  return (
    <>
      <Wrapper>
        <Title>Formulário para Entrar em Contato</Title>
        {/* 
          NOTA: Adicione o seguinte elemento <META> à sua página <HEAD>.  Se      
          necessário, modifique o parâmetro charset para especificar o conjunto   
          de caracteres de sua página HTML.
        */}

        {/* NOTA: Adicione o elemento <FORM> a seguir à sua página. */}
        {/* <META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8" /> */}
        <FormStyled
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
        >
          <input type="hidden" name="oid" value="00D3t000005epUW" />
          <input
            type="hidden"
            name="retURL"
            value="https://gofast.vercel.app/"
          />

          {/*
            NOTA: Estes campos são elementos de depuração opcionais. Remova o       
            comentário dessas linhas se quiser testar no modo de depuração.         
            <input type="hidden" name="debug" value=1>
            <input type="hidden" name="debugEmail" value="gofastautosoul@gmailcom">
          */}

          <label htmlFor="first_name">Primeiro Nome</label>
          <input
            id="first_name"
            maxLength="40"
            name="first_name"
            size="20"
            type="text"
            required
          />

          <label htmlFor="last_name">Sobrenome</label>
          <input
            id="last_name"
            maxLength="80"
            name="last_name"
            size="20"
            type="text"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            maxLength="80"
            name="email"
            size="20"
            type="text"
            required
          />

          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            maxLength="40"
            name="company"
            size="20"
            type="text"
          />

          <label htmlFor="regiao">Região</label>
          <input
            id="regiao"
            maxLength="20"
            name="regiao__c"
            size="20"
            type="text"
            required
          />

          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            name="CNPJ__c"
            minLength="18"
            type="text"
            value={cnpj(valor.CNPJ__c)}
            onChange={inputChange}
            required
          />

          <input type="submit" name="submit" value="Enviar" />
        </FormStyled>
      </Wrapper>
    </>
  );
};

export default Form;

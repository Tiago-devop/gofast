import { Title } from "./Form.style";

const Form = () => (
  <>
    <Title>FORM</Title>
    {/* <!--  ----------------------------------------------------------------------  -->
<!--  NOTA: Adicione o seguinte elemento <META> à sua página <HEAD>.  Se      -->
<!--  necessário, modifique o parâmetro charset para especificar o conjunto   -->
<!--  de caracteres de sua página HTML.                                       -->
<!--  ----------------------------------------------------------------------  --> */}



{/* <!--  ----------------------------------------------------------------------  -->
<!--  NOTA: Adicione o elemento <FORM> a seguir à sua página.                 -->
<!--  ----------------------------------------------------------------------  --> */}

<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

<input type="hidden" name="oid" value="00D3t000005epUW" />
<input type="hidden" name="retURL" value="http://" />

{/* <!--  ----------------------------------------------------------------------  -->
<!--  NOTA: Estes campos são elementos de depuração opcionais. Remova o       -->
<!--  comentário dessas linhas se quiser testar no modo de depuração.         -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="gofastautosoul@gmail.com">                                       -->
<!--  ----------------------------------------------------------------------  --> */}

<label for="first_name">Primeiro Nome</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" />

<label for="last_name">Sobrenome</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />

<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" />

<label for="company">Empresa</label><input  id="company" maxlength="40" name="company" size="20" type="text" /> 

<label for="regiao">Região</label><input  id="regiao" maxlength="20" name="regiao__c" size="20" type="text" />

<input type="submit" name="submit" />

</form>

  </>
);

export default Form;

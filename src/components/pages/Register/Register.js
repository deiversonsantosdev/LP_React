import React from 'react';
import './Register';
import '../../../App'
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import CookieConsent from "react-cookie-consent"


/* Validação feita com yup */
const schema = Yup.object().shape({
  name: Yup.string("*Necessário preencher o campo nome!").required("*Preenchimento obrigatório!")
    .min(3, "Erro: O nome deve ter no mínimo 3 caracteres!")
    .required("*Preenchimento obrigatório!"),

  cpf: Yup.string("Erro: Necessário preencher o campo CPF!")
    .required('*Preenchimento obrigatório!')
    .min(11, "O CPF deve ter no mínimo 11 caracteres!")
    .required('*Preenchimento obrigatório!')
    .max(14, "Erro: O CPF deve ter no máximo 14 caracteres!")
})


export default function Register() {


  //RECEBER OS DADOS DO FORMULÁRIO
  /*   const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
   */
  //Enviar os dados para o back-end
  /*  const enviar = async e => {
     e.preventDefault();
  */
  /*     if (!(await validate())) return;
   */
  /* const saveDataForm = true;

  if (saveDataForm) {
    setStatus({
      type: 'success',
      mensagem: "Cadastro realizado com sucesso!"
    });
    setUser({
      name: '',
      email: '',
      password: ''
    });
  } else {
    setStatus({
      type: 'error',
      mensagem: "Erro: Usuário não cadastrado com sucesso!"
    });
  }
} */


  /* API VIACEP CORREIOS */
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, ''); /* REMOVEDOR DE CARACTERES = substitui por vazio, qualquer caractere diferente entre os números de 0-9 */

    if (cep?.length !== 8) {
      return;
    }


    /* utilizei a API fetch para reproduzir as funcionalidades do axios  */
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }


  /* COR DE FUNDO DA PÁGINA BASEADO NAS CORES DA TELA */
  document.body.style.backgroundColor = 'hsl(75, 64%, 62%)';


  /* Armazenar localStorage */
  function enviar() {
    localStorage.setItem("name", document.querySelector("#name").value);
    localStorage.setItem("nasc", document.querySelector("#nasc").value);
    localStorage.setItem("cpf", document.querySelector("#cpf").value);
    localStorage.setItem("cep", document.querySelector("#cep").value);
    localStorage.setItem("logradouro", document.querySelector("#logradouro").value);
    localStorage.setItem("numero", document.querySelector("#numero").value);
    localStorage.setItem("complemento", document.querySelector("#complemento").value);
    localStorage.setItem("bairro", document.querySelector("#bairro").value);
    localStorage.setItem("cidade", document.querySelector("#cidade").value);
    localStorage.setItem("estado", document.querySelector("#estado").value);

  }

  return (

    <div className='background_register'>
      <div className="formulario">


        {/* utilizei  Formik para facilitar o uso de formulários em react*/}
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          validateOnMount
          initialValues={{
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            name: '',
            cpf: '',
          }}
          render={({ setFieldValue, errors }) => (


            <Form onSubmit={enviar} >
              <label className='register_cadastro'>REGISTRE-SE</label>
              <br></br>

              <label htmlFor="name" className='h1register'>Nome</label>
              <Field id="name" className='name_cadastro borda_barra' name="name" type="text" />
              <br></br>
              {errors.name && (<small>{errors.name}</small>)}
              <br></br>  <br></br>

              <label htmlFor="nasc" className='h1register'>Data de Nascimento</label>
              <Field id="nasc" className='name_date borda_barra' name="nasc" type="date" />

              <br></br>  <br></br>

              <label htmlFor="cpf" className='h1register'>CPF</label>
              <Field id="cpf" className=' borda_barra' name="cpf" type="text" />
              <br></br>
              {errors.cpf && (<small>{errors.cpf}</small>)}

              <br></br>  <br></br>

              <label htmlFor="cep" className='h1register'>CEP</label>
              <Field id="cep" className=' borda_barra' name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
              <br></br>
              <small>*Utilize apenas números ex: 01001000 </small>
              <br></br>  <br></br>

              <label htmlFor="logradouro" className='h1register'>Logradouro</label>
              <Field id="logradouro" className='name_cep borda_barra' name="logradouro" type="text" />
              <br></br>  <br></br>

              <label htmlFor="numero" className='h1register'>Número</label>
              <Field id="numero" className=' borda_barra' name="numero" type="text" />
              <br></br>  <br></br>

              <label htmlFor="complemento" className='h1register'>Complemento</label>
              <Field id="complemento" className='name_complemento borda_barra' name="complemento" type="text" />
              <br></br>  <br></br>

              <label htmlFor="bairro" className='h1register'>Bairro</label>
              <Field id="bairro" className=' borda_barra' name="bairro" type="text" />
              <br></br>  <br></br>

              <label htmlFor="cidade" className='h1register'>Cidade</label>
              <Field id="cidade" className=' borda_barra' name="cidade" type="text" />
              <br></br>  <br></br>

              <label htmlFor="estado" className='h1register'>Estado</label>
              <Field id="estado" className='name_estado borda_barra' name="uf" type="text" />
              <br></br>  <br></br>

              <button onClick="enviar()" id='enviar' className="btn_cadastro" type='text'>Enviar</button>

              <br></br> <br></br>
              {/*  {status.type === 'success' ? <p style={{ color: "hsl(75, 64%, 62%)" }}>{status.mensagem}</p> : ""}
              {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
 */}
              <CookieConsent
                debug={true}
                buttonText={"Eu Aceito"}
                expires={365} /* quantidde de dias para expiração de um cookie */
              > Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa <a href="/register">Política de Privacidade</a> e, ao continuar navegando, você concorda com estas condições.
              </CookieConsent>
            </Form>

          )}
        />
      </div>
    </div>

  );

}

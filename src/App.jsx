import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() { 
  const nome = 'kenedy';
  function retornaNome(){
    return nome;
  }

  const pessoa = {
    nome: 'maria',
  }

  let estaDeDia = true;

  return (
    // O conteúdo deve estar dentro de tags como div, header, footer, ou tags mesmo que vazias
    <> 

      <Perfil nome="kenedy" endereco="https://github.com/Taironius.png"/>
      <Formulario />
      <h1>ola, {nome}</h1>
      <h2>{retornaNome()}</h2>
      <h3>{pessoa.nome}</h3>
      {estaDeDia ? 'Bom dia': 'Boa tarde'}
      {/* abaixo ira retornar o bom dia somente se a variavel estaDeDia for true */}
      <h4>{estaDeDia && 'Bom dia'}</h4>
    </>
    
  )
}

export default App

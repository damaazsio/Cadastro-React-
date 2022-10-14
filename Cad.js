import styles from './Editor.module.css'
import {useState} from  'react'
function Cad (){
    function CadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(`Usuario ${name} foi cadstrado com a senha : ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
            <h1 className = {styles.cadastro}>Meu Cadastro :</h1>
            <form className = {styles.cadastro} onSubmit={CadastrarUsuario}>
            <div>
                <input type='text'id = 'nome' name='nome' placeholder="DIGITE SEU NOME" value={name} onChange = {(e) => setName (e.target.value)}/>
            </div>
            <div>
                <input type ='password'id='password' name ='password' placeholder = 'DIGITE SUA SENHA'  value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type = 'submit' value= 'Cadastrar'/>
            </div>
            </form>
        </div>
    )
}


export default Cad 
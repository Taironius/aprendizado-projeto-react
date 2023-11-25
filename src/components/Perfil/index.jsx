import './perfil.css';

const Perfil = (props) => {
    const usuario = {
        nome: 'kenedy jardim',
        avatar: 'https://github.com/Taironius.png'
    }

    return (
        <div>
            {JSON.stringify(props)}
            <img className="perfil-avatar" src={usuario.avatar} alt="" />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;
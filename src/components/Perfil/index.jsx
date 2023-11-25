import './perfil.css';

const Perfil = (props) => {
    const {nome, endereco} = props;

    return (
        <div>
            {JSON.stringify(props)}
            <img className="perfil-avatar" src={endereco} alt="" />
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

export default Perfil;
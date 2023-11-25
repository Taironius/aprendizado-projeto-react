import { useEffect, useState } from "react"

const ReposList = () => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);


    useEffect(() => {
        fetch('https://api.github.com/users/Taironius/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
            
        })
    },[])


    return (

        <>
            {estaCarregando && (
                <h1>Carregando</h1>
            )}
            
            {/* depois do arrow => abaixo tem parenteses ao inves de chaves pois tendo parenteses, nao é necessario oo return */}
            <ul>
                {repos.map(repositorio => (  
                    <li key={repositorio.id}>
                        <b>Nome:</b> {repositorio.name}
                        <b>Linguagem:</b> {repositorio.language}
                        <a target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                    </li>
                ))}
                <li>Repositorio</li>
            </ul>
        </>
        
    )
}

export default ReposList;
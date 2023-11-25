import { useState } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    return (
        <form>
            <input type="number" placeholder="Nota da Materia A" onChange={evento => setMateriaA(evento.target.value)} />
            <input type="number" placeholder="Nota da Materia B" onChange={evento => setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota da Materia C" onChange={evento => setMateriaC(evento.target.value)}/>
            <p>O aluno foi aprovado</p>
        </form>
    )
}

export default Formulario;
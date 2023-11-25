import { useState } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return (
                <p>Você foi aprovado</p>
            )
        }else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="number" placeholder="Nota da Materia A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota da Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota da Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {/* <p>O aluno foi aprovado</p> */}
            {renderizaResultado()}
            {materiaA}
            {materiaB}
            {materiaC}
        </form>
    )
}

export default Formulario;
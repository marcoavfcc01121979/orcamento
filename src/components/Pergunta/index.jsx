import React, { useState } from 'react'
import Error from '../Error';

import PropTypes from 'prop-types';


const Pergunta = ({ setOrcamento, setRestante, setMostrapergunta }) => {
    // definir estado
    const [ quantidade, setQuantidade ] = useState(0);
    const [error, setError] = useState(false);

    const definirOrcamento = ({target}) => {
        setQuantidade(parseInt(target.value, 10));
    }

    const guardarOrcamento = e => {
        e.preventDefault();

        // validar
        if(quantidade < 1 || isNaN(quantidade)) {
            setError(true);
            return;
        }

        setError(false);
        setOrcamento(quantidade)
        setRestante(quantidade)
        setMostrapergunta(false)
    }

    return(
        <>
            <h2>Coloca o seu orçamento</h2>

            {error ? <Error mensagem="Precisa coloca um valor válido" /> : null}

            <form onSubmit={guardarOrcamento}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="coloca o seu orçamento"
                    onChange={definirOrcamento}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir orçamento"
                />
            </form>
        </>
    )
}

Pergunta.propTypes = {
    setOrcamento: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrapergunta: PropTypes.func.isRequired,
}

export default Pergunta;
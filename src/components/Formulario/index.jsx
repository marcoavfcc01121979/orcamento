import React, { useState } from 'react'

import Error from '../Error';
import shordid from 'shortid';

import PropTypes from 'prop-types';


const Formulario = ({ setGasto, setCriargasto }) => {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [error, setError] = useState(false)

    const guardarGasto = (e) => {
        e.preventDefault();

        // validação
        if(quantidade < 1 || isNaN(quantidade) || nome.trim() === ''){
            setError(true)
            return;
        }
        setError(false)

        // construir o gasto
        const gasto = {
            quantidade,
            nome,
            id: shordid.generate()
        }


        // passar o gasto para o componente principal
        setGasto(gasto)
        setCriargasto(true)

        // resetar formulario
        setNome('')
        setQuantidade(0)
    }

    return(
        <>
            <form onSubmit={guardarGasto}>
                <h2>Guarda todos os gastos aqui</h2>

                {error ? <Error mensagem="Ambos os campos são obrigátorios orçamento incorretos." /> : null}

                <div className="campo">
                    <label htmlFor="">Nome do gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nome}
                        onChange={({target}) => setNome(target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="">Quantidade gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={quantidade}
                        onChange={({target}) => setQuantidade(parseInt(target.value, 10))}
                    />
                </div>

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Guardar gasto"
                />
            </form>
        </>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCriargasto: PropTypes.func.isRequired,
}

export default Formulario;
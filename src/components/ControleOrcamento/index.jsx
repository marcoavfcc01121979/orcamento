import React from 'react'
import { revisarOrcamento } from '../../Helpers';

import PropTypes from 'prop-types';


const ControleOrcamento = ({ orcamento, restante }) => {
    return(
        <>
            <div className="alert alert-primary">
                Orçamento: R$ {orcamento}
            </div>
            <div className={revisarOrcamento(orcamento, restante)}>
                Restante: R$ {restante}
            </div>
        </>
    )
}

ControleOrcamento.propTypes = {
    orcamento: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControleOrcamento;
import React from 'react'
import Gasto from '../Gasto';

import PropTypes from 'prop-types';

const MostraGasto = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Gastos Realizados</h2>
        {gastos.map((gasto) => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
)

MostraGasto.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default MostraGasto;
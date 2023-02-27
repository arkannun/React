import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/primeiro'
import Parametro from './components/parametro'
import Filhos from './components/filhos'

import './index.css'

ReactDOM.render(
    <>
        <Primeiro />
        <Parametro nome="Maks" idade="42" />
        <Filhos>
            <ul>
                <li className="1">Maks</li>
                <li className="2">Jaqueline</li>
                <li className="3">Debora</li>
                <li className="4">Rhyan</li>
                <li className="5">Papa</li>
            </ul>
        </Filhos>
    </>

    , document.getElementById('root')
)
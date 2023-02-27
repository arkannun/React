import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/primeiro'
import Parametro from './components/parametro'

import './index.css'

ReactDOM.render(
    <React.Fragment>
        <Primeiro/>
        <Parametro nome="Maks" idade="42" />
    </React.Fragment>
    
    ,document.getElementById('root')
)
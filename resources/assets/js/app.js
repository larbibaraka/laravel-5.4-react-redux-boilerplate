import React from 'react'
import ReactDom from 'react-dom'
import Test from './test'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'

const store = createStore(reducer) 

ReactDom.render(
    <Provider store={store}>
     <Test />
    </Provider>,
    document.getElementById('root')
)

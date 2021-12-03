import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from '../pages/Index'

const routes = () => /* function */ {
    return(
        <Switch>
            <Route exact path='/'>
                <Index />
            </Route>
        </Switch>
    )
}

export default routes
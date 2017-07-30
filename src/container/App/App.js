import React from 'react'
import './App.scss'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Home from '../Home/Home'
import Blog from '../Blog/Blog'
import Price from '../Price/Price'
import Contact from '../Contact/Contact'




const App = () => (
    <div>
        <Header />

        <Route exact path='/' component={Home} />
        <Switch>
            <Route path='/price' component={Price} />
            <Route path='/contact' component={Contact} />
            <Route path='/blogt' component={Blog} />
        </Switch>
        <Footer />
    </div>
)


export default App;
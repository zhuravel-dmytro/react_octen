import React, {Component} from 'react';

import Form from "./components/form/Form";
import Cars from "./components/cars/Cars";

class App extends Component {
    render() {
        return (
            <div>
                <Form/>
                <Cars/>
            </div>
        );
    }
}

export default App;
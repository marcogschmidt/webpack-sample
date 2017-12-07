import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends Component {

    constructor(props, context) {
        super(props, context);
    }

    static hello() {
        console.log("Hello!");
    }

    render() {
        return (
            <MuiThemeProvider>
                <FlatButton
                    label="Hello world!"
                    onClick={Main.hello}
                />
            </MuiThemeProvider>
        );
    }
}

export default Main;
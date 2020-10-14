//importing react 
import React from 'react'

//creating class
export class Content extends React.Component {
 //prints hello world and returns time

    //dsiplays text to screen 
    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
import React from 'react';

class Widget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>🎉 Here is a widget! 🎉</h2>
                <br/>
                <span>Mode: {this.props.Mode}</span>
            </div>
        )
    }
}

export default Widget;
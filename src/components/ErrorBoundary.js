import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    render() {
            if(this.state.hasError) {
                return
            }
        }
    }

export default ErrorBoundary;
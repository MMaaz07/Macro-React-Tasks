//type rcc and press enter for boiler plate

import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state={error: false}
    }

    static getDerivedStateFromError(error){
        return {error:true};
    }
    componentDidCatch(error, info){
        console.log("Error caught: ", error, info);
    }

  render() {
    if(this.state.error){
        return <h3>oops! Something went wrong</h3>
    }
    return this.props.children;
  }
}

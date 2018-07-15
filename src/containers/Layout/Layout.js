import React, { Component } from 'react'

class Layout extends Component {
    render() {
        return(
            <section className="Layout">
                {this.props.children}
            </section>
        )
    }
}

export default Layout;
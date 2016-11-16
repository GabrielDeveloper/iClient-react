import React from 'react';

class Nav extends React.Component
{
    constructor(props, context) {
        super(props, context);
        this.toggleNavStatus = this.toggleNavStatus.bind(this);
        this.hide = this.hide.bind(this);
        this.state = {
            toggleNavStatus: ''
        };
    }

    getChildContext() {
        return {
            onClick: this.toggleNavStatus
        }
    }

    hide(e) {
        this.setState({toggleNavStatus: ''});
    }

    toggleNavStatus() {
        let isActive = this.state.toggleNavStatus ? '' : 'is-active';
        this.setState({toggleNavStatus: isActive});
    }

    render() {
        return (
            <nav className="nav has-shadow" id="top">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item" href="../index.html">IClient</a>
                    </div>
                    <span className={ `nav-toggle ${this.state.toggleNavStatus}` } onClick={this.toggleNavStatus}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className={ `nav-right nav-menu ${this.state.toggleNavStatus}` }>
                        {this.props.children}
                    </div>
                </div>
            </nav>
        );
    }
}

Nav.childContextTypes = {
    onClick: React.PropTypes.func
};

export default Nav;


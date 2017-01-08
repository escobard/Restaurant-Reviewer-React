import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer blue center-on-small-only">
            <div className="footer-copyright">
                <div className="container-fluid animated slideInUp">
                    <span>© 2017 Copyright:</span>
                    <a href="https://github.com/escobard"> Daniel Escobar</a>
                </div>
            </div>
        </footer>
    );
  }
}
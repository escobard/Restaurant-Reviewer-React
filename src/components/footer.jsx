// =============================================================
// 
//  footer.js
//
// =============================================================

import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer red center-on-small-only">
            <div className="footer-copyright">
                <div className="container-fluid animated slideInUp">
                    <a href="https://github.com/escobard">© 2017 Copyright</a>
                </div>
            </div>
        </footer>
    );
  }
}
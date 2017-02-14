// =============================================================
// 
//  footer.js
//
// =============================================================

import React, { Component } from 'react';

export default class Footer extends Component {
  setHeight(){
    var body = document.body;
    body.style.overflow = "inherit !important";
  }
  render() {
    return (
        <footer className="page-footer red center-on-small-only">
            <div className="footer-copyright">
                <div className="container-fluid animated slideInUp">
                    <a href="https://github.com/escobard">2017 Copyright</a>
                </div>
            </div>
            {this.setHeight()}
        </footer>
    );
  }
}
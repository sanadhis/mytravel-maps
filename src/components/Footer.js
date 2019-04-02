import React, { Component } from 'react';
import '../assets/css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="copyright">
                Icons made by <a
                    href="https://www.freepik.com/" title="Freepik">
                    Freepik
                              </a>
                from <a
                    href="https://www.flaticon.com/"
                    title="Flaticon">
                    www.flaticon.com
                     </a>
                is licensed by
                <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0" target="_blank">
                    CC 3.0 BY
                </a>
            </div>
        );
    }
}

export default Footer;
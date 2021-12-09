import React from "react";

import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faAt} from '@fortawesome/free-solid-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer (){

    return(
        <footer className="footer">
            <div className="footer-holder">
                <div className="footer-title-holder">
                    <h1>Contact</h1>
                </div>
                <div className="stripe"></div>
                <div className="footer-contact-icon-holder">
                    <div className="footer-icon-holder">
                        <FontAwesomeIcon className="icon" icon={faFacebook} size="2x"/>
                    </div>
                    <div className="footer-icon-holder">
                        <FontAwesomeIcon className="icon" icon={faAt} size="2x"/>
                    </div>
                    <div className="footer-icon-holder">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x"/>
                    </div>
                    <div className="footer-icon-holder">
                        <FontAwesomeIcon className="icon" icon={faTwitter} size="2x"/>
                    </div>
                    <div className="footer-icon-holder">
                        <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} size="2x"/>
                    </div>
                </div>
                <div className="stripe"></div>
            </div>
        </footer>
    )
}

export default Footer
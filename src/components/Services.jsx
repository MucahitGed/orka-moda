import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faTruck  , faPhone , faBox } from '@fortawesome/fontawesome-free-solid'
import {faMoneyBillAlt} from '@fortawesome/fontawesome-free-regular'

function Services() {
  return (
    <div className='services'>
        <div className="services_div">
            <div className="service">
                <div className="service_div">
                    <div className="service_font"><FontAwesomeIcon icon={faTruck} /></div>
                    <div className="service_header">SZYBKA DOSTAWA</div>
                    <div className="service_content">Wysyłka od razu po zaksięgowaniu płatności.</div>
                </div>
            </div>
            <div className="service">
                <div className="service_div">
                    <div className="service_font"><FontAwesomeIcon icon={faMoneyBillAlt} /></div>
                    <div className="service_header">PŁATNOŚCI ONLINE</div>
                    <div className="service_content">Płatność tylko tradycyjnym przelewem.</div>
                </div>
            </div>
            <div className="service">
                <div className="service_div">
                    <div className="service_font"><FontAwesomeIcon icon={faPhone} /></div>
                    <div className="service_header">24/7 KONTAKT</div>
                    <div className="service_content">Odpowiadamy w ciągu kilku godzin.</div>
                </div>
            </div>
            <div className="service">
                <div className="service_div">
                    <div className="service_font"><FontAwesomeIcon icon={faBox} /></div>
                    <div className="service_header">ZWROT TOWARU</div>
                    <div className="service_content">W ciągu 14 dni od dnia dostarczenia zamówienia.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
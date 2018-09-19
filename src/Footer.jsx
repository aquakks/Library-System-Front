import * as React from "react";
import './Footer.css';

export const Footer = () => {
    return (
<footer className="section footer-classNameic context-dark bg-image">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
             
                <p>System przygotowany dla bibliotek miejskich.</p>
                <p className="rights">Library System 2018</p>
            </div>
            <div className="col-md-4">
              <h5>Kontakt</h5>
              <dl className="contact-list">
                <dt>Adres:</dt>
                <dd>Poznan 64-608</dd>
              </dl>
              <dl className="contact-list">
                <dt>Email:</dt>
                <dd><a href="mailto:#">kontakt@biblioteka.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>Telefon : </dt>
                <dd><a href="tel:#">+48 601454787</a> 
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Linki : </h5>
              <ul className="nav-list">
                <li><a href="#">O nas!</a></li>
                <li><a href="#">Moje konto</a></li>
                <li><a href="#">Książki</a></li>
                <li><a href="#">Regulamin</a></li>
                <li><a href="#">Inne</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};
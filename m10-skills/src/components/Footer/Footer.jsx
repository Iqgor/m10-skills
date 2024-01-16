import React from "react"
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <section className="footerMail">
                <h4>Mail</h4>
                <a className="underline" href="https://www.amsterdam.nl/pmb/contact/"> <p className="arrow">&gt;</p>  Contact</a>
                <p>PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
            </section>
            <section className="footerFollow">
                <h4>Volg Ons</h4>
                <a className="underline" href="https://www.linkedin.com/company/projectmanagement-bureau/"> <p className="arrow">&gt;</p>  LinkdIn</a>
            </section>
            <section className="footerAbout">
                <h4>Over deze site</h4>
                <div>
                    <a className="underline" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/colofon/"> <p className="arrow">&gt;</p> Colofon</a>
                    <a className="underline" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/"> <p className="arrow">&gt;</p>  Proclaimer en Copyright</a>
                    <a className="underline" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/"> <p className="arrow">&gt;</p> Sitemap</a>

                </div>
            </section>
            <section className="footerLink">
                <h4>Amsterdam.nl</h4>
                <a className="underline" href="https://www.amsterdam.nl"> <p className="arrow">&gt;</p>  Naar amsterdam.nl</a>
                <p>Nieuws en publieksinformatie van de gemeente Amsterdam.</p>
            </section>

        </footer>
    )
}

export default Footer
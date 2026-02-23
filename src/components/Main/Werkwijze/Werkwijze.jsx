import React from "react";
import './werkwijze.css'
import { Link } from "react-router-dom";


function Werkwijze() {

    function toTop() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="main__info">
            <article className="infoParagraph start">
                <div>
                    <h4>Bouwmanagement en Maatschappelijk Vastgoed</h4>
                    <p>Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad.</p>
                    <p>BMV stond aan de wieg van het Amsterdamse beleid voor maatschappelijke voorzieningen. Dit beleid werd in 2018 verankerd in de ‘Referentienormen voor maatschappelijke voorzieningen, groen en spelen’. Het doel van deze normen is de groei van de stad te koppelen aan maatschappelijke voorzieningen en activiteiten. Deze worden niet vanzelfsprekend door de private sector opgepakt en vragen daarom een actieve rol van de gemeentelijke overheid. Het gaat hierbij om gebouwen (zogenaamd maatschappelijk vastgoed) en het – letterlijk – creëren van ruimte voor sport, spel, kunst en cultuur.</p>
                    <p>Naast de maatschappelijke voorzieningen werkt BMV ook aan beheer en faciliteren van goede werkplekken - zoals kantoren, werven, garages en opslagruimtes - voor de mensen die de stad en het stadslandschap schoon en netjes houden. De stadsdeelkantoren en andere kantoren voor de gemeentelijke organisatie zijn ook onderdeel van ons werkveld.</p>
                </div>
            </article>
            <article className="infoParagraph end">
                <div>
                    <h4>Werkwijze</h4>
                    <p><b>Integrale aanpak</b></p>
                    <p>De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar.</p>
                    <p>BMV hanteert daarom een integrale aanpak: een kruisbestuiving tussen verschillende disciplines, uiteenlopend van proces-, project- en bouwmanagement tot planning, financiën, grond en ontwikkeling, vastgoed en juridische zaken.</p>
                    <p>De werkzaamheden van BMV omvatten onder andere en natuurlijk afhankelijk van het soort project:</p>
                    <ul>
                        <li>bestuurlijk adviseren van verschillende directies en het gemeentebestuur (het College van B&W en de gemeenteraad) in de verschillende beleidsfases</li>
                        <li>opstellen van een programma van eisen</li>
                        <li>onderzoek doen naar geschikte locaties</li>
                        <li>controleren van het budget in relatie tot de ambities</li>
                        <li>aansturen van een ontwerptraject</li>
                        <li>organiseren van selecties en aanbestedingen</li>
                        <li>voorbereiden en coördineren van de bouw</li>
                        <li>verzorgen van het feestje rond de oplevering.</li>
                    </ul>
                    <p>BMV schakelt tussen project en proces.</p>
                    <p>Het team is binnen de gemeente Amsterdam hét adres voor vraagstukken op het snijvlak van het sociale en fysieke domein.</p>
                    <p>BMV biedt een integraal en overzichtelijk pakket per project.</p>
                    <p>En het verbindt de wensen van de opdrachtgever en de gebruiker aan de mogelijkheden in het gebied, de kosten en de planning. </p>
                </div>
            </article>
            <article className="infoParagraph start">
                <div>
                    <h4>BMV-teams</h4>
                    <p><b>Zelfstandig, dynamisch, innovatief</b></p>
                    <p>Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam.</p>
                    <p>Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project.</p>
                    <p>BMV stuurt projecten aan vanuit zelfstandig werkende teams met korte lijnen en veel dynamiek.</p>
                    <p>In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen.</p>
                    <p>Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil.</p>
                    <p>Kijk op de pagina <Link onClick={toTop} className="underline" to={"/projecten"}><b>"projecten"</b> </Link> voor meer informatie over recente projecten waar BMV aan bijdroeg of momenteel bij betrokken is</p>
                </div>
            </article>
        </div>
    )
}

export default Werkwijze
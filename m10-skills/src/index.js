import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Organisatie from "./pages/Organisatie";
import Projecten from "./pages/Projecten";
import Werk from "./pages/Werk";
import NoPage from './pages/noPage'
import Project from './pages/Project'

const projects = [

  {
      "id": 0,
      "title": "Nieuwbouw Spinoza20first",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_1",
      "links": [
          "https://www.spinoza20first.nl/"
      ]
  },
  {
      "id": 1,
      "title": "Nieuwbouw AICS",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_2",
      "links": [
          "https://hoofdstad.sharepoint.com/:u:/r/sites/PMB-BMV22/Gedeelde%20documenten/General/Subteam%20Communicatie/Website/TW/VPRC-podcast-7.mp3?csf=1&web=1&e=knxFWY"
      ]
  },
  {
      "id": 2,
      "title": "Renovatie Bostheater",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_3",
      "links": [
          "https://www.bostheater.nl/"
      ]
  },
  {
      "id": 3,
      "title": "Renovatie de Wereldburger",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_4",
      "links": [
          "https://www.bsdewereldburger.nl/"
      ]
  },
  {
      "id": 4,
      "title": "Kwartiermaker Nationaal Slavernijmuseum",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_5",
      "links": [
          "https://www.amsterdam.nl/diversiteit/nationaal-slavernijmuseum/"
      ]
  },
  {
      "id": 5,
      "title": "Renovatie Amsterdam Museum",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_6",
      "links": [
          ""
      ]
  },
  {
      "id": 6,
      "title": "Sportpark Goed Genoeg & Clubgebouw AFC",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_7",
      "links": [
          "https://www.afc.nl/"
      ]
  },
  {
      "id": 7,
      "title": "Verbouwing en Nieuwbouw Werven en Overslagpunten",
      "beschrijving": "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum <br> Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. <br> De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br> Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br> Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
      "img": "foto_8",
      "links": [
          "https://hoofdstad.sharepoint.com/:u:/r/sites/PMB-BMV22/Gedeelde%20documenten/General/Subteam%20Communicatie/Website/TW/VPRC-podcast-7.mp3?csf=1&web=1&e=knxFWY"
      ]
  }

]



export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Layout/>}>
            <Route index element={<Home />} />
            <Route path="organisatie" element={<Organisatie naam="Organisatie" />} />

            <Route path="projecten" element={<Projecten naam="Projecten"/>} />
            <Route path="werkenbij" element={<Werk naam="Werken bij"/>} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react'
import styled from 'styled-components';


// yhteinen kapeampi alue textille ja laatikolle
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const VujuviikkoHead = styled.div`
    padding-bottom: 25px;
    text-shadow: 4px 4px 8px #3E737D;
`;

const TapahtumaLista = styled.div`
    font-size: 30px;
    color: #1C3439;
    display:flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    width: 400px;

`;

const Tapahtumalinkki = styled.a`
    font-size: 25px;
    text-decoration: none;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    color: white;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px #3E737D;
    
`;

const Vujuvuosi = () => {

    // linkki: teksti, nimi: teksti, pvm: teksti
    const VujuviikkoLinkki = (linkki, nimi, pvm) => {
        return <Tapahtumalinkki href ={linkki} >
            {pvm} 
            {nimi}
            </Tapahtumalinkki>
    }

    return (
            <> 
                <ContentBox>
                    <VujuviikkoHead>
                        <h2>
                            Vuosijuhlaviikko
                        </h2>
                        </VujuviikkoHead>
                    <p class = "vvt">
                    Inkubio 18 -juhlahumua on havaittavissa jo useissa tapahtumissa ennen itse vuosijuhlaa. Heittäydy juhlatunnelmaan ja osallistu vujuviikon täyttäviin perinteikkäisiin aktiviteetteihin.
                    </p>
                </ContentBox>
                <ContentBox>
                    <TapahtumaLista>
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Tapa- ja Tanssikoulutus", "2.3.2021\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Krokejatkot", "3.3.2021\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Virpin läpilaulanta", "4.3.2021\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Apoptoosi XVIII", "5.3.2021\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Nekroosi", "5.3.2021\n")}
                    </TapahtumaLista>
                </ContentBox>
            </>
    )
};

export default Vujuvuosi;
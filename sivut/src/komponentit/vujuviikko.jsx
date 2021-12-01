import React from 'react'
import styled from 'styled-components';

// koko sponssijutun pohja
const VujuviikkoStyle = styled.div`

    width: 100%
    min-height: 1000px;

    margin: 0;
    background-color: #D9A082;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 30px;
`;



// yhteinen kapeampi alue textille ja laatikolle
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: 2%;
    margin-right: 2%;

`;

// texti sponssien viereen
const VujuviikkoText = styled.div`
    font-size: 24px;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-weight: 350px;
    color: #210412;
    width: 500px;

`;

const VujuviikkoHead = styled.div`
    font-size: 60px;
    font-family: 'East Sea Dokdo', cursive;
    font-weight: 400;
    color: #210412;
    padding-bottom: 15px;
    width: 350px;
`;

const TapahtumaLista = styled.div`
    font-size: 30px;
    color: #210412;
    width: 340px;
    padding:bottom;
    display:flex;
    flex-direction: column;

`;

const Tapahtumalinkki = styled.a`
    font-size: 25px;
    text-decoration: none;
    color: black;
    margin-bottom: 10px
    
`

const Vujuvuosi = () => {

    // linkki: teksti, nimi: teksti, pvm: teksti
    const VujuviikkoLinkki = (linkki, nimi, pvm) => {
        return <Tapahtumalinkki href ={linkki} >{pvm} {nimi}</Tapahtumalinkki>
    }

    return (
            <VujuviikkoStyle> 
                <ContentBox>
                    <TapahtumaLista>
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Sulkapalloturnaus", "2.6.2021")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Sulkapalloturnaus", "3.6.2021")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Sulkapalloturnaus", "4.6.2021")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Sulkapalloturnaus", "5.6.2021")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/138", "Sulkapalloturnaus", "5.6.2021")}
                    </TapahtumaLista>
                </ContentBox>
                <ContentBox>
                    <VujuviikkoHead>Vuosijuhlaviikko</VujuviikkoHead>
                    <VujuviikkoText> 
                        Aalto-yliopiston bioinformaatioteknologian ainejärjestö Inkubio täyttää 18 vuotta vuonna 2022. Tätä merkittävää tapahtumaa juhlistetaan 5.3. Inkubion vuosijuhlissa, Apoptoosi XVIII:ssa. Inkubio 18 -juhlahumua on havaittavissa jo useissa tapahtumissa ennen itse vuosijuhlaa.
                    </VujuviikkoText>
                </ContentBox>
            </VujuviikkoStyle>
    )
};

export default Vujuvuosi;
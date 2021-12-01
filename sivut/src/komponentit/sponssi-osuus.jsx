import React from 'react'
import styled from 'styled-components';
import fimlab from './fimlablogo.png'

// koko sponssijutun pohja
const SponssiStyle = styled.div`

    width: 100%
    min-height: 1000px;

    margin: 0;
    background-color: #F1C37E;

`;



// yhteinen kapeampi alue textille ja laatikolle
const ContentBox = styled.div`
    display: flex;
    height: 500px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 5%; margin-right: 5%;

    color: white;

`;

// texti sponssien viereen
const SponssiText = styled.div`
    font-size: 50px;
    font-family: 'East Sea Dokdo', cursive;
    font-weight: 400;
    color: #210412;

    width: 400px;
    padding:bottom;

`;

// div sponssilogoille
const Logot = styled.div` 
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 40px;
`;


const Sponssi = () => {


    return (
            <SponssiStyle> 
                <ContentBox>
                    <SponssiText> 
                        Vuosijuhlaamme ovat olleet mukana mahdollistamassa Fimlab,... blaablaablaa
                    </SponssiText>
                    <Logot>
                        <img src={fimlab}
                            alt="fimlab logo"
                            height = '150'
                            />
                        <img src={fimlab}
                            alt="fimlab logo"
                            height = '150'
                            />
                    </Logot>
                </ContentBox>
            </SponssiStyle>
    )
};

export default Sponssi;
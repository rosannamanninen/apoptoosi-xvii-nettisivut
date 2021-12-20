import React from 'react';
import styled from 'styled-components';
import fimlab from './fimlablogo.png';
import "../index.css";


 

// yhteinen kapeampi alue textille ja laatikolle
const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:0;

`;

// texti sponssien viereen
const SponssiText = styled.div`
    font-size: 50px;
    font-family: 'East Sea Dokdo', cursive;
    text-shadow: 2px 2px 4px #564750;
    font-weight: 400;
    color: white;
    text-align: center;

`;


const Sponssi = () => {


    return (
            <> 

                    <SponssiText> 
                        Vuosijuhlaamme ovat olleet mukana mahdollistamassa Fimlab, GE Healthcare ja Merkkimafia.
                    </SponssiText>
                    <div id = "logoframe">
                        <img id = "logo"
                            src={fimlab}
                            alt="fimlab logo"
                            height = '150'
                            />
                        <img id = "logo"
                            src={fimlab}
                            alt="fimlab logo"
                            height = '150'
                            
                            />
                        <img id = "logo"
                            src={fimlab}
                            alt="fimlab logo"
                            height = '150'
                            
                            />
                    </div>

            </>
    )
};

export default Sponssi;
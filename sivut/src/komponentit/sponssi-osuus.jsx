import React from 'react'
import styled from 'styled-components';

// koko sponssijutun pohja
const SponssiStyle = styled.div`

    width: 100%
    min-height: 1000px;

    margin: 0;

    background-color: #c9adba;

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

    background-color: #c9adba;
    color: white;

`;

// texti sponssien viereen
const SponssiText = styled.div`
    font-size: 28px;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-weight: 400;
    color: #210412;

    width: 50%;
    padding:bottom;

`;

// svg-laatikko sponssilogoille
const Logot = styled.svg` 

    height: 350;
    width: 350;

`;


const Sponssi = () => {



    return (
            <SponssiStyle> 
                <ContentBox>
                    <SponssiText> 
                        Tähän pari kivaa sanaa sponseseista hjeeeee goikjaseopjfapotjfm Tähän pari kivaa sanaa sp
                    </SponssiText>
                    <Logot height = '400' width = '500'>
                        <rect
                            width = '150'
                            height = '150'
                        >
                        </rect>
                        <rect
                            x = '200'
                            y = '200'
                            width = '150'
                            height = '150'
                        >
                        </rect>
                    </Logot>
                </ContentBox>
            </SponssiStyle>
    )
};

export default Sponssi;
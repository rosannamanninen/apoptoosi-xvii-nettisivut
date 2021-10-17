import React from 'react'
import styled from 'styled-components';


const BannerHead = styled.div`
    font-size:140px;
    font-family: 'East Sea Dokdo', cursive;

    text-align: center;
    padding-top: 25px;
    padding-bottom: 35px;
`;

const BannerText = styled.div`
    font-size: 28px;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-weight: 200;
    color: #d3def0;

    max-width: 1000px;

`;

const BanneriStyle = styled.div`
    display: flex;
    height: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 100%
    min-height: 1000px;

    margin: 0;
    padding-bottom: 20px;

    background-color: #162c4f;
    color: white;

`;

const Banneri = () => {

    return (
        <BanneriStyle>
            <BannerHead>
                Apoptoosi XVIII
            </BannerHead>
            <BannerText>
                Moikkamoi hyvää puuroa apoptoosissa Moikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosiss
            </BannerText>
        </BanneriStyle>
    )
};


export default Banneri;
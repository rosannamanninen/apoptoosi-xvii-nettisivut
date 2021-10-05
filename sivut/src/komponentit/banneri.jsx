import React from 'react'
import styled from 'styled-components';


const BannerHead = styled.div`
    font-size:64px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 40px;
`;

const BannerText = styled.div`
    font-size:28px;
    max-width: 1200px;

`;

const BanneriStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%
    min-height: 1000px;

    margin: 0;
    padding-bottom: 30px;
    padding-top: 15px;

    background-color: #173A94;
    color: white;

`;

const Banneri = () => {

    return (
        <BanneriStyle>
            <BannerHead>
                Apoptoosi XVIII
            </BannerHead>
            <BannerText>
                Moikkamoi hyvää puuroa apoptoosissa Moikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosissaMoikkamoi hyvää puuroa apoptoosissa
            </BannerText>
        </BanneriStyle>
    )
};


export default Banneri;
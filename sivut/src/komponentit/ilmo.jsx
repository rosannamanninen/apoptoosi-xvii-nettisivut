import React from 'react'
import styled from 'styled-components';
import inkubio from './inkubio.png';


const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;

`;

const Ilmoittautuminen = () => {

    return ( <> 
        <ContentBox>
            Tähän ilmo. HOX täs on sit 100px padding atm, muokataan tost ylemmäst styled divist
        </ContentBox>
        <img id = "logoink"
            src={inkubio}
            alt="inkubio logo"
            height = '100'  
            />
    </>
    )
};

export default Ilmoittautuminen;
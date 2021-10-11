import React from 'react';
import styled from 'styled-components';
import Section from './Section.js';
function Home() {
    return (
        <Container>
            <Section 
            title="model S"
            description="Order online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            rghtBtnText="Existing Inventory"
            lftBtnText="Customers Orders"/>
            <Section
             title="model Y"
             description="Order online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             rghtBtnText="Existing Inventory"
             lftBtnText="Customers Orders"/>
            <Section
             title="model 3"
             description="Order online for Tuchless Delivery"
             backgroundImg="model-3.jpg"
             rghtBtnText="Existing Inventory"
             lftBtnText="Customers Orders"/>
             <Section 
             title="model X"
            description="Order online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            rghtBtnText="Existing Inventory"
            lftBtnText="Customers Orders" />
            <Section 
             title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof"
            backgroundImg="solar-roof.jpg"
            rghtBtnText="Learn More"
            lftBtnText="Order now" />
            <Section 
             title="Accessories"
            description=""
            backgroundImg="model-x.jpg"
            
            lftBtnText="Shop Now" />
        </Container>
            
        
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`

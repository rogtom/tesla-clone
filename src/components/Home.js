import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import modelS from '../assets/images/model-s.jpg'
import model3 from '../assets/images/model-3.jpg'
import modelX from '../assets/images/model-x.jpg'
import modelY from '../assets/images/model-y.jpg'
import solarP from '../assets/images/solar-panel.jpg'
import solarR from '../assets/images/solar-roof.jpg'
import accessories from '../assets/images/accessories.jpg'


const Container = styled.div`
height: 100vh;
`
const data = [
    {
        "id": 0,
        "title": "Model S",
        "description": "Order Online for Touchless Delivery",
        "image": modelS,
        "firstButtonText": "Custom Order",
        "secondButtonText": "Existing Inventory",
        "range": "390",
        "time": "1.99",
        "topSpeed": "200",
        "peakPower": "1,020"
    },
    {
        "id": 1,
        "title": "Model 3",
        "description": "Order Online for Touchless Delivery",
        "image": model3,
        "firstButtonText": "Custom Order",
        "secondButtonText": "Existing Inventory",
        "range": "400",
        "time": "2.99",
        "topSpeed": "180",
        "peakPower": "900"
    },
    {
        "id": 2,
        "title": "Model X",
        "description": "Order Online for Touchless Delivery",
        "image": modelX,
        "firstButtonText": "Custom Order",
        "secondButtonText": "Existing Inventory",
        "range": "350",
        "time": "1.55",
        "topSpeed": "150",
        "peakPower": "1,130"
    },
    {
        "id": 3,
        "title": "Model Y",
        "description": "Order Online for Touchless Delivery",
        "image": modelY,
        "firstButtonText": "Custom Order",
        "secondButtonText": "Existing Inventory",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    },
    {
        "id": 4,
        "title": "Lowest Cost Solar Panels in America",
        "description": "Money-back guarantee",
        "image": solarP,
        "firstButtonText": "Order now",
        "secondButtonText": "Learn more",
    },
    {
        "id": 5,
        "title": "Solar for new Roofs",
        "description": "Solar Roof Cost Less Then a New Roof",
        "image": solarR,
        "firstButtonText": "Order now",
        "secondButtonText": "Learn more",
    },
    {
        "id": 6,
        "title": "Accessories",
        "description": "",
        "image": accessories,
        "firstButtonText": "Show now",

    }
]

const Home = () => {
    return (
        <Container>
            {data.map(el => <Section key={el.id}
                title={el.title}
                description={el.description}
                img={el.image}
                firstButtonText={el.firstButtonText}
                secondButtonText={el.secondButtonText}/>) }
        </Container>
    )
}

export default Home

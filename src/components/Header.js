import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

const cars = [
    {
        "id": 0,
        "title": "Model S",
        "description": "Order Online for Touchless Delivery",
        "image": "model-s.jpg",
        "range": "390",
        "time": "1.99",
        "topSpeed": "200",
        "peakPower": "1,020"
    },
    {
        "id": 1,
        "title": "Model 3",
        "description": "Order Online for Touchless Delivery",
        "image": "model-3.jpg",
        "range": "400",
        "time": "2.99",
        "topSpeed": "180",
        "peakPower": "900"
    },
    {
        "id": 2,
        "title": "Model X",
        "description": "Order Online for Touchless Delivery",
        "image": "model-x.jpg",
        "range": "350",
        "time": "1.55",
        "topSpeed": "150",
        "peakPower": "1,130"
    },
    {
        "id": 3,
        "title": "Model Y",
        "description": "Order Online for Touchless Delivery",
        "image": "model-y.jpg",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    }
]


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;

`
const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    flex: 1;

    @media(max-width: 768px) {
        display: none;
    }
`
const MenuItem = styled.li`
    list-style: none;
    padding: 0 10px;

    a {
        flex-wrap: nowrap;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
        flex-wrap: nowrap;
        margin-right: 20px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const Header = () => {
    return (
        <Container>
            <a>
                <img src={logo} alt="TESLA" />
            </a>
            <Menu>

                    {
                        cars.map(car => <MenuItem key={car.id}><a href="#">{car.title}</a></MenuItem>)
                    }

            </Menu>
            <RightMenu>
                <a href="http://" target="_blank" rel="noopener noreferrer">Shop</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Tesla account</a>
                <CustomMenu />
            </RightMenu>
        </Container>
    )
}

export default Header


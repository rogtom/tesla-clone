import React from 'react'
import styled from 'styled-components'
import downArrow from '../assets/images/down-arrow.svg'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }


`
const FirstButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`
const SecondButton = styled(FirstButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    display: flex;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    height: 40px;
    width: 50px;
    animation: animationDown infinite 1.5s;

`
const Buttons = styled.div``



const Section = ({title, description, img, firstButtonText, secondButtonText}) => {

    return (
        <Wrapper img={img}>
           <ItemText>
              <h1>{title}</h1>
               <p>{description}</p>
             </ItemText>
             <Buttons>
                <ButtonGroup>
                     <FirstButton>
                        {firstButtonText}
                    </FirstButton>
                 {secondButtonText &&
                    <SecondButton>
                        {secondButtonText}
                     </SecondButton>}
                 </ButtonGroup>
                 <DownArrow src={downArrow}/>
            </Buttons>
        </Wrapper>
    )
}

export default Section

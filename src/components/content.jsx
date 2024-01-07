import styled, {keyframes} from "styled-components";
import Section from './section.jsx'

const Title = styled.h1`
    color: #ab5412
`
const rotateFrame = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
`

const fadIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`
const SubTitle = styled(Title)`
    background-color: ${({primary})=> {if(primary) return primary}};
    font-size: 12px;
    text-align: center;
    border:  ${({border})=>border? border || 0 : "3px solid blue"};
    animation: ${fadIn} 5s ease-in
`
const Rotate = styled.div`
    background-color: red;
    width: 20px;
    height: 20px;
    margin: auto;
    animation: 2s ${rotateFrame} infinite linear
`


// const ReverseSubTitle = props => <SubTitle {...props} children={props.children.split('').reverse()} />


export default function Content(){
    return(
    <>
        <Title>Progress Tracker</Title>
        {/* <SubTitle as={ReverseSubTitle} primary> I'm sub-Title </SubTitle> */}
        <SubTitle primary={'yellow'} border={'3px solid green'}> I'm sub-Title </SubTitle>
        <Section text="M" width="80%"></Section>
        <Section text="T" width="10%"></Section>
        <Section text="W" width="87%"></Section>
        <Section text="Tr" width="55%"></Section>
        <Section text="F" width="32%"></Section>
        <Section text="S" width="77%"></Section>
        <Section text="S" width="46%"></Section>
            <Rotate />
    </>
    )
}
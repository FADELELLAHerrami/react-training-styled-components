import styled from "styled-components";
import Button from './button.jsx'


const Title = styled.h1`
    color: red
`

const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    justify-content: center;
    color: #f0aeaa;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


export default function Content(){
    return(
    <Section className="content">
        <Title>content</Title>
        <Button content="btn-1" />
        <Button content="btn-1" />
    </Section>
    )
}
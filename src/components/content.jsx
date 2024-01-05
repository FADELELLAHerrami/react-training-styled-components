import styled from "styled-components";
import Section from './section.jsx'

const Title = styled.h1`
    color: #ab5412
`




export default function Content(){
    return(
    <>
        <Title>Progress Tracker</Title>
        <Section text="M"></Section>
        <Section text="T"></Section>
        <Section text="W"></Section>
        <Section text="Tr"></Section>
        <Section text="F"></Section>
        <Section text="S"></Section>
        <Section text="Sn"></Section>
    </>
    )
}
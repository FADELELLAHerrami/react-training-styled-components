import styled from "styled-components"



const TitleWeekday = styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;
`

const Section = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #ff6961;
`

export default function Button(props){
    return(
    <>
         <Section>
            <TitleWeekday>{props.text}</TitleWeekday>
        </Section>
    </>
    )
}
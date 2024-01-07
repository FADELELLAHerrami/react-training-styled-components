import styled from "styled-components"



const TitleWeekday = styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;
`
const TitleWeekend = styled(TitleWeekday)`
    background-color: lightgrey;
    border-radius: 7px 0 0 7px;
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
const ProgressBar = styled.div`
    background-color: red;
    width: ${({width})=> width || "0%"};
    height: 100%;
`

const ProgressSection = styled.div`
    width: 250px;
`

export default function Button(props){
    const isWeekend = props.text == 'S'
    return(
    <>
         <Section >
            {!isWeekend && <TitleWeekday>{props.text}</TitleWeekday>}
            {isWeekend && <TitleWeekend>{props.text}</TitleWeekend>}
            <ProgressSection>
                <ProgressBar width={props.width}/>
            </ProgressSection>
        </Section>
    </>
    )
}
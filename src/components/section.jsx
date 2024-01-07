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
    &:hover {
        background-color: grey
    }
`
const ProgressBar = styled.div`
    background-color: ${({width})=>{
        let numeric = parseInt(width.slice(0,-1));
        if (numeric >= 80) return 'red';
        else if (numeric >= 60) return 'orange';
        else if (numeric >= 40) return 'yellow';
        else return 'green';

        }};
    width: ${({width})=> width || "0%"};
    height: 100%;
`

const ProgressSection = styled.div`
    width: 250px;
`

export default function Button(props){
    const isWeekend = props.text == 'S';
    let day = props.day;
    let today = new Date()
    let dayOfTheWeek = today.getDay()
    let isToday = day === dayOfTheWeek+1;
    return(
    <>
         <Section >
            {!isWeekend && <TitleWeekday>{props.text}</TitleWeekday>}
            {isWeekend && <TitleWeekend>{props.text}</TitleWeekend>}
            <ProgressSection>
                {isToday && <ProgressBar width={props.width}/>}
            </ProgressSection>
        </Section>
    </>
    )
}
import styled from "styled-components"





const Btn = styled.button`
    background-color: white;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
`
export default function Button(props){
    return(
    <>
        <Btn>{props.content}</Btn>
    </>
    )
}
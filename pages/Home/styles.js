import styled from "styled-components/native";

export const Container = styled.View`
margin: 10px;
`;

export const Card = styled.View`
background-color: rgba(189, 193, 198, 0.25);
border-radius: 10px;
padding: 0px 0px 1px 0px;
`;

export const CardTitle = styled.View`
width: 100%;
background-color: rgba(189, 193, 198, 0.5);
padding: 15px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
color: black;
text-transform: uppercase;
font-family: Arial;
overflow: hidden;
`;

export const CardBody = styled.View`
margin: 15px;
font-family: Arial;
`;

export const CardFooter = styled.View`
width: 100%;
background-color: rgba(189, 193, 198, 0.75);
padding: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
color: black;
text-transform: uppercase;
font-family: Arial;
overflow: hidden;
`;

export const Head = styled.View`
background-color: rgba(189, 193, 198, 0.5);
height: 100px;
width: 100%;
`;

export const Div = styled.View`
margin: auto;
`

export const PP = styled.Image`
margin: 15px;
height: 75px;
width: 75px;
border-radius: 250px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width:100%;
    height: 45px;
    border-radius: 10px;
    color: white;
`;
export const SubmitText = styled.Text`
    font-size: 20px;
    color: white;
`;


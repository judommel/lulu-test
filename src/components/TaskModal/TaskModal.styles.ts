import styled from "styled-components";

export const TaskModalContainer = styled.div`
    position: fixed;
    zIndex: 2;
    width: 100%;
    height: 100%;
    display: flex:
    justify-content: center;
    align-items: center;
`;

export const TaskModalCard = styled.div`
	background-color: silver;
	border: 1px solid black;
	border-radius: 8px;
	width: 200px;
	margin: auto;
	margin-top: 50px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

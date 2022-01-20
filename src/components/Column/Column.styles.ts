import styled from "styled-components";

export const ColumnContainer = styled.div`
	width: 200px;
	border: 1px solid black;
	border-radius: 8px;
	padding: 8px;
	margin: 8px;
`;

export const ColumnHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Add = styled.div`
	color: green;
	font-size: 32px;
	text-align: center;
	border-top: 1px dashed green;
	margin-top: 16px;
	width: 100%;
	cursor: pointer;
`;

export const TaskCount = styled.div`
	background-color: silver;
	border-radius: 4px;
	padding: 4px;
	color: white;
	margin-left: 8px;
`;

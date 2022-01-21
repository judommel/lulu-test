import styled from "styled-components";

export const TaskModalContainer = styled.div`
    position: fixed;
    zIndex: 2;
    width: 100%;
    height: 100%;
    display: flex:
    justify-content: center;
    align-items: center;
    background-color: rgba(28,101,205,0.41);
	font-family: ${({ theme }) => theme.fonts.default};
`;

export const TaskModalCard = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 8px;
	width: 300px;
	margin: auto;
	margin-top: 50px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	box-shadow: 1px 1px 10px 0px #000000;
`;

export const TaskModalCardTitle = styled.div`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 16px;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	margin-bottom: 16px;
`;

export const TaskModalInput = styled.input`
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.dark};
	padding: 8px;
	font-size: 16px;
`;

export const TaskModalCloseIcon = styled.i`
	position: absolute;
	top: 8px;
	right: 8px;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 24px;
	cursor: pointer;
`;

export const TaskModalTitleInput = styled(TaskModalInput)`
	width: 200px;
`;

export const TaskModalDescriptionTitle = styled.div`
	margin: 8px 0px;
`;

export const TaskModalDescriptionTextArea = styled.textarea`
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.dark};
	padding: 8px;
	font-family: "Arial";
`;

export const TaskModalEstimationSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 16px 0px 0px 0px;
`;

export const TaskModalEstimationInput = styled(TaskModalInput)`
	width: 40px;
	margin-left: 8px;
`;

export const TaskModalAddButton = styled.div`
	margin-top: 16px;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 4px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;

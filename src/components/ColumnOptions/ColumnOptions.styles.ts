import styled from "styled-components";

export const OptionSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 16px;
	padding: 0px 8px;
	cursor: pointer;
`;

export const OptionIcon = styled.i`
	color: ${(props) => props.color};
	font-size: 14px;
`;

export const OptionText = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.disabled};
	margin-left: 8px;
`;

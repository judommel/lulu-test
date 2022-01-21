import styled from "styled-components";
import { AvailableLanguages } from "../../types/types";

export const LanguageSwitcherContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100px;
	border-radius: 16px;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	margin: 16px;
`;

export const LanguageSwitcherButton = styled.div`
	background-color: ${({ title, theme }) =>
		title ? theme.colors.primary : theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	color: ${({ title, theme }) =>
		title ? theme.colors.white : theme.colors.primary};
	cursor: pointer;
	flex: 1;
	text-align: center;
	padding: 8px;
	border-radius: ${(props) =>
		props.id === AvailableLanguages.fr
			? "16px 0px 0px 16px"
			: "0px 16px 16px 0px"};
`;

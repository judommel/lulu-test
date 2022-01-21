import { createGlobalStyle } from "styled-components";
import AvenirMedium from "./Avenir-Medium.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Avenir Medium';
        src: local('Avenir Medium'), local('Avenir Medium'),
        url(${AvenirMedium}) format('ttf'),

    }
`;

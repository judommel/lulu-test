import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import "./i18n/i18n";
import Board from "./screens/Board/Board";
import { useStoredLanguage } from "./utils/hooks";

const App = () => {
	const { languageLoaded } = useStoredLanguage();

	if (!languageLoaded) {
		return null;
	}

	return (
		<>
			<LanguageSwitcher />
			<Board />
		</>
	);
};

export default App;

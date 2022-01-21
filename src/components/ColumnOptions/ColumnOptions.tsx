import { useTranslation } from "react-i18next";

import { colors } from "../../theme";
import { OptionIcon, OptionSection, OptionText } from "./ColumnOptions.styles";

interface ColumnOptionsProps {
	isLocked: boolean;
	onEmptyColumn: () => void;
	toggleLock: () => void;
}

const ColumnOptions = ({
	isLocked,
	onEmptyColumn,
	toggleLock,
}: ColumnOptionsProps) => {
	const { t } = useTranslation();

	return (
		<>
			{!isLocked && (
				<OptionSection onClick={onEmptyColumn}>
					<OptionIcon color={colors.delete} className="fas fa-trash" />
					<OptionText>{t("column.emptyButton")}</OptionText>
				</OptionSection>
			)}
			<OptionSection onClick={toggleLock}>
				<OptionIcon
					color={isLocked ? colors.primary : colors.disabled}
					className={`fa fa-${isLocked ? "un" : ""}lock`}
				/>
				<OptionText>{t(`column.${isLocked ? "unlock" : "lock"}`)}</OptionText>
			</OptionSection>
		</>
	);
};

export default ColumnOptions;

import styles from "./styles.module.scss";

export const Step = ({
	number,
	title,
	onClick,
	active,
}: {
	onClick: any;
	number: number;
	title: string;
	active: boolean;
}) => {
	return (
		<div className={`${styles.step} `} onClick={onClick}>
			<span className={`${styles.number} ${active ? styles.active : ""} `}>
				{number}
			</span>
			<span className={styles.subtitle}>Step {number}</span>
			<p>{title}</p>
		</div>
	);
};

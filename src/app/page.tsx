import styles from "./page.module.css";
import CardProject from "./components/CardProject/CardProject";
import formLogin from "../assets/img/form-login.jpg";
export default function Home() {
	return (
		<main className={styles.main}>
			<CardProject
				src={formLogin}
				link={"/project/form-login"}
				title={"Form Login"}
				description={"Formulario de inicio de sesión"}
			/>
		</main>
	);
}

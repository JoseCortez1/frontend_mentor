import React from "react";
import styles from "./ styles.module.scss";
import Image from "next/image";
import banner from "../../../assets/img/colors.jpg";
const FormLogin = () => {
	return (
		<main className={styles.formLogin}>
			<Image className={styles.banner} src={banner} alt="Banner" />
			<div className={styles.body}>
				<section className={styles.steps}>
					<Step number={1} title={"Tu información"} />
					<Step number={2} title={"Selecciona tu plan"} />
					<Step number={3} title={"ADD-ONS"} />
					<Step number={4} title={"ADD-ONS"} />
				</section>
				<section className={styles.form}>
					<div className={styles.header}>
						<h2>Personal Info</h2>
						<p>We will never share your email with anyone else.</p>
					</div>

					<form>
						<div className={styles.field}>
							<label htmlFor="name">Nombre</label>
							<input placeholder="e.g.Stephen King" type="text" id="name" />
						</div>
						<div className={styles.field}>
							<label htmlFor="email">Email</label>
							<input
								placeholder="e.g.stephenking@lorem.com"
								type="email"
								id="email"
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="phone">Numero de teléfono</label>
							<input placeholder="e.g.+52 3329330193" type="phone" id="phone" />
						</div>
					</form>
				</section>
			</div>
			<div className={styles.submit}>
				<button type="submit">Siguiente paso</button>
			</div>
		</main>
	);
};

export default FormLogin;

const Step = ({ number, title }: { number: number; title: string }) => {
	return (
		<div className={styles.step}>
			<span className={styles.number}>{number}</span>
			<span className={styles.subtitle}>Step {number}</span>
			<p>{title}</p>
		</div>
	);
};

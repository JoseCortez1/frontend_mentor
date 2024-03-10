import style from "./styles.module.scss";

const PersonalInfo = ({ name }: any) => {
	return (
		<div>
			<div className={style.header}>
				<h2>Personal info</h2>
				<p>We will never share your email with anyone else.</p>
			</div>

			<form>
				<div className={style.field}>
					<label htmlFor="name">Nombre</label>
					<input placeholder="e.g.Stephen King" type="text" id="name" />
				</div>
				<div className={style.field}>
					<label htmlFor="email">Email</label>
					<input
						placeholder="e.g.stephenking@lorem.com"
						type="email"
						id="email"
					/>
				</div>
				<div className={style.field}>
					<label htmlFor="phone">Numero de teléfono</label>
					<input placeholder="e.g.+52 3329330193" type="phone" id="phone" />
				</div>
			</form>
		</div>
	);
};

export default PersonalInfo;

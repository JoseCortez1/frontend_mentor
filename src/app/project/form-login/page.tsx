"use client";
import React, { MouseEventHandler, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Background from "./background";
import PersonalInfo from "./personalInfo";
import { Step } from "./step";
const tabs = [
	{
		title: "User Info",
		id: "121-rasar",
		data: {
			type: "personal",
			name: "Stephen King",
			email: "sthepen@king.com",
			phone: "+52 3329330193",
		},
	},
	{
		title: "Favorite Items",
		id: "123-rsat",
		data: {
			type: "fav-items",
			items: [
				{
					id: "item-1",
					name: "The Shining",
				},
				{
					id: "item-2",
					name: "The Stand",
				},
				{
					id: "item-3",
					name: "The Dark Tower",
				},
			],
		},
	},
	{
		title: "Plan",
		id: "125-riat",
		data: {
			type: "plan",
			plan: "The Stand",
		},
	},
	{
		title: "Add-ons",
		id: "125-rsat",
		data: {
			type: "add-ons",
			addons: [
				{
					id: "addon-1",
					name: "The Shining",
				},
				{
					id: "addon-2",
					name: "The Stand",
				},
				{
					id: "addon-3",
					name: "The Dark Tower",
				},
			],
		},
	},
];

const FormLogin = () => {
	const [step, setStep] = useState<null | any>(tabs[0]);

	const stepToRender = ({ data }: any) => {
		switch (data?.type) {
			case "personal":
				return <PersonalInfo name={data.name} />;
			case "plan":
				return <div>{data.plan}</div>;
			case "fav-items":
			case "add-ons":
				return (
					<ul>
						{data[data.items ? "items" : "addons"].map(({ id, name }: any) => {
							return <li key={id}>{name}</li>;
						})}
					</ul>
				);
			default:
				return <div>Default</div>;
		}
	};

	const renderTabs = () => {
		return tabs.map((tab, index) => {
			console.log("tab", tab?.id === step?.id);
			return (
				<Step
					active={step?.id === tab.id}
					key={tab.id}
					number={index + 1}
					title={tab.title}
					onClick={() => setStep(tab)}
				/>
			);
		});
	};

	return (
		<div className={styles.container}>
			<main className={styles.formLogin}>
				<div className={styles.banner}>
					<Background height={"auto"} width={"auto"} />
				</div>
				<div className={styles.body}>
					<section className={styles.steps}>{renderTabs()}</section>
					<section className={styles.form}>{stepToRender(step)}</section>
				</div>
				<div className={styles.submit}>
					<button type="submit">Siguiente paso</button>
				</div>
			</main>
		</div>
	);
};

export default FormLogin;

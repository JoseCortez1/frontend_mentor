import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { title } from "process";
import React, { FunctionComponent } from "react";

interface ICardProjectProps {
	src: StaticImageData;
	link: string;
	title: string;
	description: string;
}
const CardProject: FunctionComponent<ICardProjectProps> = ({
	src,
	link,
	description,
	title,
}) => {
	return (
		<Link href={link}>
			<Image src={src} alt="Project" width={150} height={100} />
			<h2>{title}</h2>
			<p>{description}</p>
		</Link>
	);
};

export default CardProject;

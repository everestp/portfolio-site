"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { AppContext } from "../../../components/AppWrapper/AppWrapper";
import {
	ProjectContainer,
	ProjectInfo,
	ProjectThumbnails,
} from "./project.styles";
import { ListItem, ListItems, SkillsContainer } from "../projects.styles";
import { BsCircleFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const Project = ({ params }: { params: Promise<{ projectId: string }> }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const { languageTexts, theme } = useContext(AppContext)!;

	const projectId = React.use(params).projectId;

	const PROJECT = languageTexts.projects.projectList.find(
		({ id }) => id === projectId
	);

	// Auto-rotate main image every 3 seconds
	useEffect(() => {
		if (!PROJECT?.images.length) return;

		const timer = setInterval(() => {
			setCurrentImageIndex((prev) =>
				prev === PROJECT.images.length - 1 ? 0 : prev + 1
			);
		}, 3000);

		return () => clearInterval(timer);
	}, [PROJECT?.images.length]);

	if (!PROJECT) {
		notFound();
	}

	const images = PROJECT.images;
	const imagesCount = images.length;

	const getNextIndices = (current: number, total: number) => {
		return {
			thumbnail1: (current + 1) % total,
			thumbnail2: (current + 2) % total,
		};
	};

	const { thumbnail1, thumbnail2 } = getNextIndices(currentImageIndex, imagesCount);

	// Safe fallback for primaryColor
	const accentColor = PROJECT.primaryColor || theme.primaryColor;

	return (
		<ProjectContainer>
			<ProjectThumbnails>
				<div className="main-image">
					<Image
						src={images[currentImageIndex]}
						alt={`${PROJECT.name} - Main screenshot`}
						width={1200}
						height={800}
						priority
						className="enlargedImage"
					/>
				</div>

				<div className="thumbnails">
					<Image
						src={images[thumbnail1]}
						alt={`${PROJECT.name} - Preview 1`}
						width={600}
						height={400}
						className="thumbnailImage"
					/>
					<Image
						src={images[thumbnail2]}
						alt={`${PROJECT.name} - Preview 2`}
						width={600}
						height={400}
						className="thumbnailImage"
					/>
				</div>
			</ProjectThumbnails>

			<ProjectInfo $backgroundColor={accentColor}>
				<div className="details">
					<section>
						<h1 className="headingText">
							{languageTexts.projects.description}
						</h1>
						<p>{PROJECT.description}</p>
					</section>

					<section>
						<h1 className="headingText">
							{languageTexts.projects.functionalities}
						</h1>
						<ListItems>
							{PROJECT.functionality.map((item, index) => (
								<ListItem key={index}>
									<BsCircleFill size={8} color={accentColor} />
									<span>{item}</span>
								</ListItem>
							))}
						</ListItems>
					</section>

					<section className="links">
						{PROJECT.livePreview && (
							<a
								href={PROJECT.livePreview}
								target="_blank"
								rel="noopener noreferrer"
								className="livePreviewButton"
							>
								{languageTexts.projects.viewLivePreview}
							</a>
						)}
						{PROJECT.github && (
							<a
								href={PROJECT.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View source on GitHub"
							>
								<SiGithub size="2vw" color={accentColor} />
							</a>
						)}
					</section>
				</div>

				<div className="skillsList">
					<h1 className="headingText">
						{languageTexts.projects.technologies}
					</h1>
					<SkillsContainer>
						{PROJECT.technologies.map(({ icon, name }, index) => (
							<p key={index} className="skill">
								{icon.normal}
								<span>{name}</span>
							</p>
						))}
					</SkillsContainer>
				</div>
			</ProjectInfo>
		</ProjectContainer>
	);
};

export default Project;
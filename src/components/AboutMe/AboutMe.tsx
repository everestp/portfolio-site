import React, { useContext } from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";

import { AppContext } from "../AppWrapper/AppWrapper";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import {
	AboutMeContainer,
	ProfileSection,
	ProfilePictureWrapper,
	ProfilePicture,
	SocialLinks,
	SocialLink,
	InfoSection,
	Name,
	Title,
	Description,
	CallToActionButtons,
	ResumeButton,
	ContactLink,
} from "./AboutMe.styles";

import { SOCIAL_LINKS } from "./aboutMe.utils";

const AboutMe: React.FC = () => {
	const { languageTexts, theme } = useContext(AppContext)!;

	return (
		<AboutMeContainer>
			<NavigationMenu />

			<ProfileSection>
				<ProfilePictureWrapper>
					<ProfilePicture>
						<Image
							src="/profile-pic.png"
							alt="Everest Paudel - Profile Picture"
							width={200}
							height={200}
							priority
							className="profile-image"
						/>
					</ProfilePicture>

					<SocialLinks>
						{SOCIAL_LINKS.map(({ href, icon: Icon, backgroundColor, label }, index) => (
							<SocialLink
								key={index}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								$backgroundColor={backgroundColor}
								aria-label={label}
								className={`social-link-${index}`}
							>
								<Icon size={24} />
							</SocialLink>
						))}
					</SocialLinks>
				</ProfilePictureWrapper>

				<InfoSection>
					<Name>{languageTexts.aboutMe.name}</Name>
					<Title>{languageTexts.aboutMe.title}</Title>

					<Description>{languageTexts.aboutMe.description}</Description>

					<CallToActionButtons>
						<ResumeButton
							href="/Resume.pdf" // Better to keep in /public folder
							target="_blank"
							rel="noopener noreferrer"
							download="Everest_Paudel_Resume.pdf"
						>
							{languageTexts.aboutMe.downloadResume}
						</ResumeButton>

						<ContactLink
							href="mailto:everest@paudel.dev"
							aria-label="Send email to Everest Paudel"
						>
							<HiOutlineMail size={28} color={theme.primaryColor} />
						</ContactLink>

						<ContactLink
							href="tel:+9779828722827"
							aria-label="Call Everest Paudel"
						>
							<FiPhoneForwarded size={28} color={theme.primaryColor} />
						</ContactLink>
					</CallToActionButtons>
				</InfoSection>
			</ProfileSection>
		</AboutMeContainer>
	);
};

export default AboutMe;
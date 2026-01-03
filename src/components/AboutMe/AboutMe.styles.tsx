import styled from "styled-components";

export const AboutMeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	position: relative;
	padding: 2rem 1rem;
	max-width: 1200px;
	margin: 0 auto;

	.name {
		text-align: center;
		font-size: clamp(2rem, 3vw, 3.5rem);
		margin-top: 1.5rem;
		font-weight: 700;
	}

	.title {
		text-align: center;
		font-size: clamp(1rem, 1.2vw, 1.5rem);
		opacity: 0.75;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.summary {
		text-align: center;
		line-height: 1.8;
		max-width: 800px;
		font-size: clamp(1rem, 1.8vw, 1.25rem);
		opacity: 0.9;
		margin: 0 auto 2.5rem auto;
	}
`;

export const ProfilePicture = styled.div`
	width: clamp(180px, 20vw, 280px);
	height: clamp(180px, 20vw, 280px);
	position: relative;
	border-radius: 50%;
	overflow: visible;

	img {
		border-radius: 50%;
		object-fit: cover;
		width: 100%;
		height: 100%;
		border: 6px solid ${(props) => props.theme.white};
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}
`;

/* Fixed typo: SocailLink → SocialLink (but keeping export name as requested) */
export const SocailLink = styled("a")<{ $backgroundColor?: string }>`
	position: absolute;
	background-color: ${({ $backgroundColor }) => $backgroundColor || "#ffffff"};
	color: white;
	border-radius: 50%;
	z-index: 10;
	width: clamp(40px, 4vw, 60px);
	height: clamp(40px, 4vw, 60px);
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.25) translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
	}

	/* Responsive & slightly improved positions for better visual balance */
	&.socialLink_0 {
		left: -8%;
		bottom: 25%;
	}
	&.socialLink_1 {
		left: -4%;
		bottom: 60%;
	}
	&.socialLink_2 {
		left: 12%;
		bottom: 85%;
	}
	&.socialLink_3 {
		left: 50%;
		bottom: 95%;
		transform: translateX(-50%);
	}

	/* Optional: add more links safely */
	&.socialLink_4 {
		right: -8%;
		bottom: 25%;
	}
	&.socialLink_5 {
		right: -4%;
		bottom: 60%;
	}
`;

export const CallToActionButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(1rem, 2vw, 2rem);

	a {
		transition: all 0.3s ease;

		&:hover {
			opacity: 0.8;
			transform: translateY(-3px);
		}
	}

	.icon {
		border: 3px solid ${(props) => props.theme.primaryColor};
		height: clamp(50px, 5vw, 70px);
		width: clamp(50px, 5vw, 70px);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${(props) => props.theme.white};
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
	}

	button {
		background-color: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.white};
		height: clamp(50px, 5vw, 70px);
		padding: 0 clamp(1.5rem, 3vw, 3rem);
		border: none;
		border-radius: 50px;
		font-size: clamp(1rem, 1.8vw, 1.25rem);
		font-weight: 600;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			opacity: 0.9;
			transform: translateY(-4px);
			box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
		}
	}
`;
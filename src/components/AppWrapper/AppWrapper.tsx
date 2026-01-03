"use client";

import { ITheme, THEME } from "@/utils/theme";
import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
	AppContainer,
	ContentContainer,
	GlobalStyle,
} from "./AppWrapper.styles";
import AboutMe from "../AboutMe/AboutMe";
import { ILanguageTexts, LANGUAGE } from "@/utils/text";
import { usePathname } from "next/navigation";

// Define available languages based on what's actually in LANGUAGE
type LanguageKey = keyof typeof LANGUAGE; // Currently just "en"

interface IAppContext {
	theme: ITheme;
	themeType: "light" | "dark";
	toggleTheme: () => void;
	languageTexts: ILanguageTexts;
	currentLanguage: LanguageKey;
	toggleLanguage: () => void;
	isHomePage: boolean;
}

export const AppContext = createContext<IAppContext | null>(null);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const [language, setLanguage] = useState<LanguageKey>("en");

	const pathname = usePathname();
	const isHomePage = pathname === "/";

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	const toggleLanguage = () => {
		// When you add French later, this will automatically work
		// For now, it stays on "en" since that's the only key
		setLanguage((prev) => (prev === "en" ? "en" : "en")); // placeholder
	};

	const appContextValue: IAppContext = {
		theme: THEME[theme],
		themeType: theme,
		languageTexts: LANGUAGE[language], // Now type-safe!
		currentLanguage: language,
		toggleTheme,
		toggleLanguage,
		isHomePage,
	};

	return (
		<AppContext.Provider value={appContextValue}>
			<ThemeProvider theme={THEME[theme]}>
				<GlobalStyle />
				<AppContainer>
					<AboutMe />
					<ContentContainer>{children}</ContentContainer>
				</AppContainer>
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default AppWrapper;
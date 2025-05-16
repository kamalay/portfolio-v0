import { Poppins, Fira_Code, Fira_Sans, Crimson_Pro, Caveat } from "next/font/google";

export const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const firaCode = Fira_Code({
    variable: "--font-firaCode",
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const caveat = Caveat({
    variable: "--font-caveat",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const firaSans = Fira_Sans({
    variable: "--font-firaSans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const crimsonPro = Crimson_Pro({
    variable: "--font-crimsonPro",
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

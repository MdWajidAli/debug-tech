import Image from "next/image";
import { useTheme } from "next-themes";

interface ThemeImageProps {
  srcLight: string;
  srcDark: string;
  alt: string;
  width: number;
  height: number;
}

export default function ThemeImage({
  srcLight,
  srcDark,
  alt,
  width,
  height,
}: ThemeImageProps) {
  const { theme } = useTheme();

  return (
    <>
      <Image
        src={theme === "dark" ? srcDark : srcLight}
        alt={alt}
        width={width}
        height={height}
        className={theme === "dark" ? "hidden" : "block"}
      />
      <Image
        src={srcDark}
        alt={alt}
        width={width}
        height={height}
        className={theme === "dark" ? "block" : "hidden"}
      />
    </>
  );
}

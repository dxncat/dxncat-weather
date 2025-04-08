import { useTheme } from "@/context";
import clsx from "clsx";
import { Moon, Sun, Umbrella } from "lucide-react"
import { useEffect } from "react";

import { Link } from "react-router-dom"

export const Header = () => {

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setTheme(systemTheme);
        }
    }, [theme])

    const isDark = theme === "dark"

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur p-2 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to={"/"}>
                    <Umbrella className={clsx(
                        "font-extrabold size-14",
                        !isDark ? "text-yellow-500" : "text-blue-500",
                    )} />
                </Link>

                <div>
                    <div
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
                    >

                        {isDark ? (
                            <Sun className="size-6 text-yellow-500 rotate-0 transition-all" />
                        ) : (
                            <Moon className="size-6 text-blue-500 rotate-0 transition-all" />
                        )}

                    </div>
                </div>

            </div>
        </header>
    )
}
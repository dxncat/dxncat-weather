import { Cat } from "lucide-react"
import { PropsWithChildren } from "react"
import { Header } from "./Header/Header"

const layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <Header />
            <main className="min-h-screen container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="border-t backdrop-blur py-4 supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center justify-center container mx-auto gap-4 text-gray-400">
                    <span>{new Date().getFullYear()}</span>
                    <span><a href="https://github.com/dxncat" target="_blank">Dxncat</a></span>
                    <Cat />
                </div>
            </footer>
        </div>
    )
}

export default layout
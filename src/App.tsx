import Example from "./Example";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="w-5/6 p-16 m-auto flex flex-col gap-4">
                <Example></Example>
            </div>
        </ThemeProvider>
    );
}

export default App;

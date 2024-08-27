import Example from "./Example";
import { FormExample } from "./FormExample";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="w-5/6 p-16 m-auto flex flex-col gap-4">
                <h1 className="text-xl font-bold">Components</h1>
                <Example></Example>
                <h1 className="text-xl font-bold">Form Example</h1>
                <FormExample></FormExample>
            </div>
        </ThemeProvider>
    );
}

export default App;

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {HashRouter, Route, Routes} from "react-router-dom";
import * as ReactDOM from "react-dom";
import MainComponent from "./components/MainComponent";

const defaultTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#448AFF"
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline>
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                </Routes>
            </CssBaseline>
        </ThemeProvider>
    );
}

function render() {
    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.querySelector("#app")
    );
}

render();
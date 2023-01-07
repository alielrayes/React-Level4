import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "pages/create/Create";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { red, teal } from "@mui/material/colors";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />

      {/* ... etc. */}
    </Route>
  )
);

const darkTheme = createTheme({
  palette: {
    mode: "light",
    // @ts-ignore
    ali: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

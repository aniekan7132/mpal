import { Suspense, lazy } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Features from "./pages/Features";
import Security from "./pages/Security";
import HowToGetStarted from "./pages/HowToGetStarted";
import WhoCanUseMercuryo from "./pages/WhoCanUseMercuryo";
import Commodities from "./pages/Commodities";
import Etfs from "./pages/Etfs";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Figma from "./pages/Figma";
import Kryptocurrency from "./pages/Kryptocurrency";
import Metals from "./pages/Metals";
import Footer from "./components/Footer";
import ChartOverview from "./components/ChartOverview";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5533FF",
      },
      secondary: {
        main: "#7badf9",
      },
    },

    typography: {
      fontFamily: "Gilroy-Medium",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      fontSize: 18,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Figma />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/security" element={<Security />} />
            <Route
              exact
              path="/how-to-get-started"
              element={<HowToGetStarted />}
            />
            <Route
              exact
              path="/who-can-use-mercuryo"
              element={<WhoCanUseMercuryo />}
            />
            <Route exact path="/commodities" element={<Commodities />} />
            <Route exact path="/etfs" element={<Etfs />} />
            <Route exact path="/stocks" element={<Etfs />} />
            <Route exact path="/nav" element={<NavBar />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/cryptocurrency" element={<Kryptocurrency />} />
            <Route exact path="/metals" element={<Metals />} />
            <Route exact path="/footer" element={<Footer />} />
            <Route exact path="/chart-overview" element={<ChartOverview />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

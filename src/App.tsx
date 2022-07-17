import { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { GlobalClassNameProvider } from "./components/GlobalClassNameProvider";
import { Header } from "./components/Header";
import { LanguageProvider } from "./components/LanguageProvider";
import { ResponseGuard } from "./components/ResponseGuard";
import { SemiConfigProvider } from "./components/SemiConfigProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import { WidthProvider } from "./components/WidthProvider";
import { PagePath, PagePathParam } from "./constants/PagePath";
import { BlogArticle } from "./pages/Blog/Article";
import { BlogHomepage } from "./pages/Blog/Homepage";
import { BlogModuleIntroTutorial } from "./pages/Blog/module/IntroTutorial";
import { Resume } from "./pages/Resume";
import "./styles/index.scss";

const Main: FC = () => (
  <Routes>
    <Route path={PagePath.Homepage} element={<main>213</main>} />
    <Route path={PagePath.Blog}>
      <Route path={PagePath.BlogArticle}>
        <Route
          path={`:${PagePathParam.BlogArticleID}`}
          element={<BlogArticle />}
        />
      </Route>
      <Route path={PagePath.BlogModule}>
        <Route
          path={PagePath.BlogModule_IntroTutorial}
          element={<BlogModuleIntroTutorial />}
        />
      </Route>
      <Route path="" element={<BlogHomepage />} />
    </Route>
    <Route path={PagePath.Help}>
      <Route
        path={`:${PagePathParam.BlogArticleID}`}
        element={<BlogArticle />}
      />
    </Route>
    <Route path={PagePath.Resume} element={<Resume />} />
    <Route path={PagePath.Service} element={<main>21fdsdsaf3</main>} />
    <Route path={PagePath.Price} element={<main>21zzz3</main>} />
    <Route path={PagePath.Contracts} element={<main>2dddd13</main>} />
  </Routes>
);

const Providers: FC = ({ children }) => (
  <GlobalClassNameProvider>
    <WidthProvider>
      <LanguageProvider>
        <SemiConfigProvider>
          <ThemeProvider>
            <ResponseGuard />
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeProvider>
        </SemiConfigProvider>
      </LanguageProvider>
    </WidthProvider>
  </GlobalClassNameProvider>
);

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Providers>
      <Header />
      <Main />
      <Footer />
    </Providers>
  );
};

export default App;

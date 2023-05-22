import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import { AppRouteProps } from "./helpers/const";
import MainPage from "./pages/main-page/main-page";
import ReleasePage from "./pages/releses-page/release-page";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={AppRouteProps.Main} element={<MainPage />} />
            <Route path={AppRouteProps.Releases} element={<ReleasePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

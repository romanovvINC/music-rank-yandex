import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import { AppRouteProps } from "./helpers/const";
import MainPage from "./pages/main-page/main-page";

function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path={AppRouteProps.Main} element={<MainPage />}/>
		</Routes>
	</BrowserRouter>
  );
}

export default App;

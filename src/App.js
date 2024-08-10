import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Shorts from "./components/Shorts";
import VideoSearchList from "./components/VideoSearchList";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
              <Route path="shorts" element={<Shorts />} />
              <Route path="search" element={<VideoSearchList />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import "./App.scss";
import logo from "./logo.svg";
import React, { useEffect } from "react";
// eslint-disable-next-line
import MyComponent from "./views/Example/myComponent";
// eslint-disable-next-line
import AppWelcome from "./views/Example/welcome";
// eslint-disable-next-line
import Appcoment from "./views/Example/comment";
// eslint-disable-next-line
import YoutubeList from "./views/Example/YoutubeList";
// eslint-disable-next-line
import Button from "./views/Example/Button";
// eslint-disable-next-line
import Card from "./views/Example/Card";
// eslint-disable-next-line
import Hello from "./views/Example/Hello";
// eslint-disable-next-line
import Button1 from "./views/Example/Button1";
// eslint-disable-next-line
import Usestate2 from "./views/Example/Usestate2";
// eslint-disable-next-line
import Usestate1 from "./views/Example/Usestate1";
// eslint-disable-next-line
import Usestate3 from "./views/Example/Usestate3";
// eslint-disable-next-line
import Usestate4 from "./views/Example/Usestate4";
// eslint-disable-next-line
import Usestate5 from "./views/Example/Usestate5";
// eslint-disable-next-line
import Profile from "./views/Example/Profile";
// eslint-disable-next-line
import Info from "./views/Example/Info";
// eslint-disable-next-line
import Avatar from "./views/Example/Avatar";
// eslint-disable-next-line
import ArrowFunction from "./views/Example/ArrowFunction";
// eslint-disable-next-line
import UseEffect from "./views/Example/UseEffect";
// eslint-disable-next-line
import Usestate6 from "./views/Example/Usestate6";
// eslint-disable-next-line
import XS_1706_1 from "./views/Example/XS_1706_1";
// eslint-disable-next-line
import XS_1706_2 from "./views/Example/XS_1706_2";
// eslint-disable-next-line
import XS_1706_3 from "./views/Example/XS_1706_3";
// eslint-disable-next-line
import OnTap from "./views/Example/OnTap";
// eslint-disable-next-line
import OnTap1 from "./views/Example/OnTap1";
// eslint-disable-next-line
import OnTap2 from "./views/Example/OnTap2";
// eslint-disable-next-line
import OnTap3 from "./views/Example/OnTap3";
// eslint-disable-next-line
import OnTap4 from "./views/Example/OnTap4";
// eslint-disable-next-line
import OnTap5 from "./views/Example/OnTap5";
// eslint-disable-next-line
import { Video31 } from "./views/Example/Video31";
// eslint-disable-next-line
// eslint-disable-next-line
import { OnTap7 } from "./views/Example/OnTap7";
// eslint-disable-next-line
import { OnTap8 } from "./views/Example/OnTap8";
// eslint-disable-next-line
import { OnTap9 } from "./views/Example/OnTap9";
// eslint-disable-next-line
import { OnTap10 } from "./views/Example/OnTap10";
// eslint-disable-next-line
import { OnTap11 } from "./views/Example/OnTap11";
// eslint-disable-next-line
import { Video32 } from "./views/Example/Video32";
// eslint-disable-next-line
import { Video33 } from "./views/Example/Video33";
// eslint-disable-next-line
import { OnTap12 } from "./views/Example/OnTap12";
// eslint-disable-next-line
import { Video34 } from "./views/Example/Video34";
// eslint-disable-next-line
import { OnTap13 } from "./views/Example/OnTap13";
// eslint-disable-next-line
import { Video35 } from "./views/Example/Video35";
// eslint-disable-next-line
import { Video36 } from "./views/Example/Video36";
// eslint-disable-next-line
import { Video37 } from "./views/Example/Video37";
// eslint-disable-next-line
import { OnTap14 } from "./views/Example/OnTap14";
// eslint-disable-next-line
import { OnTap15 } from "./views/Example/OnTap15";
// eslint-disable-next-line
import { Video38 } from "./views/Example/Video38";
// eslint-disable-next-line
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import AlbumFeature from "./features/Album";
import StoryFeature from "./features/Story";
import TodoFeature from "./features/Todo";
import productsApi from "./api/productApi";
/**
 * 2 components : class component / function component ( function, arrow)
 */
// function components :function App()
// arrow function : const App = () => {
// Class Component
// class App extends React.Component {
//   render() {

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productsApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="menu-header">
          <Link className="menu-header__item" to="/">
            Home
          </Link>
          <Link className="menu-header__item" to="/todos">
            Todos
          </Link>
          <Link className="menu-header__item" to="/albums">
            Album
          </Link>
          <Link className="menu-header__item" to="/stories">
            Story
          </Link>
        </div>

        {/* <NavLink to="/todos">Todos</NavLink> */}
        {/* <Navigate from="/home" to="/" /> */}
        <Routes>
          {/* <Route path="/" element={<TodoFeature />} /> */}
          <Route path="/todos" element={<TodoFeature />} />
          <Route path="/albums" element={<AlbumFeature />} />
          <Route path="/stories" element={<StoryFeature />} />
        </Routes>
        <p>
          <AppWelcome />
          <StoryFeature />
          <AlbumFeature />
          <TodoFeature />
          <Video38 />
          <OnTap15 />
          <OnTap14 />
          <OnTap13 />
          <Video37 />
          <Video36 />
          <Video35 />
          <Video34 />
          <OnTap12 />
          <Video33 />
          <Video32 />
          <OnTap11 />
          <OnTap10 />
          <OnTap9 />
          <OnTap8 />
          <OnTap7 />
          {/* <Video31_1/> */}
          <Video31 />
          <OnTap5 />
          <OnTap />
          <OnTap1 />
          <OnTap2 />
          <OnTap3 />
          <OnTap4 />
          <UseEffect />
          <Usestate6 />
          <Appcoment />
          <MyComponent />
          <YoutubeList />
          <Usestate2 />
          <Usestate1 />
          <Usestate3 />
          <Usestate4 />
          <Usestate5 />
          <ArrowFunction />
          <Avatar />
          <Info />
          <section>
            <h1>Amazing Profile</h1>
            <Profile />
            <Profile />
          </section>
          <Hello></Hello>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button>Hello</Button>
          <Button>Click</Button>
        </div>
        <Card>
          <Button>Save</Button>
          <Button>Delete</Button>
          <Button>Click!</Button>
          <Button1 />
          <div>
            Description : A Gatsby.js theme for building beautiful, modern
            websites and apps.
          </div>
        </Card>
        <XS_1706_1 />
        <XS_1706_2 />
        <XS_1706_3 />
      </header>
    </div>
  );
}

export default App;

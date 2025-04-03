import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./Home/Home";
import HOC from "./HOC/HOC";
import Context from "./ContextHook/Context";
import MemoComp from "./Memo/MemoComp";
import ReduxComp from "./Redux/redux";
import Refcomp from "./Ref/refcomp";
import Callbacks from "./Callbacks/Callbacks";
import CustomHook from "./CustomHook/CustomHook";
import Effects from "./EffectHook/Effects";
import Parent from "./Props/parent";
import SearchItem from "./Search/search";
import Todo from "./Todo/todo";
import Timer from "./Timer/timer";

// BrowserRouter
//BrowserRouter is a component from the react-router-dom library
//uses the HTML5 history API to manage navigation
//It enables clean and human-readable URLs without hash fragments (like #),
// making them more SEO-friendly and easier for users to share.
//When you use BrowserRouter, the browser's URL changes, and
// the React application updates its UI accordingly, without a full page reload.
//Wraps the app to enable navigation between pages without refreshing the browser.

//Routes:
//Groups all defined routes for the app to ensure only one route is shown at a time.

// Link: Provides clickable navigation links to switch between pages

//use the useLocation(),useRouter() hook to get the current route
//window.location.href contains other properties that give more information on the URL

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/hoc" element={<HOC/>} />
          <Route path="/context" element={<Context/>} />
          <Route path="/memo" element={<MemoComp/>} />
          <Route path="/redux" element={<ReduxComp/>} />
          <Route path="/ref" element={<Refcomp/>} />
          <Route path="/callback" element={<Callbacks/>} />
          <Route path="/custom" element={<CustomHook/>} />
          <Route path="/effect" element={<Effects/>} />
          <Route path="/props" element={<Parent/>} />
          <Route path="/search" element={<SearchItem/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/timer" element={<Timer/>} />
          <Route path="*" element={"Page not found"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

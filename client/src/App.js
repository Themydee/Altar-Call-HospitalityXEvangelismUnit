import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';  

function App() {
  return (
    <div className="app ">
      <BrowserRouter>
        <Routes>
          <Route path="/" >

            <Route index element={<Home />}/>

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
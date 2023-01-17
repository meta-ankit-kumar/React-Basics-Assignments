import { Main } from "./components/main";
import { Route, Routes } from "react-router-dom"
import { Chapter10 } from "./components/chapter10";

function App() {
  return (
    <>
    <Routes>
    <Route path="/React-Basics-Assignments/" element={ <Main />} />
		  <Route path="/React-Basics-Assignments/todo-app/*" element={<Chapter10 />} />
		  {/* <Route exact path="/lists" element={<div>List of todos</div>} /> */}
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Pages/Add"
import View from "./Pages/view"
import Edit from "./Pages/Edit"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Add />} />
          <Route path={'/view'} element={<View />} />
          <Route path={'/edit/:editid'} element={<Edit />}>Edit</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

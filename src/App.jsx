import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TreeInformation from "./pages/TreeInformation";
import Region from "./pages/Region";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/treeInformation" element={<TreeInformation />} />
        <Route path=":name" element={<Region />} />
      </Route>
    </Routes>
  );
}

export default App;

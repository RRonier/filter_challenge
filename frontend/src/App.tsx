import Navbar from "./components/ui/Navbar/Navbar";
import TableContainer from "./pages/TableContainer";

import "./index.css";

const App = () => (
  <div>
    <Navbar />
    <div className="w-full p-8">
      <TableContainer />
    </div>
  </div>
);

export default App;

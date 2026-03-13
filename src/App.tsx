import CreateQr from "./components/CreateQr";
import Readqr from "./components/ReadQr";

function App() {
  return (
    <div className="container-fluid">
      <h1 className="my-5 text-center display-2">React QR Code Generator</h1>

      <div className="row">
        <CreateQr />
        <Readqr />
      </div>
    </div>
  );
}

export default App;

import Content from "./components/Content";
import Header from "./header";

function App() {
  
  return(
    <div className="h-[100dvh]">
      <Header/>
      <div className="bg-[rgb(255,228,196)] w-100 h-full">
        <Content/>
      </div>
    </div>
  );
}

export default App

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Allroutes } from "./routes/Allroutes";

function App() {
  //console.log(process.env.TMDB_API_KEY)
  return (
   <div>
    <Header/>
    <Allroutes />
    <Footer />
   </div>
  );
}

export default App;

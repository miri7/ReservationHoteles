import Featured from "../../components/feature/Featured"
import FeatureProperties from "../../components/featureProperties/FeatureProperties"
import Header from "../../components/header/Header"
import Navbar from "../../components/Navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Navegar por todo lugar</h1>
        <PropertyList/>
        <h1 className="homeTitle">Hogares que los huespedes adoran</h1>
        <FeatureProperties/>
      </div>
    </div>
  )
}

export default Home

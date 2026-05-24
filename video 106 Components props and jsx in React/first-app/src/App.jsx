import Navbar from "./components/Navbar"      //import kiya gya hai

import Footers from "./components/Footers"       //import kya hai

import Card from "./components/Card"       //import kya hai

function App() {

  return (
    <>
      <Navbar/>

      <div className="cards">

        <Card title="Card1" description="card 1 description"/>
        <Card title="Card1" description="card 1 description"/>
        <Card title="Card1" description="card 1 description"/>
        <Card title="Card1" description="card 1 description"/>

      </div>

      <Footers/>

    </>
  )
}

export default App

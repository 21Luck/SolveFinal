import React from 'react'
import {Header, Footer, Testominials, Workflow, Services, Hero} from './componets/index'
const App = () => {
  return (
   <>
   <Header />
   <div className="max-w-7xl mx-auto sm:px-4 md:px-6 bg-black">
    <Hero />
    <Services />
    <Workflow />
    <Testominials />
    <Footer />
   </div>
   </>
  )
}

export default App

import BlogSection from "../components/BlogSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Site from "../components/Site"
import './pages.css'

function Javascript() {
  return (<>
    <div className="header-content">
    <Site />
   <Header />
</div>
    <div>
        < BlogSection Title="Basics of JavaScript" Content="JavaScript: The language of the web. It brings interactivity to websites, enhances user experience, and empowers developers to create dynamic conte"/>
    </div>
      <Footer />
      </>
  )
}

export default Javascript

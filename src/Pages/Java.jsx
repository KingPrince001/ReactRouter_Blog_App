import BlogSection from "../components/BlogSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Site from "../components/Site"
import './pages.css'

function Java() {
  return (<>
   <div className="header-content">
    <Site />
   <Header />
   </div>
    <div>
      
    <BlogSection Title="Java Basics" Content="Java: A robust and widely-used language. It enables cross-platform development, offers strong object-oriented programming capabilities, and powers countless applications." />
    </div>
    <Footer />
    </>
  )
}

export default Java

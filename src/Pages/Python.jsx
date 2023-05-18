import BlogSection from "../components/BlogSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Site from "../components/Site"
import './pages.css'

function Python() {
  return (<>
    <div className="header-content">
    <Site />
   <Header />
   </div>
    <div>
    <BlogSection Title="Python Basics" Content="Python: A versatile and beginner-friendly language. It excels in simplicity, readability, and offers extensive libraries for diverse applications."/>
    </div>
    <Footer />
    </>
  )
}

export default Python

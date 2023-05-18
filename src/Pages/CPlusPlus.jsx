import BlogSection from "../components/BlogSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Site from "../components/Site"
import './pages.css'

function CPlusPlus() {
  return (<>
    <div className="header-content">
    <Site />
   <Header />
   </div>
    <div className="content-body">
    <BlogSection Title="C++ Basics" Content="Getting Started with C++: An Introduction to Variables, Functions, and Object-Oriented Programming Concepts for Beginners"/>
    </div>
    <Footer />
    </>
  )
}

export default CPlusPlus

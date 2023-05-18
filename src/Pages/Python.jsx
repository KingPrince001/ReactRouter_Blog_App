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
    <div className="content-body">
    <BlogSection Title="Python Basics" Content="Python: A versatile and beginner-friendly language. It excels in simplicity, readability, and offers extensive libraries for diverse applications.Python, a versatile and beginner-friendly programming language, has gained immense popularity in recent years. Its simplicity, readability, and extensive library support make it a top choice for a wide range of applications, from web development to data analysis and machine learning. In this blog, we will embark on a journey into the world of Python, starting from the fundamentals and progressing towards advanced techniques. Whether you're a novice programmer or an experienced developer, this guide will provide valuable insights and practical examples to enhance your Python skills."/>
    </div>
    <Footer />
    </>
  )
}

export default Python

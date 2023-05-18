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
    <div className="content-body">
      
    <BlogSection Title="Java Basics" Content="Java: A robust and widely-used language. It enables cross-platform development, offers strong object-oriented programming capabilities, and powers countless applications.Java, a robust and versatile programming language, has been a cornerstone of software development for decades. Its platform independence, extensive libraries, and object-oriented nature make it a popular choice for a wide range of applications. In this blog, we will embark on a journey into the world of Java, starting from the fundamentals and progressing towards advanced concepts. Whether you're a beginner or an experienced programmer looking to expand your knowledge, this guide will provide valuable insights and practical examples to enhance your Java skills." />
    </div>
    <Footer />
    </>
  )
}

export default Java

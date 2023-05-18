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
    <BlogSection Title="C++ Basics" Content="Getting Started with C++: An Introduction to Variables, Functions, and Object-Oriented Programming Concepts for Beginners.C++ is a powerful and versatile programming language known for its performance, efficiency, and extensive capabilities. It is widely used in various domains, including systems programming, game development, and high-performance computing. In this blog, we will delve into the world of C++, starting from the basics and progressing towards advanced concepts. Whether you're a beginner or an experienced programmer looking to expand your knowledge, this guide will provide valuable insights and practical examples to enhance your C++ skills."/>
    </div>
    <Footer />
    </>
  )
}

export default CPlusPlus

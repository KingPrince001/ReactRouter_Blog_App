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
    <div className="content-body">
        < BlogSection Title="Basics of JavaScript" Content="JavaScript: The language of the web. It brings interactivity to websites, enhances user experience, and empowers developers to create dynamic content.Introduction:

JavaScript, the versatile programming language, has become the backbone of modern web development. Its ability to bring interactivity, dynamism, and functionality to websites has made it an essential tool for developers worldwide. In this blog, we'll take a journey into the world of JavaScript, starting from the basics and progressing towards advanced techniques. Whether you're a beginner or an experienced developer looking to expand your knowledge, this guide will provide valuable insights and practical examples to enhance your JavaScript skills."/>
    </div>
      <Footer />
      </>
  )
}

export default Javascript

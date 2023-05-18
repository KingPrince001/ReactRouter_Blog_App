import Header from '../components/Header';
import Footer from '../components/Footer';
import Site from '../components/Site'

import BlogSection from "../components/BlogSection"
import HighlightsSection from "../components/HighlightsSection"

function Blogs() {
  return (
    <>
          <div className="header-content">
          <Site />
<Header />
      
      </div>
    <div className="master-container">
    <div className="blog-column">
        < BlogSection Title="Basics of JavaScript" Content="JavaScript: The language of the web. It brings interactivity to websites, enhances user experience, and empowers developers to create dynamic conte"/>
    
    <BlogSection Title="Python Basics" Content="Python: A versatile and beginner-friendly language. It excels in simplicity, readability, and offers extensive libraries for diverse applications."/>
  
  <BlogSection Title="Java Basics" Content="Java: A robust and widely-used language. It enables cross-platform development, offers strong object-oriented programming capabilities, and powers countless applications." />
  <BlogSection Title="C++ Basics" Content="Getting Started with C++: An Introduction to Variables, Functions, and Object-Oriented Programming Concepts for Beginners"/>
  <BlogSection Title="HTML Basics" Content="HTML Basics: A Beginner's Guide to the Building Blocks of the Web - Tags, Structure, and Creating Web Pages."/>
       </div>
       <div className="highlights">
  <HighlightsSection sectionTitle="Highlights" />
       </div>
       </div>
       <Footer />
       </>
  )
}

export default Blogs

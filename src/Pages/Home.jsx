import Header from '../components/Header';
import Footer from '../components/Footer';
import Site from '../components/Site';
import './home.css'
import javascript from '../components/img/javascript.jpeg'
import java from '../components/img/java.jpeg'
import cplusplus from '../components/img/c++.jpeg'
import python from '../components/img/python.jpeg'
import { Link } from "react-router-dom";



function Home() {
    return (
      <>
      <div className="header-content">
             <Site />
            <Header />
      </div>

<main>
<section>
  <h2 className='section-titles'><span className="first-letter">f</span> <span className="second-letter">eatured</span> <span className="first-letter">c</span><span className="second-letter">ontent</span></h2>
  <div className="featured-posts">
   
    <div className="post-card">
      <img src={cplusplus} alt="Featured Post 1"/>
      <h3>C++</h3>
      <p>An Introduction to Variables, Functions, and Object-Oriented Programming Concepts ...</p>
      <button className='btn'><Link to="/cplusplus" className='read-more'>Read More</Link></button>
      
    </div>

    <div className="post-card">
      <img src={python} alt="Featured Post 2"/>
      <h3>Python</h3>
      <p>A versatile and beginner-friendly language.It excels in simplicity, readability...</p>
      <button className='btn'><Link to="/python" className='read-more'>Read More</Link></button>
    </div>

    
  </div>
</section>

<section>
  <h2 className='section-titles'><span className="first-letter">l</span><span className="second-letter">atest</span> <span className="first-letter">a</span><span className="second-letter">rticles</span></h2>
  <div className="featured-posts">
   
  <div className="post-card">
      <img src={python} alt="Featured Post 2"/>
      <h3>Python</h3>
      <p>A versatile and beginner-friendly language.It excels in simplicity, readability...</p>
      <button className='btn'><Link to="/python" className='read-more'>Read More</Link></button>
    </div>

    <div className="post-card">
    <img src={java} alt="Popular Article 2"/>
      <h3>Java</h3>
      <p>A robust and widely-used language. It enables cross-platform development, offers strong ...</p>
      <button className='btn'><Link to="/java" className='read-more'>Read More</Link></button>
    </div>

  
  </div>
</section>



<section>
  <h2 className='section-titles'> <span className="first-letter">p</span><span className="second-letter">opular</span> <span className="first-letter">A</span><span className="second-letter">rticles</span></h2>
  <div className="popular-articles">
   
    <div className="popular-article">
      <img src={javascript} alt="Popular Article 1"/>
      <h3>JavaScript</h3>
      <p>The language of the web. It brings interactivity to websites, enhances user ...</p>
      <button className='btn'><Link to="/javascript" className='read-more'>Read More</Link></button>
    </div>

    <div className="popular-article">
      <img src={java} alt="Popular Article 2"/>
      <h3>Java</h3>
      <p>A robust and widely-used language. It enables cross-platform development, offers strong ...</p>
      <button className='btn'><Link to="/java" className='read-more'>Read More</Link></button>
    </div>

   
  </div>
</section>
</main>
    
      <Footer />
      </>
    );
  }
  
  export default Home
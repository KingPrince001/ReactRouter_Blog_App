import Header from '../components/Header';
import Footer from '../components/Footer';
import Site from '../components/Site';
import './home.css'
function Home() {
    return (
      <>
      <div className="header-content">
             <Site />
            <Header />
      </div>

<main>
<section>
  <h2>Featured Content</h2>
  <div class="featured-posts">
    {/* <!-- Display featured articles or blog posts as cards or thumbnails --> */}
    <div class="post-card">
      {/* <img src="image1.jpg" alt="Featured Post 1"> */}
      <h3>Article Title 1</h3>
      <p>Description or teaser of the article.</p>
      <a href="article1.html">Read More</a>
    </div>

    <div class="post-card">
      {/* <img src="image2.jpg" alt="Featured Post 2"> */}
      <h3>Article Title 2</h3>
      <p>Description or teaser of the article.</p>
      <a href="article2.html">Read More</a>
    </div>

    {/* <!-- Add more featured post cards as needed --> */}
  </div>
</section>

<section>
  <h2>Latest Articles</h2>
  <div class="latest-articles">
    {/* <!-- Display snippets of the most recent articles --> */}
    <div class="article-snippet">
      <h3>Article Title 1</h3>
      <p>Description or teaser of the article.</p>
      <a href="article1.html">Read More</a>
    </div>

    <div class="article-snippet">
      <h3>Article Title 2</h3>
      <p>Description or teaser of the article.</p>
      <a href="article2.html">Read More</a>
    </div>

    {/* <!-- Add more article snippets as needed --> */}
  </div>
</section>

<section>
  <h2>Categories</h2>
  <ul class="categories-list">
    {/* <!-- List the main categories or topics --> */}
    <li><a href="category1.html">Category 1</a></li>
    <li><a href="category2.html">Category 2</a></li>
    <li><a href="category3.html">Category 3</a></li>
    {/* <!-- Add more categories as needed --> */}
  </ul>
</section>

<section>
  <h2>Popular Articles</h2>
  <div class="popular-articles">
    {/* <!-- Display popular articles with thumbnails or snippets --> */}
    <div class="popular-article">
      {/* <img src="image3.jpg" alt="Popular Article 1"> */}
      <h3>Article Title 1</h3>
      <p>Description or teaser of the article.</p>
      <a href="article1.html">Read More</a>
    </div>

    <div class="popular-article">
      {/* <img src="image4.jpg" alt="Popular Article 2"> */}
      <h3>Article Title 2</h3>
      <p>Description or teaser of the article.</p>
      <a href="article2.html">Read More</a>
    </div>

    {/* <!-- Add more popular articles as needed --> */}
  </div>
</section>
</main>
    
      <Footer />
      </>
    );
  }
  
  export default Home
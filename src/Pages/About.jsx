import Header from '../components/Header';
import Footer from '../components/Footer';
import Site   from '../components/Site';
import './about.css';

function About() {
  return (
    <>
          <div className="header-content">
          <Site />
<Header />
 
      </div>
      
  <main>
    <section>
      <h2>Introduction</h2>
      <p>Welcome to Your Blog Name, where we share our passion for [topics you cover]. Expect insightful articles, helpful tips, and engaging content that [describe what readers can expect from your blog].</p>
    </section>

    <section>
      <h2>Background</h2>
      <p>I am [Your Name], [your expertise or relevant qualifications]. With [years of experience or specific accomplishments], I aim to provide valuable information and perspectives in the [topics you cover] field.</p>
    </section>

    <section>
      <h2>Our Purpose</h2>
      <p>At Your Blog Name, our purpose is to [describe the purpose of your blog and what you hope to achieve]. We want to [mention the motivation behind starting the blog and the impact you aim to make].</p>
    </section>

    <section>
      <h2>Topics Covered</h2>
      <p>On this blog, we cover a wide range of topics, including [list the main topics or categories you cover]. Whether you're interested in [specific topic], [another specific topic], or [another specific topic], you'll find valuable content and resources here.</p>
    </section>

    <section>
      <h2>Our Unique Perspective</h2>
      <p>What sets us apart is our unique perspective on [topics you cover]. We believe in [specific beliefs or principles] and strive to [explain your approach or angle in addressing the topics]. This allows us to bring fresh insights and ideas to our readers.</p>
    </section>

    <section>
      <h2>Value for Readers</h2>
      <p>Our blog is designed to provide value to our readers. Through our articles, guides, and resources, we aim to [explain how your content can help readers solve problems, learn new skills, gain insights, or be entertained]. We are dedicated to helping you [specific benefits readers can expect from your content].</p>
    </section>

    <section>
      <h2>Engage with Us</h2>
      <p>We love to engage with our readers and foster a sense of community. You can connect with us through [mention channels where readers can engage with you, such as comments, social media, or newsletter subscription]. Join the conversation and become a part of our growing community!</p>
    </section>

    <section>
      <h2>Our Mission</h2>
      <p>Our mission at Your Blog Name is to [describe your mission statement or the overall impact you aim to make with your blog]. We believe that through [specific actions or values], we can make a positive difference in the lives of our readers.</p>
    </section>

    <section>
      <h2>Get in Touch</h2>
      <p>Thank you for visiting our blog! To stay updated with our latest articles and receive exclusive content, subscribe to our newsletter or follow us on [mention social media platforms]. We look forward to connecting with you!</p>
    </section>
  </main>
      <Footer />
    </>
  )
}

export default About

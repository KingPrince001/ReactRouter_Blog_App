const BlogSection= ({Title,Content,button}) =>{
    return (
        <div className="blog-section">
            <h2 className="blog-title">{Title}</h2>
            <p className="blog-content">{Content}</p>
            <button className="btn">{button}</button>
        </div>
    );
}
export default BlogSection;
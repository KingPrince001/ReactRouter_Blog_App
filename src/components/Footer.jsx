import image from './img/7.jpg'
const Footer=() =>{
    
        const year= new Date().getFullYear();
        const date= new Date().getDate();
        const month= new Date().getMonth() +1;
    
    return(
        <div className="footer">
            <p className='ceo'>
                Blog Medium © {date} / {month} / {year}
            </p>
<img className='image' src={image} alt="CEO" />

        </div>
    )
}
export default Footer
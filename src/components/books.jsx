const Book = ({picture,title,description,carnames}) =>{

    function print(title,carn){
        console.log(`სათური: ${title}`)
        console.log("პერსონაჟბი: ")
        carn.map((n)=>{console.log(n)})
    }

    return(
        <div className="book">
            <img src={picture} alt="book-pic" />
            <h1 className="title">{title}</h1>
            <h3 className="desc">{description}</h3>
            <p><b>პერსონაჟები:</b> </p>
            {carnames.map((carac)=><p key={carac}>{carac}</p>)}
            <button className="btn" onClick={()=>print(title,carnames)}>Print</button>
        </div>
    )
}

export default Book
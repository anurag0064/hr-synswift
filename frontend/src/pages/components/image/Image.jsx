const Image = ({url,width,height}) => {
    return(
        <>
         <div className="image text-center">
                <img src={url} className="image-1"></img>
                </div>
        </>
    )
}
export default Image;
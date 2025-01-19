
const Product = ({ productList }) => {
    // console.log(productList);
    // const {title, rating:{rate},price,image } = props.productList;
  
    const {
      title,
      rating: { rate },
      price,
      image,
      description,
    } = productList;
  
    return (
      <div className="product">
        <img className="images"  style={{ width:"100px", height:"150px"}}src={image} alt="T-shirt" />
        <h3 className="title">
          {title.slice(0, 30)}
          {title.length > 30 ? "..." : ""}{" "}
        </h3>
        <h6 className="des">{description.slice(0,30)} {description.length > 30 ? '...' : ""}</h6>
        <p>
          Rating: {rate} <span>⭐</span>
        </p>
        <h4>Price: ${price} </h4>
      </div>
    );
  };

  export default Product;
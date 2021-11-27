import "./Product.scss";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle" style={{ backgroundColor: "#FF5733" }}></div>
        <div className="p-circle" style={{ backgroundColor: "#F1C40F" }}></div>
        <div className="p-circle" style={{ backgroundColor: "#2ECC71" }}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="example page" className="p-img" />
      </a>
    </div>
  );
};

export default Product;

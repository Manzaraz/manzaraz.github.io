import Product from "../product/Product";
import "./ProductList.scss";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-bg"></div>
      <div className="pl-texts">
        <h3 className="pl-title">Create & Inspire, It's Manzi</h3>
        <p className="pl-desc">
          Manzi is a creative portfolio that your work has been waiting beutiful
          homes, stunning portfolio styles & a whole lot more inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((el) => (
          <Product key={el.id} img={el.img} link={el.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

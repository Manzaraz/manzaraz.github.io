import classes from "./Product.module.scss";

const Product = ({ img, link }) => {
  return (
    <section className={classes.p} id="portfolio">
      <div className={classes.p__browser}>
        <div
          className={classes.p__circle}
          style={{ backgroundColor: "#FF5733" }}
        ></div>
        <div
          className={classes.p__circle}
          style={{ backgroundColor: "#F1C40F" }}
        ></div>
        <div
          className={classes.p__circle}
          style={{ backgroundColor: "#2ECC71" }}
        ></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="example page" className={classes.p__img} />
      </a>
    </section>
  );
};

export default Product;

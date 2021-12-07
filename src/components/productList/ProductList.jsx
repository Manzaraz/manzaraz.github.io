import Product from "../product/Product";
import classes from "./ProductList.module.scss";
import { products } from "../../helpers/data";
import { useTranslation } from "react-i18next";

const ProductList = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={classes.pl}>
      {/* <div className={classes.pl__bg}></div> */}
      <div className={classes.pl__texts}>
        <h3 className={`${classes.pl__title} pl-title`}>
          {t("product.pl-title")}
        </h3>
        <p className={`${classes.pl__desc} pl-desc`}>{t("product.pl-desc")}</p>
      </div>
      <div className={classes.pl__list}>
        {products.map((el) => (
          <Product
            key={el.id}
            img={el.img}
            link={el.link}
            className={classes.pl__product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

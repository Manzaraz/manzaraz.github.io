import Product from "../product/Product";
import classes from "./ProductList.module.scss";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { products } from "../../helpers/data";
import { useTranslation } from "react-i18next";
import DeviceDetect from "../../helpers/deviceDetect";

const ProductList = () => {
  const [t] = useTranslation("global");
  let elements = [];

  DeviceDetect() === "Mobile"
    ? (elements = products.slice(0, 2))
    : (elements = products);

  return (
    <div id="portfolio" className={classes.pl}>
      <div className={classes.pl__texts}>
        <h3 className={`${classes.pl__title} pl-title`}>
          {t("product.pl-title")}
        </h3>
        <p className={`${classes.pl__desc} pl-desc`}>{t("product.pl-desc")}</p>
      </div>
      <div className={classes.pl__list}>
        {elements.map((el) => (
          <figure className={classes.pl__p}>
            <Product
              key={el.id}
              img={el.img}
              link={el.link}
              className={classes.pl__p__product}
            />
            <figcaption classname={classes.pl__figcaption}>
              <a
                className={classes.pl__figcaption__site}
                href={el.link}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className={classes.pl__figcaption__repo}
                href={el.repo}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub /> Repo
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

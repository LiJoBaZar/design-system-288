import { log } from "console";
import { classNames } from "../shared/classNames";
import styles from "./Card.module.scss";
import { Button } from "../atoms/Button";

export interface CardProps {
  title: string,
  data: Array<any>,
  size?: "large" | "medium" | "small",
  mode?: "light" | "dark";
  img?: string;
  alt?: string;
  link?: Array<any> | undefined;

}

export const Card = ({ title, data, mode = "light", size = "small", img = "", alt = "", link }: CardProps) => {
  const classNameContainer = {
    className: classNames(styles['card'], styles[`card--${mode}`], styles[`card--${size}`])
  }


  const showImage = (img: string, alt: string) => {
    let element = (<></>);

    if (img) {
      console.log('show image');
      element = (
        <div className={styles[`imageContainer`]}>
          <img src={img} alt={alt} className={styles[`imageContainer--img`]} />
        </div>
      )
    }
    return element
  }

  const showEnlace = (link: Array<any> = [], size: string) => {
    let element = (<></>);

    if (link.length === 2) {

      if (size !== 'large') {
        element = (
          <Button href={link[1]} size="small">{link[0]}</Button>
        )
      } else {
        element = (
          <Button href={link[1]}>{link[0]}</Button>
        )
      }
    }

    return element
  }

  return (
    <div {...classNameContainer}>
      {showImage(img, alt)}
      <h2>{title}</h2>
      <div className={styles[`dataContainer`]}>
        {data.map(element => (
          <p className={styles[`dataContainer--p`]}>{element[0]}: <span className={styles[`dataContainer--span`]}>{element[1]}</span></p>
        ))}
      </div>
      {showEnlace(link, size)}
    </div>
  );
};
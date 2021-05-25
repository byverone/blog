import React from "react";
import Link from "next/link";
import Image from "./image";
import Cardi from 'react-bootstrap/Card'
import styles from '../styles/./styles.module.css'

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]" className={styles.bgLight}>
      <a className={styles.bgLight,"uk-link-reset"} style={{marginTop: "12px"}}>
        <Cardi style={{ width: "30rem"}}>
	  <Cardi.Img variant="top" as={Image} image={article.image}>
	  </Cardi.Img>
          <Cardi.Title className={styles.cardSides}>
            <h4 id="title" className={styles.fontBold,styles.cardTitleTop}>
              {article.title}
            </h4>
	  </Cardi.Title>
	  <Cardi.Text className={styles.cardSides}>
            <h6 id="category">
              {article.category.name}
            </h6>
          </Cardi.Text>
        </Cardi>
      </a>
    </Link>
  );
};

export default Card;

import { getStrapiMedia } from "../lib/media";
import styles from '../styles/./styles.module.css';

const Image = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
	  	<div className={styles.backdrop}> 
		<img
			src={imageUrl}
      			alt={image.alternativeText || image.name}
      			style={style}
    		/>
	  </div>
  );
};

export default Image;

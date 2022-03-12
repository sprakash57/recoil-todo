import { useRecoilValue } from "recoil";
import { userState } from "store/header";
import styles from './index.module.css';

const Image = () => {
    const { picture } = useRecoilValue(userState);
    return (
        <figure>
            <img src={picture.thumbnail} alt="Avatar" className={styles.img} />
        </figure>
    )
}

export default Image;

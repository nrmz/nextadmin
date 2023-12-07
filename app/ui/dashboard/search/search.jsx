import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} class={styles.input} />
    </div>
  );
};

export default Search;

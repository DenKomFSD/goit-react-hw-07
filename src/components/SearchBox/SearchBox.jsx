import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import { changeFilter, selectTextFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectTextFilter);
  return (
    <div className={css.container}>
      <p>Find contacts by name...</p>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

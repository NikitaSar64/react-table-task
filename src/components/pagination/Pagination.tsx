import { FC } from "react";
import { Link } from "react-router-dom";
import usePagination from "@mui/material/usePagination";
import { useDispatch } from "react-redux";
import { PaginationProps } from "./Pagination.props";
import { setActivePage } from "@store/page/page.slice";
import { ROUTES } from "@constants/constants";

import cn from "classnames";
import styles from "./Pagination.module.scss";

export const Pagination: FC<PaginationProps> = ({ count, activePage }) => {
  const dispatch = useDispatch();

  const { items } = usePagination({
    count,
    page: activePage,
    onChange(_event, page) {
      dispatch(setActivePage(page));
    },
  });

  return (
    <nav className={styles.wrapper}>
      {items.map(({ page, type, selected, ...other }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "…";
        } else if (type === "page") {
          children = (
            <button
              type="button"
              className={cn(styles.btn, {
                [styles.active]: selected,
              })}
              {...other}
            >
              {page}
            </button>
          );
        } else {
          children = (
            <button type="button" className={styles.btn} {...other}>
              {type == "previous" ? "Назад" : "Вперед"}
            </button>
          );
        }

        return (
          <li key={index}>
            <Link to={ROUTES.TABLE.createRoot(page as number)}>{children}</Link>
          </li>
        );
      })}
    </nav>
  );
};

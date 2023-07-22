import { FC, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ISort } from "@interfaces/sort.interface";
import { useDispatch } from "react-redux";
import { setFilterPostData } from "@store/posts/posts.slice";

import cn from "classnames";
import styles from "./TableHeader.module.scss";

export const TableHeader: FC = () => {
  const [sort, setSort] = useState<ISort>({ field: "id", type: "asc" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterPostData(sort));
  }, [sort]);

  const handleSortClick = (field: ISort["field"]) => {
    setSort({
      field,
      type: sort.type == "asc" ? "desc" : "asc",
    });
  };

  return (
    <thead className={styles.header}>
      <tr>
        <th>
          <div onClick={() => handleSortClick("id")}>
            ID
            <KeyboardArrowDownIcon
              className={cn({
                [styles.rotate]: sort.field == "id" && sort.type == "desc",
              })}
            />
          </div>
        </th>
        <th>
          <div onClick={() => handleSortClick("title")}>
            Заголовок
            <KeyboardArrowDownIcon
              className={cn({
                [styles.rotate]: sort.field == "title" && sort.type == "desc",
              })}
            />
          </div>
        </th>
        <th>
          <div onClick={() => handleSortClick("body")}>
            Описание
            <KeyboardArrowDownIcon
              className={cn({
                [styles.rotate]: sort.field == "body" && sort.type == "desc",
              })}
            />
          </div>
        </th>
      </tr>
    </thead>
  );
};

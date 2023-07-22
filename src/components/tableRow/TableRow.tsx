import { FC } from "react";
import { IPost } from "@interfaces/post.interface";

import styles from "./TableRow.module.scss";

export const TableRow: FC<Omit<IPost, "userId">> = ({ id, body, title }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.item}>{id}</td>
      <td className={styles.item}>{title}</td>
      <td className={styles.item}>{body}</td>
    </tr>
  );
};

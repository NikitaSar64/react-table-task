import { FC } from "react";
import { TableProps } from "./Table.props";
import { TableRow, TableHeader } from "@components/index";

import styles from "./Table.module.scss";

export const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <TableHeader />
        <tbody>
          {data.map(({ id, body, title }) => (
            <TableRow key={id} id={id} body={body} title={title} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

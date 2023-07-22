import { ISort } from "@interfaces/sort.interface";
import { Dispatch, SetStateAction } from "react";

export interface TableHeaderProps {
  sort: ISort;
  setSort: Dispatch<SetStateAction<ISort>>;
}

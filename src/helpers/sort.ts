import { IPost } from "@interfaces/post.interface";
import { ISort } from "@interfaces/sort.interface";

export const sortData = (data: IPost[], { field, type }: ISort) => {
  if (field == "id") {
    if (type == "asc") {
      data.sort((a, b) => a.id - b.id);
    } else {
      data.sort((a, b) => b.id - a.id);
    }
  } else {
    if (type == "asc") {
      data.sort((a, b) => a[field].localeCompare(b[field]));
    } else {
      data.sort((a, b) => b[field].localeCompare(a[field]));
    }
  }
};

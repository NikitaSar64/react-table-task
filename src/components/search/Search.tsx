import { FC, HTMLAttributes, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTypedSelector } from "@hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setPostData } from "@store/posts/posts.slice";
import { searchPosts } from "@helpers/search";
import { useGetPostsQuery } from "@store/api/api";

import styles from "./Search.module.scss";
import cn from "classnames";

export const Search: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const activePage = useTypedSelector((store) => store.activePage);

  const { posts } = useGetPostsQuery(activePage, {
    selectFromResult: ({ data }) => ({
      posts: data?.posts,
    }),
  });

  useEffect(() => {
    if (posts) {
      if (inputText == "") {
        dispatch(setPostData(posts));
      } else {
        dispatch(setPostData(searchPosts(posts, inputText)));
      }
    }
  }, [inputText]);

  return (
    <div className={cn(styles.search, className)}>
      <input
        type="text"
        placeholder="Поиск"
        onChange={(e) => setInputText(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

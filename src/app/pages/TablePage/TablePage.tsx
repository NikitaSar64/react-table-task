import { FC, useEffect } from "react";
import { Table, Pagination, Search } from "@components/index";
import { CircularProgress } from "@mui/material";
import { useGetPostsQuery } from "@store/api/api";
import { useTypedSelector } from "@hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { setActivePage } from "@store/page/page.slice";
import { useDispatch } from "react-redux";

import styles from "./TablePage.module.scss";

export const TablePage: FC = () => {
  const activePage = useTypedSelector((store) => store.activePage);
  const posts = useTypedSelector((store) => store.posts);
  const { page } = useParams();
  const dispatch = useDispatch();

  const { pageCount, isLoading } = useGetPostsQuery(activePage, {
    selectFromResult: ({ data, isLoading }) => ({
      pageCount: data?.pageCount,
      isLoading,
    }),
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (page) {
      dispatch(setActivePage(+page));
    }
  }, [page]);

  return (
    <div className="container">
      <Search className={styles.search} />
      {isLoading ? (
        <CircularProgress className={styles.position} />
      ) : (
        posts &&
        pageCount && (
          <>
            <Table data={posts} />
            <Pagination activePage={activePage} count={pageCount} />
          </>
        )
      )}
    </div>
  );
};

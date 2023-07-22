export const LIMIT = 10;

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const ROUTES = {
  HOME: {
    createRoot: (): string => "/",
    mask: "/",
  },
  TABLE: {
    createRoot: (page: number) => `/table/${page}`,
    mask: "/table/:page",
  },
};

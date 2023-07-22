export interface IPost {
  body: string;
  id: number;
  title: string;
  userId?: number;
  [key: string]: string | number | undefined;
}

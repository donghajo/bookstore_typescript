export type ListResponse<BookInfo> = {
  msg: string;
  success: boolean;
  detail: Array<BookInfo>;
};

export type BookInfo = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type DetailResponse = {
  msg: string;
  success: boolean;
  detail: {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
};

// export type BookInfo = {
//   id: number;
//   url: string;
//   user: {
//     id: number;
//     nickName: string;
//     imgUrl: string;
//   };
// };

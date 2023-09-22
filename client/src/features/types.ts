export type TPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  userId: string;
  reactions: TReactions;
};

export type TReactions = {
  thumbsUp: number;
  thumbsDown: number;
};

export type TUser = {
  id: string;
  name: string;
};

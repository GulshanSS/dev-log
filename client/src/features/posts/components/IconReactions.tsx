import { useDispatch } from "react-redux";

import { TPost } from "@/features/types";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { addReaction } from "../postsSlice";

const icons = {
  thumbsUp: ThumbsUp,
  thumbsDown: ThumbsDown,
};

type Props = {
  post: TPost;
};

const IconReactions = ({ post }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 space-y-2 items-center">
      {Object.entries(icons).map(([name, Icon]) => (
        <button
          className="flex gap-1 items-center"
          key={name}
          onClick={() =>
            dispatch(
              addReaction({
                postId: post.id,
                reaction: name as keyof typeof icons,
              })
            )
          }
        >
          <Icon size={20} /> {post.reactions[name as keyof typeof icons]}
        </button>
      ))}
    </div>
  );
};

export default IconReactions;

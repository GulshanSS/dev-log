import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DisplayUserName from "@/features/users/components/DisplayUserName";
import DisplayTime from "./DisplayTime";
import IconReactions from "./IconReactions";
import { TPost } from "@/features/types";

type Props = {
  post: TPost;
};

const Post = ({ post }: Props) => {
  return (
    <div className="w-96">
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{post.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col space-y-2">
            <DisplayUserName userId={post.userId} />
            <DisplayTime timestamp={post.date} />
            <IconReactions post={post} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Post;

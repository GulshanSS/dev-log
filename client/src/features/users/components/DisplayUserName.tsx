import { useSelector } from "react-redux";
import { selectAllUsers } from "../usersSlice";

type Props = {
  userId: string;
};

const DisplayUserName = ({ userId }: Props) => {
  const users = useSelector(selectAllUsers);

  const userName =
    users.find((user) => user.id === userId)?.name || "Anonymous";

  return <span className="text-sm font-semibold">{userName}</span>;
};

export default DisplayUserName;

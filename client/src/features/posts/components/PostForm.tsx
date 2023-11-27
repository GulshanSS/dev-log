import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addPost } from "../postsSlice";
import { selectAllUsers } from "@/features/users/usersSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const handleSubmit = () => {
    if (title && description && userId) {
      dispatch(addPost(title, description, userId));
      setTitle("");
      setDescription("");
      setUserId("");
    }
  };

  const users = useSelector(selectAllUsers);

  const userOptions = users.map((user) => (
    <SelectItem key={user.id} value={user.id}>
      {user.name}
    </SelectItem>
  ));

  return (
    <div className="w-96">
      <h1 className="text-3xl font-bold text-center text-white">Create Post</h1>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder={`e.g. "Title 1"`}
          />
        </div>
        <div>
          <Label className="text-white">User</Label>
          <Select onValueChange={(userId) => setUserId(userId)}>
            <SelectTrigger>
              <SelectValue placeholder="Select User" />
            </SelectTrigger>
            <SelectContent>{userOptions}</SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description" className="text-white">Description</Label>
          <Input
            id="description"
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            name="desscription"
            placeholder={`e.g. "This is long desctiption"`}
          />
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-700 uppercase font-extrabold border border-slate-600" type="button" onClick={handleSubmit} variant="default">
          Add
        </Button>
      </form>
    </div>
  );
};

export default PostForm;

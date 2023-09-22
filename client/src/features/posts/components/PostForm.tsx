import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addPost } from "../postsSlice";

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    if (title && description) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          description,
        })
      );
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="w-96">
      <h1 className="text-3xl font-bold text-center">Create Post</h1>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder={`e.g. "Title 1"`}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            name="desscription"
            placeholder={`e.g. "This is long desctiption"`}
          />
        </div>
        <Button type="button" onClick={handleSubmit} variant="default">
          Add
        </Button>
      </form>
    </div>
  );
};

export default PostForm;

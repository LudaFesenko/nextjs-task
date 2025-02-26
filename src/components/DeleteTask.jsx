"use client";

import { useFormStatus } from "react-dom";
import { deleteTask } from "../utils/actions";

const DeleteSubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-error" disabled={pending}>
      {pending ? "pending..." : "delete"}
    </button>
  );
};
const DeleteTask = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <DeleteSubmitBtn />
    </form>
  );
};

export default DeleteTask;

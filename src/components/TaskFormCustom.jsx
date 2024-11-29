"use client";

import React, { useActionState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createTaskCustom } from "../utils/actions";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-success join-item"
      type="submit"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};
const TaskFormCustom = () => {
  const [state, formAction] = useActionState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "Error") {
      toast.error("Error in task");
      return;
    }
    if (state.message) {
      toast.success("Task created");
    }
  }, [state]);

  return (
    <form action={formAction} className="mt-8">
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          type="text"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;

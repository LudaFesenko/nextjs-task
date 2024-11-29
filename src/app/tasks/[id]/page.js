import React from "react";
import { getTask } from "../../../utils/actions";
import Link from "next/link";
import EditForm from "../../../components/EditForm";

const EditTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-primary">
          Go back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default EditTaskPage;

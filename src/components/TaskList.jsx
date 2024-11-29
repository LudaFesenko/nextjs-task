import React from "react";
import prisma from "../utils/db";
import Link from "next/link";
import DeleteTask from "./DeleteTask";
import { getAllTasks } from "../utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }

  return (
    <div>
      <ul className="mt-8">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
            >
              <h2
                className={`text-xl capitalize ${
                  task.completed ? "line-through" : null
                }`}
              >
                {task.content}
              </h2>
              <div className="flex gap-4 items-center">
                <Link href={`/tasks/${task.id}`} className="btn btn-primary">
                  edit
                </Link>
                <DeleteTask id={task.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

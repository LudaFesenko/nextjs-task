import React from "react";
import prisma from "../../utils/db";

const handlePrisma = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "my first task",
  //   },
  // });
  console.log("prisma example");
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

const PrismaExamplePage = async () => {
  const tasks = await handlePrisma();

  if (tasks.length === 0) {
    return <span>No tasks</span>;
  }
  return (
    <>
      <h1 className="text-7xl">PrismaExample</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} className="text-xl py-2">
              {task.content}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PrismaExamplePage;

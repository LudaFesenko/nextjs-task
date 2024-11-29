import { createTask } from "../utils/actions";

const TaskForm = () => {
  return (
    <form className="mt-8" action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full "
          name="content"
          placeholder="tape here..."
          required
        />
        <button className="btn btn-primary join-item" type="submit">
          Create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

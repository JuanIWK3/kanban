"use client";

import { useTasksStore } from "@/store";
import { TaskState } from "@/types";
import { forwardRef, useRef, useState } from "react";

interface ModalProps {
  state?: TaskState;
}

export const NewTask = forwardRef((props: ModalProps, ref) => {
  const addTask = useTasksStore().addTask;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState<TaskState>("TO DO");

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const addNewTask = () => {
    if (title === "") return;

    addTask({
      state,
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setState("TO DO");
  };

  return (
    <>
      <button onClick={openModal} className="btn btn-primary">
        New Task
      </button>

      <dialog ref={dialogRef} className="dialog">
        <div className="card-body">
          <div className="card-title">
            <h5 className="font-bold">New Task</h5>
          </div>
          <form
            method="dialog"
            onSubmit={(e) => console.log(e)}
            className="form-control"
          >
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Task Title"
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Task Description"
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">State</span>
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value as TaskState)}
              className="select select-bordered"
            >
              <option value="TO DO">To Do</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <button
              value="submit"
              formMethod="dialog"
              className="btn btn-primary my-4"
              onClick={() => addNewTask()}
            >
              Add Task
            </button>
            <button value="cancel" formMethod="dialog" className="btn">
              Cancel
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
});

NewTask.displayName = "NewTask";

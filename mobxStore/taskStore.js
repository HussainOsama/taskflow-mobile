import axios from "axios";
import { makeAutoObservable } from "mobx";

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  viewAPI = async () => {
    try {
      const task = await axios.get("http://localhost:8000/task");
      this.tasks = task.data;
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
  createAPI = async (newTask) => {
    try {
      const createTask = await axios.post(
        "http://localhost:8000/task",
        newTask
      );
      this.tasks.push(createTask.data);
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
}

const taskStore = new TaskStore();
taskStore.viewAPI();
taskStore.createAPI();
export default taskStore;

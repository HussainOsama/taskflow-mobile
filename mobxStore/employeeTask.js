import axios from "axios";
import { makeAutoObservable } from "mobx";

class EmployeeTask {
  employeeTask = [];

  constructor() {
    makeAutoObservable(this);
  }
  viewAPI = async () => {
    try {
      const tasks = await axios.get("http://localhost:8000/employeetask");
      this.employeeTask = tasks.data;
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
}

const employeeTaskStore = new EmployeeTask();
employeeTaskStore.viewAPI();
export default employeeTaskStore;

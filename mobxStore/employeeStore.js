import axios from "axios";
import { makeAutoObservable } from "mobx";

class EmployeeStore {
  employees = [];
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  viewAPI = async () => {
    try {
      const employee = await axios.get("http://localhost:8000/employee");
      this.employees = employee.data;
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
  signinAPI = async (userData) => {
    try {
      const signin = await axios.post(
        "http://localhost:8000/employee/login",
        userData
      );
      this.user = decode(signin.data.token); //Employee or Supervisor
    } catch (error) {
      console.log("Sigin Error:", error);
    }
  };
}

const employeeStore = new EmployeeStore();
employeeStore.viewAPI();
employeeStore.signinAPI();
export default employeeStore;

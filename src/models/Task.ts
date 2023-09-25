import Status from "./Status";

export default interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
  isDeleted: boolean;
}

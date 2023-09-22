type Status = "to-do" | "in-progress" | "completed";

export default interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
  isDeleted: boolean;
}

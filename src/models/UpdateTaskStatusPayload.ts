import Status from "./Status";

export default interface UpdateTaskStatusPayload {
  id: number;
  status: Status;
}
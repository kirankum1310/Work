// Q10. Enum with Custom Values
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
let response: Status = Status.Success;
console.log("Q10:", response);
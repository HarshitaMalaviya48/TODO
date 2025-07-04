//third-party module
const { format, parse } = require("date-fns");

const validateTodo = (title, description, date) => {
  if (!title) {
    return "Title is Mandatory";
  }
  if (!description) {
    return "Description is Mandatory";
  }
  if (!date) {
    return "Date is Mandatory";
  }
  return null;
};

const validateDate = (date) => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  //   console.log("parsedDate", parsedDate);

  if (isNaN(parsedDate)) {
    return {
      error: true,
      message: "Date is not valid should be in (yyyy-mm-dd) format",
    };
  }

  const formattedDate = format(parsedDate, "yyyy-MM-dd");
  //   console.log("formattedDate", formattedDate);
  return {
    error: false,
    date: formattedDate,
  };
};

const todoFoundOrNot = (todo) => {
  if(!todo){
    return {
      status_code: 404,
      message: "Todo not found"}
  }
  return null;
}

const userIsAuthorizedOrNot = (todoUserId, userId) => {
  if(todoUserId != userId){
    return {
      status_code: 401,
      message: "Unauthorized: not your todo"};
  }
  return null;
}

module.exports = {
  validateTodo,
  validateDate,
  todoFoundOrNot,
  userIsAuthorizedOrNot
};

import { validateTodo, validateDate, todoFoundOrNot, userIsAuthorizedOrNot } from "../src/utills/todoHelper.js";

import * as chai from "chai";
const expect = chai.expect;

describe("In validateTodo function", () => {
  it("should return an error if Title is empty", () => {
    const result = validateTodo("", "This is basic description", "1-2-2004");
    expect(result).to.be.eq("Title is Mandatory");
  });

  it("should return an error if Description is empty", () => {
    const result = validateTodo("This is todo", "", "1-2-2004");
    expect(result).to.be.eq("Description is Mandatory");
  });

  it("should return an error if Date is empty", () => {
    const result = validateTodo(
      "This is todo",
      "This is basic description",
      ""
    );
    expect(result).to.be.eq("Date is Mandatory");
  });

  it("Return null if every field is filled", () => {
    const result = validateTodo(
      "This is todo",
      "This is basic description",
      "01-5-2008"
    );
    expect(result).to.be.eq(null);
  });
});

describe("In validateDate function", () => {
  const expectedErrorResult = {
    error: true,
    message: "Date is not valid should be in (yyyy-mm-dd) format",
  };

  const expectedResult = {error: false,
    date: "2205-12-11",}
  it("should return an error message if Date is not valid", () => {
    const result = validateDate("string");
    expect(result).to.eql(expectedErrorResult);
  });
  it("should return an error message if Date is not valid", () => {
    const result = validateDate("12-ed-2003");
    expect(result).to.eql(expectedErrorResult);
  });
  it("should return an error message if Date is not valid", () => {
    const result = validateDate("12/02/2003");
    expect(result).to.eql(expectedErrorResult);
  });
  it("should return date if Date is valid", () => {
    const result = validateDate("2205-12-11");
    expect(result).to.eql(expectedResult)
  })
});

describe("In todoFoundOrNot function", () => {
  it("should return an error if todo is empty", async () => {
    const result = todoFoundOrNot();
    expect(result.status_code).to.be.eq(404);
    expect(result).to.have.property("message");
  });

  it("should return null if todo is found", async () => {
    const result = todoFoundOrNot({});
   expect(result).to.be.null;
  })
})

describe.only("In userIsAuthorizedOrNot function", () => {
  it("should return an error if user is not authorized", async () => {
    const result = userIsAuthorizedOrNot(12, 11);

    expect(result.status_code).to.be.eq(401);
    expect(result).to.have.property("message");
  })
  it("should return null if user is authorized", async () => {
    const result = userIsAuthorizedOrNot(12, 12);
expect(result).to.be.null;
   
  })
})
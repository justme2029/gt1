exports.handler = async (event) => {
  console.log("Function called!");
  return {
    statusCode: 200,
    body: "Function executed successfully",
  };
};

function createApiResponse(statusCode, data, message = "Success") {
    return {
      message,
      data,
      statusCode: statusCode < 400,
    };
  }
  
  export { createApiResponse };

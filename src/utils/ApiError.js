function ApiError(statusCode, message = "Something Went Wrong!", errors = [], stack = "") {
    const apiError = new Error(message);
    apiError.statusCode = statusCode;
    apiError.data = null;
    apiError.success = false;
    apiError.errors = errors;

    if (stack) {
        apiError.stack = stack;
    } else {
        Error.captureStackTrace(apiError, createApiError);
    }

    return apiError;
}

export { ApiError };
export class AppError extends Error {
	statusCode: number;
	isOperational: boolean;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

export class UnauthorizedError extends AppError {
	constructor(message = "Unauthorized Request") {
		super(message, 404);
	}
}

export class BadRequestError extends AppError {
	constructor(message = "Bad Request") {
		super(message, 400);
	}
}

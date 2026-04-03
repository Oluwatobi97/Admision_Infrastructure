import { NextRequest, NextResponse } from "next/server";
import { AppError } from "../utils/AppErrror";

export function globalErrorHandler (handler: Function) {
	return async (request: NextRequest) => {
		try
		{
			return await handler(request);
		} catch (error)
		{
			if (error instanceof AppError)
			{
				return NextResponse.json(
					{ success: false, message: error.message },
					{ status: error.statusCode }
				);
			}
			console.error("UnExpected error", error)
			return NextResponse.json(
				{ success: false, message: "Internal server error" },
				{ status: 500 }
			)
		}
	}
};


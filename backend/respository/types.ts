import { InferInsertModel } from "drizzle-orm";
import { school, sessions } from "../db/schema";


export type TSchoolCreateAccount = InferInsertModel<typeof school>


export type TSession = InferInsertModel<typeof sessions>
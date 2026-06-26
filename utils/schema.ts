import {z} from "zod";
import { commonValidations } from "./validation";

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email()
});
// Registration schema with comprehensive validation
export const registrationSchema = z.object({
  email: commonValidations.email,
  password: commonValidations.password,
});
export const loginSchema = z.object({
  email: commonValidations.email,
  password: z.string().min(1, "Password is required"),
});
export default schema;
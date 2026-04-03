import { Resend } from "resend"
import { BadRequestError } from "./AppErrror";


const resend = new Resend("re_2gTLaQfm_9XgWtqy9ccAiAvPd52dDJEa3");

export const sendEmail = async (message: string, email: string) => {
    try
    {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verify Your account',
            html: `<p>${ message }<p>`
        });

    } catch (error)
    {
        throw new BadRequestError("Unable to send email, please try again later")
    }
}
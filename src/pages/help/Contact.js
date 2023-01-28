import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData()
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
            <label>
                <span>Your email:</span>
                <input type="email" name="email"></input>
            </label>
            <label>
                <span>Your message:</span>
                <textarea name="message" required />
            </label>
            <button type="submit" >Submit</button>
        </Form>
        {data && data.error && <p>{data.error}</p>}
    </div>
  )
}

export const contactAction = async ({request}) => {
  console.log('request', request);
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  if(submission.message.length < 10){
    return {
      error: 'Message must be over 10 character long'
    }
  }                                                                                               
  console.log('submission', submission);
  // redirect the user
  return redirect('/')
}

import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css"
import Lottie from "lottie-react";
import done from "../../../public/animation/done.json";
import contact from "../../../public/animation/email.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgoyelg");
//   if (state.succeeded) {
//     return <h1>Thanks for joining!</h1>;
// }
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail"/>
        Contact us
      </h1>
      <p className="sub-title">Contact us for more information and Get notified when i publish something new</p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email"/>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
      />
          </div>
          <div className="flex" style={{marginTop:"24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}/>
          </div>

          <button className="submit"  disabled={state.submitting}>{state.submitting ? "Submitting...": "Submit "}</button>
          {state.succeeded && (<p className="flex" style={{fontSize:"18px", marginTop:"1.7rem"}}>
            <Lottie loop={false} style={{height:"47px"}}  animationData={done} />
            Your message has been sent successfully</p>)}
        </form>
        <div className=" animation">
        <Lottie className="contact-animation"  style={{height:"500px"}}  animationData={contact} />
        </div>
      </div>
    </section>
  )
}

export default Contact

import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';


import { FormEvent, useRef } from "react";
import ContactAnimate from "./ContactAnimate";
import { Button } from "../ui/button";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7fw8tc",
        "template_y10yfz7",
        form.current!,
        "0AGx-yacdwuJYI7go"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Thank you dear Customer!", {
            position: "top-right"
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="my-12 lg:my-20">
      <div className="text-center pb-14 contact_content">
        <br />
        <br />
        <p className="text-4xl font-bold text-gradient">Contact Us</p>
        <h1 className="lg:text-4xl sm:text-3xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-[100%]">
          <ContactAnimate />
        </div>
        <div className="w-[100%]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 justify-items-center gap-5">
              <input
                type="text"
                placeholder="Name*"
                name="user_name"
                className="input w-full max-w-md border border-pink-500 px-2 input-info py-4"
                required
              />
              <input
                type="text"
                placeholder="Email Address*"
                name="user_email"
                className="input w-full max-w-md border border-pink-500 px-2 input-info py-4"
                required
              />
              <input
                type="text"
                placeholder="Subject*"
                name="from_name"
                className="input w-full max-w-md border border-pink-500 px-2 input-info py-4"
                required
              />
              <textarea
                className="textarea w-full max-w-md border border-pink-500 px-2 input-info py-4"
                placeholder="Your message*"
                name="message"
                required
                rows={6}
              ></textarea>
              <Button className="btn btn-outline btn-info w-full max-w-md" type="submit" value="send">Submit</Button>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactMe({ data }) {
  const formRef = useRef();
  const sendmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_99bozyp",
        "template_qi4crxa",
        formRef.current,
        "DAzYyJ61q_FgoNYZ0"
      )
      .then(() => alert("Message Sent Successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <section
        id="contact"
        className="bg-[#171A42] flex flex-col justify-center text-white md:p-10 p-5"
      >
        <h1 className="font-bold mb-8">Contact Me</h1>
        <div className="flex justify-center items-center">
          <div className="max-w-8xl w-full bg-[#1e225a] rounded-xl p-16 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">Let’s Connect</h2>
            <p className="text-gray-300 mb-8">
              Feel free to reach out for opportunities or collaboration
            </p>
            <div className="grid gap-10">
              <div className="space-y-5 text-white">
                <div className="flex items-center gap-4">
                  <span className="bg-blue-600 p-3 rounded-full">📧</span>
                  <span>{data?.contact.email}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="bg-pink-300 p-3 rounded-full">📞</span>
                  <span>{data?.contact.phone}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="bg-purple-600 p-3 rounded-full">📍</span>
                  <span>{data?.contact.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-blue-600 p-3 rounded-full">LinkedIn</span>
                  <a
                    href="linkedin.com/in/krevathy1999"
                    className="text-blue-400 underline"
                  >
                    {data?.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form
                ref={formRef}
                onSubmit={sendmail}
                className="flex flex-col gap-3 mt-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-[#171A42] p-3 rounded-md text-white outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="bg-[#171A42] p-3 rounded-md text-white outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  className="bg-[#171A42] p-3 rounded-md text-white outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
                />

                <button className="bg-blue-600 hover:bg-blue-700 transition py-3 rounded-md text-white font-semibold w-32">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

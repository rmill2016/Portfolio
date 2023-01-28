import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Script from 'next/script'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_m7vvhjq', 'template_oh00lnf', form.current, 'VDUMMG9wiyIW5vi1e').then(
      (result) => {
        console.log(result.text)
        alert('Email sent!')
      },
      (error) => {
        console.log(error.text)
        alert('an error has occured')
      },
    )
  }
  return (
    <>
      <section id="contact" className="bg-dark">
        <div className="grid w-full h-full grid-rows-[auto_1fr] grid-flow-row  max-w-screen-md mx-auto  place-items-center ">
          <div className="text-white leading-normal text-center capitalize">
            <h4>want to reach out?</h4>
            <h4>send an inquiry below!</h4>
          </div>
          <div className="w-full h-fit md:h-full md:py-20 md:px-10 flex-center">
            <form
              className="bg-[#202e4a] text-white text-lg w-full h-full rounded-lg shadow-md flex flex-col gap-2 items-start justify-between p-8 md:items-center"
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="flex flex-col gap-8 justify-start md:w-full">
                <h5 className="text-center w-full md:text-4xl">Contact Me</h5>
                <div className="inline-flex justify-start items-start h-8">
                  <label className="text-lg pr-4 md:text-2xl" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border border-teal rounded-md h-full placeholder:pl-2 text-black w-full"
                    name="Name"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="inline-flex justify-start items-start h-8">
                  <label className="text-lg pr-4 md:text-2xl" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border border-teal rounded-md h-full placeholder:pl-2 text-black w-full"
                    name="Email"
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="inline-flex justify-start items-start h-8">
                  <label className="text-lg pr-4 md:text-2xl" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border border-teal rounded-md h-full placeholder:pl-2 text-black w-full"
                    name="Subject"
                    type="text"
                    id="subject"
                    placeholder="Topic"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <div>
                    <textarea
                      id="message"
                      name="Message"
                      placeholder="Send an inquiry"
                      required
                      className="w-full resize-y h-10 max-h-24 border border-teal rounded-lg placeholder:p-2 text-black md:h-40 md:max-h-64"
                      rows="15"
                      cols="20"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" value="Submit" className="filled text-white ml-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
    </>
  )
}

export default Contact

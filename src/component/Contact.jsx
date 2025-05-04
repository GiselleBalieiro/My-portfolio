import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          form.current.reset();
        },
        () => {
          alert('Falha ao enviar a mensagem. Tente novamente mais tarde.');
        },
      );
  };

  return (
    <>
      <div className="mt-20">
        
      <div id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center"
      >
        <h4 className="text-center mb-2 text-lg dark:text-zinc-400">Connect with me</h4>
        <h2 className="text-center text-5xl font-mono">Get in touch</h2>
        <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 dark:text-zinc-300">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-2xl mx-auto"
          >

            <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              ></textarea>
            

            <button
              type="submit"
              className="py-3 px-8 w-max mt-4 flex items-center justify-between gap-2 bg-black/80 dark:bg-zinc-600 dark:border-white text-white rounded-full mx-auto hover:bg-black dark:hover:bg-zinc-700 duration-500"
            >
              Submit Now
            </button>
          </form>

        </div>
  </div>
      
      
    </>
  );
};

export default Footer;

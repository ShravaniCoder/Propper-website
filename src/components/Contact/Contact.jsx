



const ContactPage = () => {
  return (
    <div className= "bg-gray-100 flex justify-center">
      <div className="">
        <h1 className="px-[20px] py-[20px]">Contact</h1>
        <div className="h-full flex justify-center items-center">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124989.42468449733!2d-74.00063640280739!3d40.71315068266809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592be8d7b683%3A0x321177c2e9eaf5af!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1611923986224!5m2!1sen!2sca"
            width="10"
            height="10"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="lg:w-1/2 bg-white py-12 px-6 sm:px-10 lg:px-12 flex justify-center items-center">
        {/* Contact Form */}
        <div className="max-w-md w-full">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <form className="mt-8 space-y-6">
            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


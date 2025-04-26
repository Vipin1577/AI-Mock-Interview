const ContactPage = () => {
  return (
    <div
      className="p-6 w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: "url('https://c8.alamy.com/comp/PF7W54/happy-young-male-customer-support-executive-working-in-office-PF7W54.jpg')" }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact AI Mock Interview</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Get in touch with us for AI-powered interview preparation and career guidance.
        </p>

        <div className="mb-6 text-center">
          <p className="text-gray-800 font-semibold">Email: vipinkbsccs@tsdcmumbai.in</p>
          <p className="text-gray-800 font-semibold">Phone: 7380913074</p>
          <p className="text-gray-800 font-semibold">Address: Thakur Shyamnarayan Degree College   </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

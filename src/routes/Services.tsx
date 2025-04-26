const Services = () => {
  return (
    <div
      className="p-6 w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.geekflare.com/cdn-cgi/image/width=1200,height=630,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/08/ai-interview-preparation-tools.png')" }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg mb-6">
          Explore the range of services we offer to enhance your career and interview skills.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Mock Interviews</h2>
          <p className="text-gray-600">Practice with AI-driven simulations that provide real-time feedback and improvement suggestions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Personalized Career Coaching</h2>
          <p className="text-gray-600">Get one-on-one coaching sessions tailored to your industry and career goals.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Resume and LinkedIn Review</h2>
          <p className="text-gray-600">Optimize your professional profiles with expert insights to stand out in the job market.</p>
        </section>
      </div>
    </div>
  );
};


  
  export default Services;
  
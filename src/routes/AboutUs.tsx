const AboutUs = () => {
  return (
    <div
      className="p-12 w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/man-ai-robot-waiting-job-600nw-2265302181.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl w-full max-w-6xl">
        <h1 className="text-5xl font-bold mb-6 text-center">About AI Mock Interview</h1>
        <p className="text-gray-700 text-xl mb-8 text-center">
          AI Mock Interview helps job seekers practice, improve, and ace their interviews with AI-driven feedback.
        </p>

        <Section title="Why Choose AI Mock Interviews?">
          <p className="text-gray-700 text-lg">
            Our AI-powered system simulates real interview scenarios, evaluates your responses, and provides instant feedback to help you improve.
          </p>
        </Section>

        <Section title="How It Works">
          <ul className="list-disc list-inside text-gray-800 text-lg">
            <li>Choose your interview type (Technical, HR, Behavioral, etc.).</li>
            <li>Answer AI-generated questions in real-time.</li>
            <li>Receive instant feedback with detailed insights.</li>
            <li>Improve with personalized recommendations.</li>
          </ul>
        </Section>

        <Section title="Our Mission">
          <p className="text-gray-700 text-lg">
            To make interview preparation more efficient, accessible, and stress-free through AI-driven technology.
          </p>
        </Section>

        <Section title="Join Us Today">
          <p className="text-gray-700 text-lg">
            Ready to boost your interview performance? Start practicing with AI Mock Interviews now!
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-3xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

  
  export default AboutUs;
  
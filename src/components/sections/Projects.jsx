import { ReviewOnScroll } from "../ReviewOnScroll";

export const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <ReviewOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Guesture Controlled Virtual Mouse
                </h3>
                <p className="text-gray-400 mb-4">
                  Created a virtual mouse interface controlled by hand gestures
                  using computer vision. Enabled cursor movement and click
                  detection through real-time webcam input
                </p>
                <div className="flex flex-wrap gap-2 mb-">
                  {["Python", "MediaPipe", "OpenCV"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    View Project{" "}
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  videoTube – YouTube Backend Clone
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed the backend for a video-sharing platform featuring
                  user authentication, video management, likes, comments, and
                  subscriptions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Node.js", "Express", "MongoDB"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    View Project{" "}
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Recipe Recommendation System
                </h3>
                <p className="text-gray-400 mb-4">
                  Built a content-based recipe recommendation engine using
                  cosine similarity on cleaned ingredient text. Hosted via Flask
                  web app.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Flask", "Scikit-learn"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    View Project{" "}
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Handwritten Digit Recognition
                </h3>
                <p className="text-gray-400 mb-4">
                  Trained a CNN model to classify handwritten digits with 98%+
                  accuracy and created a simple GUI for real-time predictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "TensorFlow", "MNIST"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    View Project{" "}
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Web Development Mini Projects
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed various mini-projects such as to-do lists,
                  calculators, and responsive layouts to improve frontend and
                  JavaScript skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript","Tailwind","Bootstrap"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    View Project{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ReviewOnScroll>
      </section>
    );
}
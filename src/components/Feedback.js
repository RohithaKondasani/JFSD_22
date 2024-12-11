import React, { useState } from 'react';
import './Feedback.css'; // Assuming you'll style the page in Feedback.css

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log('Feedback submitted', { name, email, feedback });
    setIsModalOpen(true); // Open modal on submit
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    // Optionally, reset the form
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="feedback-container">

      <div className="form-container">
        <h2>FEEDBACK FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Gmail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* Modal for feedback submission */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Thanks for submiting!</h3>
            <p>Your feedback has been submitted successfully.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;

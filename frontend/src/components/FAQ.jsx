import React, { useState, useEffect } from "react";
import axios from "axios";
import tangerine from "../assests/tangerine.png";
import deleteBtn from '../assests/delete.png'

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Fetch FAQs from backend
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/faqs`
        );
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQs", error);
      }
    };

    fetchFaqs();
  }, []);

  // Add a new FAQ
  const addFaq = async (e) => {
    e.preventDefault();

    try {
      const newFaq = { name, title, content };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/faqs`,
        newFaq
      );
      setFaqs([...faqs, response.data]);
      setName("");
      setTitle("");
      setContent("");
      setShowForm(false);
    } catch (error) {
      console.error("Error adding FAQ", error);
    }
  };

  // Delete an FAQ
  const deleteFaq = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/faqs/${id}`
      );
      setFaqs(faqs.filter((faq) => faq._id !== id));
    } catch (error) {
      console.error("Error deleting FAQ", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-300 to-sky-400 md:h-[auto] h-[auto] w-full flex flex-col justify-evenly items-center py-8">
      <h1 className="text-3xl font-semibold text-white mb-6">FAQ Section</h1>

      {/* Button to toggle form visibility */}
      <button
        className="bg-blue-500 text-white p-2 rounded-lg mb-6"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Add New FAQ"}
      </button>

      {/* FAQ Form (Shown when showForm is true) */}
      {showForm && (
        <form
          className="w-[20rem] bg-white p-4 rounded-lg shadow-md flex flex-col items-center mb-6"
          onSubmit={addFaq}
        >
          <h2 className="text-xl font-semibold text-black mb-4">Add New FAQ</h2>
          <input
            type="text"
            placeholder="Enter Name"
            className="mb-2 p-2 w-full border rounded-lg text-base sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Title"
            className="mb-2 p-2 w-full border rounded-lg text-base sm:text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Content"
            className="mb-2 p-2 w-full border rounded-lg text-base sm:text-sm"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-lg w-full text-base sm:text-sm"
          >
            Submit
          </button>
        </form>
      )}

      {/* Display FAQs */}
      <div className="md:w-[80%] w-full flex flex-wrap justify-center gap-6 px-4">
        {faqs.map((faq) => (
          <div
            key={faq._id}
            className="h-[12rem] w-[20rem] bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-lg flex items-center justify-evenly relative p-4"
          >
            <div>
              <img src={tangerine} alt="tangerine" className="h-20 w-20" />
              <h1 className="text-center text-red-600 text-lg sm:text-md font-bold mb-1">{faq.name}</h1>
            </div>
            <div>
              <h1 className="text-center text-lg sm:text-md text-red-600 font-bold mb-2">
                {faq.title}
              </h1>
              <p className="w-40 text-sm sm:text-xs text-left text-blue-600 font-bold">
                {faq.content}
              </p>
            </div>
            <button
              onClick={() => deleteFaq(faq._id)}
              className="absolute top-2 right-2 h-6 w-6"
            >
              <img src={deleteBtn} alt="delete" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

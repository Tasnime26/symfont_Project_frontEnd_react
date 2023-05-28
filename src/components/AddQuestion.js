/*import axios from "axios";
import React, { useState } from "react";

export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/problems', {
        title: title,
        description: description,
        dateOfCreation: now,
      });

      if (response.status === 201) {
        setDone(true);
        setError(false);
        setTitle("");
        setdescription("");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setDone(false);
    }
  };
  return (
    <div>
        
      <div className="box">
        <h4 className="mt-4">Add question</h4>
        <form onSubmit={handleSubmit} className="">
          <div className="modal-body">
            <div className="">
              {done && (
                <div className="alert alert-success" role="alert">
                  Question created successfully!
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  An error occurred while creating the question.
                </div>
              )}
              <div>
                <label className="">Title:</label>
                <input
                  type="text" id="title" value={title}onChange={(e) => setTitle(e.target.value)} className="form-control" required={true}/>
              </div>

              <div>
                <label className="mt-2">Content:</label>
                <textarea id="content" value={description} onChange={(e) => setdescription(e.target.value)} className="form-control" required={true} rows={10}/>
              </div>
            </div>
          </div>
          <div className="modal-footer mt-4">
            <button type="submit" className="btn btn-dark w-100">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}*/
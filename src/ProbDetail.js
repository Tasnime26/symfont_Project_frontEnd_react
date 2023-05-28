/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProbDetail = () => {
  const { Probid } = useParams();
  const [Probdata, Probdatachange] = useState({});
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState(""); // State for storing the new answer

  useEffect(() => {
    fetch(`http://localhost:8000/Problemes/${Probid}`)
      .then((res) => res.json())
      .then((resp) => {
        Probdatachange(resp);
        setAnswers(resp.answers);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [Probid]);

  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    // Create a new answer object
    const answer = {
      id: answers.length + 1, // Generate a new ID for the answer
      content: newAnswer,
    };

    // Update the answers array
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    // Update the database using the JSON server
    fetch(`http://localhost:8000/Problemes/${Probid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: updatedAnswers }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log("Answer submitted successfully:", resp);
      })
      .catch((err) => {
        console.log("Error submitting answer:", err.message);
      });

    // Reset the new answer input
    setNewAnswer("");
  };

  return (
    <div className="container">
      <div className="card row" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Problems  details</h2>
        </div>
        <div className="card-body">
          {Probdata && (
            <div>
              <h1>The problem name is: {Probdata.name} ({Probdata.id})</h1>
              <h3>Problem detail:</h3>
              <h5>Categorie: {Probdata.categorie}</h5>
              <h5>Description: {Probdata.description}</h5>
              <h5>Image: {Probdata.image}</h5>
              <Link to="/" className="btn btn-danger">
                Back to listing
              </Link>
            </div>
          )}

          <div>
            <h2>Answers</h2>
            {answers.map((answer) => (
              <div key={answer.id}>
                <p>{answer.content}</p>
              </div>
            ))}

            <form onSubmit={handleSubmitAnswer}>
              <div className="form-group">
                <label htmlFor="answer">Your answer:</label>
                <textarea
                  className="form-control"
                  id="answer"
                  name="answer"
                  rows="4"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbDetail;
http://127.0.0.1:8000/api/problems/${id}
http://127.0.0.1:8000/api/answers
 */
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getTimeAgo } from "./config/config";
import axios from "axios";
import CodeBlock from "./components/createCode";
import { Modal } from "bootstrap";
import '../src/style/style.css';
import Navbar from "./components/navbar";
export default function ProbDetail() {
  const { Probid } = useParams();
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [description, setDescription] = useState("");
  const [addedAnswerText, setAddedAnswerText] = useState("");
  const [addedAnswerQuestionId, setAddedAnswerQuestionId] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/problems/${Probid}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [Probid]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/problems/${Probid}/answers`)
      .then((response) => {
        setAnswers(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Probid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/answers", {
        description: description,
        problem: `/api/problems/${Probid}`, // Use "problem" instead of "question"
        problemId: Probid, // Add problem ID to the request body
      })
      .then((response) => {
        setAnswers([...answers, response.data]);
        setDescription("");
        setAddedAnswerText(response.data.description);
        setAddedAnswerQuestionId(Probid);
        const modal = Modal.getInstance(modalRef.current);
        modal.hide();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  if (!data) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border my-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const date = new Date(data.datePost);
  const timeAgo = getTimeAgo(date);

  return (
    <div className="container mt-5">
   <Navbar />
      <div className="row">
        <div className="col">
          <div className="box">
            <div className="d-flex align-items-start justify-content-between">
              <div className="text-start">
                <h4 className="fw-bold title-pos"> Title : {data.title}</h4>
                <p className="fw-normal text-muted">{timeAgo}</p>
              </div>

              <div>
                <button
                  className=" answer-button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Answer to this question
                </button>
              </div>
            </div>

            <hr />

            <div className="">
              <CodeBlock code={data.description} />
            </div>

            <hr className="my-2" />

            <div className="float-start col-12">
              <div className="m-2">
                <h5 className="fw-bold my-3">Answers:</h5>
                {answers.length > 0 ? (
                  answers.map((answer) => (
                    <div key={answer.id}>
                      <CodeBlock code={answer.description} />
                    </div>
                  ))
                ) : (
                  <div className="alert alert-dark" role="alert">
                    No answers available.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          ref={modalRef}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="staticBackdropLabel">
                  Answer to this question
                </h5>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="m-3">
                  <label className="mb-3">Add answer:</label>
                  <textarea
                    id="content"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    required={true}
                    style={{ whiteSpace: "pre-wrap" }}
                    rows={10}
                  />
                </div>
                <div className="text-end mx-3">
                  <button type="submit" className="btn-addanswer mb-3">
                    Add this answer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div>
        {addedAnswerText && (
          <div className="alert alert-success" role="alert">
            Answer: {addedAnswerText}
            <br />
            Question ID: {addedAnswerQuestionId}
          </div>
        )}
      </div>
    </div>
  );
}








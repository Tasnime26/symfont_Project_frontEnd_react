import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import { getAllProblems } from "./allAPI/ProbsApi";
import Navbar from "./components/navbar";
import '../src/style/style.css'
export default function ProbListing() {
  const [probData, setProbData] = useState([]);
  const navigate = useNavigate();

  const loadDetail = (id) => {
    navigate(`/Probleme/detail/${id}`);
  }

  const loadEdit = (id) => {
    navigate(`/Probleme/edit/${id}`);
  }

  const removeFunction = async (id) => {
    if (window.confirm('Do you want to remove?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/problems/${id}`);
        alert('Removed successfully.');
        fetchQuestions(); // Reload data after successful removal
      } catch (error) {
        console.log(error.message);
        throw new Error('Failed to remove the problem.');
      }
    }
  }

  const fetchQuestions = () => {
    getAllProblems()
      .then((response) => {
        setProbData(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  console.log(probData); // Debugging: Log the probData value

  return (
    
    <div className="container">
      <Navbar />
      <div className="card card-pos">
        <div className="title-card title-style">
          <h2>All Questions</h2>
        </div>
        <div className="card-body">
          {probData.length > 0 ? (
            probData.map(item => (
              <div key={item.id} className="card mb-3">
                <div className="card-body card-style">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div>
                     <button onClick={() => loadEdit(item.id)} className="btn-detail">Edit</button>
                    <button onClick={() => removeFunction(item.id)} className="btn-detail">Remove</button> 
                    <button onClick={() => loadDetail(item.id)} className=" btn-detail"> View Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

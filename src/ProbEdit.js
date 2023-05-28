/* import { useEffect,useState  } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
const ProbEdit = () =>{
    const {Probid} = useParams();
    //const [Probdata, Probdatachange] = useState({});
    useEffect(() => {
        console.log(Probid);
        fetch("http://localhost:8000/Problemes/"+Probid).then((res) => {
            return res.json();
        }).then((resp) => {
           // Probdatachange(resp);
           idchange(resp.id);
           namechange(resp.name);
           categoriechange(resp.categorie);//hne jebt data ya3ni fy modife nil9a les champs m3amrin 
           descriptionchange(resp.description);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [categorie, categoriechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [validation, validchange] = useState(false);
    const navigate = useNavigate();
  
    const handlesubmit = (e) => {
      e.preventDefault();
      const probdata = {id, name, categorie, description };
      fetch("http://localhost:8000/Problemes/"+Probid, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(probdata),
      })
        .then((res) => {
          alert("Saved successfully.");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred. Please try again later.");
        });
    };
    return(
        <div>
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-title">
                  <h2>Probleme Edit</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          value={id}
                          disabled="disabled"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input required 
                          value={name} onMouseDown={(e) => validchange(true)}
                          onChange={(e) => namechange(e.target.value)}
                          className="form-control"
                        ></input>
                       {name.length===0 && validation && <span className="text-danger">Enter the name</span>} 
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Categorie</label>
                        <input
                          value={categorie}
                          onChange={(e) => categoriechange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          value={description}
                          onChange={(e) => descriptionchange(e.target.value)}
                          type="text"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export default ProbEdit;  */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar";
const ProbEdit = () => {
  const { Probid } = useParams();
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/problems/${Probid}`)
      .then((response) => {
        const resp = response.data;
        setId(resp.id);
        settitle(resp.title);
        setCategorie(resp.categorie);
        setDescription(resp.description);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [Probid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const probdata = { id, title, categorie, description };
    axios
      .put(`http://localhost:8000/api/problems/${Probid}`, probdata)
      .then((response) => {
        alert("Saved successfully.");
        navigate("/Probleme/Allquestions");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <div className="row">
      <Navbar />
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="box2 " >
              <div className="Add-title">
                <h2>Question Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label hidden>ID</label>
                      <input hidden
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div /*className="form-group"*/>
                      <label className="title-style">Title</label>
                      <input className=" input-style" 
                        required
                        value={title}
                        onMouseDown={() => setValidation(true)}
                        onChange={(e) => settitle(e.target.value)}
                      
                      />
                      {title && title.length === 0 && validation && (
                        <span className="text-danger">Enter the Title</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div>
                      <label className="descroption-style">Description</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className=" smaller-textarea"
                        required={true}
                        rows={10}
                        cols={10}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div>
                      <button className="btn-add" type="submit">
                        Save
                      </button>
                      <Link to="/Probleme/Allquestions" className="btn-back2">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProbEdit;


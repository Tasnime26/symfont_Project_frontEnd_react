// /* import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";

// const ProbCreate = () => {
//   const [id, idchange] = useState("");
//   const [name, namechange] = useState("");
//   const [categorie, categoriechange] = useState("");
//   const [description, descriptionchange] = useState("");
//   const [image, imagechange] = useState(null); // State for storing the selected image file
//   const [validation, validchange] = useState(false);
//   const navigate = useNavigate();

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const probdata = { name, categorie, description, image }; // Include the image in the data object
//     fetch("http://localhost:8000/Problemes", {
//       method: "post",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(probdata),
//     })
//       .then((res) => {
//         alert("Saved successfully.");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("An error occurred. Please try again later.");
//       });
//   };

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0]; // Get the selected image file
//     imagechange(selectedImage); // Update the image state with the selected file
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="offset-lg-3 col-lg-6">
//           <form className="container" onSubmit={handlesubmit}>
//             <div className="card" style={{ textAlign: "left" }}>
//               <div className="card-title">
//                 <h2>Probleme Create</h2>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>ID</label>
//                       <input
//                         value={id}
//                         disabled="disabled"
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Name</label>
//                       <input
//                         required
//                         value={name}
//                         onMouseDown={(e) => validchange(true)}
//                         onChange={(e) => namechange(e.target.value)}
//                         className="form-control"
//                       ></input>
//                       {name.length === 0 && validation && (
//                         <span className="text-danger">Enter the name</span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Categorie</label>
//                       <input
//                         value={categorie}
//                         onChange={(e) => categoriechange(e.target.value)}
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Description</label>
//                       <input
//                         value={description}
//                         onChange={(e) => descriptionchange(e.target.value)}
//                         type="text"
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Image</label>
//                       <input
//                         type="file"
//                         onChange={handleImageChange} // Call handleImageChange when the file input changes
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <button className="btn btn-success" type="submit">
//                         Save
//                       </button>
//                       <Link to="/" className="btn btn-danger">
//                         Back
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProbCreate;
//  */
// import React from 'react';
// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// const ProbCreate = () => {
//   const [id, idchange] = useState("");
//   const [name, namechange] = useState("");
//   const [categorie, categoriechange] = useState("");
//   const [description, descriptionchange] = useState("");
//   const [validation, validchange] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const probdata = { name, categorie, description };
//     axios.post("https://127.0.0.1:8000/api/questions",{
//       title:name,
//       content :description,
//       dateOfCreation:new Date(),
//       /*updated_at: new Date()*/
//     } )
//       .then((res) => {
//         alert("Saved successfully.");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("An error occurred. Please try again later.");
//       });
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="offset-lg-3 col-lg-6">
//           <form className="container" onSubmit={handleSubmit}>
//             <div className="card" style={{ textAlign: "left" }}>
//               <div className="card-title">
//                 <h2>Probleme Create</h2>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>ID</label>
//                       <input
//                         value={id}
//                         disabled="disabled"
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Name</label>
//                       <input
//                         required
//                         value={name}
//                         onMouseDown={(e) => validchange(true)}
//                         onChange={(e) => namechange(e.target.value)}
//                         className="form-control"
//                       ></input>
//                       {name.length === 0 && validation && (
//                         <span className="text-danger">Enter the name</span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Categorie</label>
//                       <input
//                         value={categorie}
//                         onChange={(e) => categoriechange(e.target.value)}
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Description</label>
//                       <input
//                         value={description}
//                         onChange={(e) => descriptionchange(e.target.value)}
//                         type="text"
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <button className="btn btn-success" type="submit">
//                         Save
//                       </button>
//                       <Link to="/" className="btn btn-danger">
//                         Back
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProbCreate;



import axios from "axios";
import React, { useState } from "react";
import { Link} from "react-router-dom";
import Navbar from "./components/navbar";
import '../src/style/style.css'
export default function ProbCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/problems', {
        title: title,
        description: content,
        datePost: now,
      });

      if (response.status === 201) {
        setDone(true);
        setError(false);
        setTitle("");
        setContent("");
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
        <Navbar />
      <div className="box1">
        <h4 className="Add-title">Add question</h4>
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
                <label className="title-style">Title:</label>
                <input 
                  type="text" id="title" value={title}onChange={(e) => setTitle(e.target.value)} className=" input-style" required={true}/>
              </div>

              <div>
                <label className=" title-style2">Content:</label>
                <textarea
  id="content"
  value={content}
  onChange={(e) => setContent(e.target.value)}
  className=" smaller-textarea"
  required={true}
  rows={10}
  cols={10}
/>


              </div>
            </div>
          </div>
          <div >
            <button type="submit" className="btn-add ">
              Add
            </button>
            <Link to="/Probleme/Allquestions" className="btn-back">   Back
                   </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { BsFillFileImageFill } from "react-icons/bs";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import leftImg from "../Assets/ll.png";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const Name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${Name + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (URLdown) => {
          try {
            await updateProfile(res.user, {
              Name,
              photoURL: URLdown,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              Name,
              email,
              photoURL: URLdown,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formMain">
      <div className="formImg">
        <img className="limg" src={leftImg} alt="" />
      </div>
      <div className="formWrap">
        <span className="logo">diver<span className="logo-sea">sea</span></span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <BsFillFileImageFill/>
            <span>Add profile picture</span>
          </label>
          <span>Ethnicity</span>
          <select className="etn alldrop" name="Ethn">
            <option value="">choose one</option>
          </select>
          <div className="varsity">
            <span>Gender</span>
            <span className="pron">Pronoun</span>
          </div>
          <div className="varsity">
            <select className="gender alldrop" name="gender">
              <option value="">choose one</option>
            </select>
            <select className="gender alldrop" name="gender">
              <option value="">choose one</option>
            </select>
           </div>
           

          <button disabled={loading}>Sign up</button>
          {loading && "Please wait.."}
          {err && <span>Please try again</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

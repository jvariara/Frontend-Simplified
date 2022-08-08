import React from "react";
import "./App.css";
import { auth, db } from "./firebase/init";
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  async function updataPost() {
    const hardcodedId = "1PM6eqjAKR0hENqtLdZ5"
    const postRef = doc(db, "posts", hardcodedId)
    const post = await getPostById(hardcodedId)
    const newPost = {
      ...post,
      title: "Land a $400k job"
    }
    updateDoc(postRef, newPost)
  }

  function deletePost() {
    const hardcodedId = "1PM6eqjAKR0hENqtLdZ5"
    const postRef = doc(db, "posts", hardcodedId)
    deleteDoc(postRef)
  }

  function createPost() {
    const post = {
      title: "Finish Interview Section",
      description: "Do Frontend Simplified",
      uid: user.uid,
    }
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    /** { docs } is the same as doing something like data.docs */
    const { docs } = await getDocs(collection(db, "posts")) 
    const posts = docs.map(elem => ({...elem.data(), id: elem.id}))
    console.log(posts)
  }

  async function getPostById(id) {
    const postRef = doc(db, "posts", id)
    const postSnap = await getDoc(postRef)
    return postSnap.data()
  }

  async function getPostByUid() {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", "1")
    )
    const { docs } = await getDocs(postCollectionRef)
    console.log(docs.map(doc => doc.data()))
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post By Id</button>
      <button onClick={getPostByUid}>Get Post By Uid</button>
      <button onClick={updataPost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;

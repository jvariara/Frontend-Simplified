const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  /**
   * Use of Callbacks
   */
  
  // function createPost(post, callback) {
  //     setTimeout(() => {
  //         posts.push(post)
  //         callback()
  //     }, 2000)
  // }
  // createPost({ title: 'Post Three', body: 'This is post three'}, getPosts)
  
  /**
   *  Use of Promises
   */
  
  // function createPost(post) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       posts.push(post);
  
  //       const error = false;
  
  //       if (!error) {
  //         resolve();
  //       } else {
  //         reject("Eroor: Something went wrong");
  //       }
  //     }, 2000);
  //   });
  // }
  // // createPost({ title: "Post Three", body: "This is Post three" })
  // //     .then(getPosts)
  // //     .catch(err => console.log(err));
  
  // // Use of Promise.all
  // const promise1 = Promise.resolve("Hello WOrld");
  // const promose2 = 10;
  // const promose3 = new Promise((resolve, reject) =>
  //   setTimeout(resolve, 2000, "Goodbye")
  // );
  
  // Promise.all([promise1, promose2, promose3]).then((values) =>
  //   console.log(values)
  // );
  
  /**
   *  Async / Await
   */
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
  
        const error = false;
  
        if (!error) {
          resolve();
        } else {
          reject("Eroor: Something went wrong");
        }
      }, 2000);
    });
  }
  
  const init = async () => {
    await createPost({ title: "Post Three", body: "This is Post three" });
    getPosts();
  };
  
  init();
  
  /**
   *  Async / Await / Fetch
   */
  
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data)
  };
  fetchUsers();
  
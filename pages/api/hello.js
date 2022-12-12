// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const users = [
  {
    user_id: 1,
    name: "John",
    gender: "male",
    post: [
      {
        post_id: 1,
        title:"Welcome to React.js",
        hidden:false
      },
      {
        post_id: 2,
        title:"Welcome to Next.js",
        hidden:false
      }]
  },
  {
    user_id: 2,
    name: "Sally",
    gender: "female",
    post: [
      {
        post_id: 1,
        title:"Learn Next.js",
        hidden:false
      },
      {
        post_id: 2,
        title:"Learn React.js",
        hidden:false
      }]
  },
];



const getUsers = (req, res) => {
  res.status(200).json(users);
};
app.get("/api/users", getUsers);

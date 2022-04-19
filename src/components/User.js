import { useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <h1>Usuário: {user}</h1>
    </div>
  );
};

export default User;

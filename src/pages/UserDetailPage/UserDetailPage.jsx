import { useState, useEffect } from "react";
import { getUser } from "../../api/fetchToApi";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";


const UserDetailPage = () => {
  const [user, setUser] = useState([]);
  let { id } = useParams("id");

  useEffect(() => {
    if (id)
      getUser(id).then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div>
      {user.length !== 0 ? <Detail user={user} /> : null}
    </div>
  );

};
export default UserDetailPage;
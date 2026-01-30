import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { fetchUsers, showUsers } from "../store/features/users/userSlice";
import Counter from "./Counter";

function UserHolder() {
  const dispatch = useDispatch();
  const { userList, status, error, show } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <button
        onClick={() => dispatch(showUsers())}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {show ? "Hide Users" : "Show Users"}
      </button>

    
      {status === "loading" && <Loading />}

    
      {status === "failed" && <ErrorPage message={error} />}

    
      {show && status === "succeeded" && (
       <>
       <Counter/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {userList.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
       </>
      )}
    </div>
  );
}

export default UserHolder;

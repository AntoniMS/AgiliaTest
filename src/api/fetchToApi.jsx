const UsersURL = "https://reqres.in/api/users/";

export const getUser = async (id) => {
  const res = await fetch(`${UsersURL}${id}`);
    if (res.ok) {
        return res.json();
    } else {
        return [];
    }
};


import { useState, useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      if (response.ok) {
        const result = await response.json();
        setData(result.results[0]);
      } else {
        setError("No data found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);

  return (
    <div className="relative flex items-center justify-center border-2 border-slate-600 hover:bg-purple-600 hover:border-none hover:text-white rounded-xl top-[200px]">
      {data && (
        <div className="text-center relative flex xl:w-[600px] xl:h-[400px] p-4">
          <div className="relative flex w-[35%] px-auto justify-center items-center">
            <img
              src={data.picture.large}
              alt={data.name.title}
              className="w-[90%] h-[60%]"
            />
          </div>
          <div className="relative flex flex-col w-[65%] left-8 top-24 text-xl gap-4">
            <div className="relative flex gap-2">
              <p>Fullname: </p>
              <p>{data.name.title}</p>
              <p>{data.name.first}</p>
              <p>{data.name.last}</p>
            </div>
            <div className="relative flex">
              <p>Gender: {data.gender}</p>
            </div>
            <div className="relative flex">
              <p>Phone : {data.phone}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

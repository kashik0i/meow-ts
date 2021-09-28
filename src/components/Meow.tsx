import axios from "axios";
import React from "react";
interface Props {}
interface MeowRequest {
  createdAt: string;
  id: string;
  tags: string[];
  url: string;
}
//https://thecatapi.com/v1/images/search?api_key=${process.env.REACT_APP_CAT_API_KEY}&mime_types=gif
const Meow = (props: Props) => {
  const [data, setData] = React.useState<MeowRequest>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const fetch = () => {
    setLoading(true);
    axios
      .get<MeowRequest>("https://cataas.com/cat?json=true")
      .then((res) => {
        setData(res.data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };
  React.useEffect(() => {
    fetch();
  }, []);
  // const [{ data, loading, error }] = useAxios<MeowRequest>(
  //   `https://cataas.com/cat?json=true`
  // );

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error!</p>;

  return (
    <div>
      <button onClick={fetch}>refetch</button>
      <pre>
        {/* <img
          src={`https://cataas.com/cat?${global.Date.now()}`}
          alt=""
          key={count}
        /> */}
        <img src={`https://cataas.com/${data.url}`} alt="" />
      </pre>
    </div>
  );
};

export default Meow;

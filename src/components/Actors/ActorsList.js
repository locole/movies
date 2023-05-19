import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ActorItem from "./ActorItem";

const ActorsList = (props) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [actors, setActor] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${props.id}}/casts?api_key=${props.api_key}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.cast) {
      setActor(data.cast);
    }
  }, [data]);
  const mainActors = actors.splice(0, 5);

  return (
    <div className="w-[500px] mx-auto grid grid-cols-4 gap-10 mt-8  ">
      {mainActors.length > 0 &&
        mainActors.map((item) => (
          <ActorItem key={item.id} img={item.profile_path} name={item.name}></ActorItem>
        ))}
    </div>
  );
};

export default ActorsList;

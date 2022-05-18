import { useEffect, useState } from "react";


export const Newsfeed = () => {
    const [img, setImg] = useState([])

    useEffect(() => {
    let handleFetch = async () => {
      try {
        let response = await fetch(
          "https://picsum.photos/v2/list?page=3&limit=10"
        );
        if (response.status !== 200) {
          throw new Error("Oops!");
        }
        let data = await response.json();
        console.log("response", data);
        images(data);
      } catch (error) {
        console.error("error:", error);
      }
    };
    handleFetch();
  }, []);

  const images = (data) => {
    let tempArr = [];

    data.forEach((event) => {
      let item = {
        ...event,
      };
      tempArr.push(item);
    });
    setImg(tempArr);
  };
  return (
  <div className="main-container">
        {img.map((item, index) => {
          return (
            <div className="images" key={index}>
              <p className="Author">{item.author}</p>
              <img
                key={item.index}
                src={item.download_url}
                height={(item.height = 1000)}
                width={(item.width = 600)}
                alt="img"
                 

              />
              <div className="addBtn"></div>
            </div>
          );
        })}
      </div>
  )};
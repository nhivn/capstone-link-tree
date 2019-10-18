import React from "react";
import Link from "./Link";

export default () => {
  const links = [
    {
      title: "GitHub",
      subtitle:
        "Check out our GitHub repository to see our project boards, code and spike reports.",
      url: "https://github.com/sardap/Capstone-2019-Data-Sharing",
      icon: "fab fa-github"
    },
    {
      title: "Presentation video",
      subtitle:
        "Have a look at the video where we explain how our system solves the user stories.",
      url: "https://www.youtube.com/watch?v=TzvGLQA4pl4",
      icon: "fab fa-youtube"
    },
    {
      title: "Data Broker",
      subtitle: "Want to see our prototype in action? Check this out!",
      url: "https://broker.secretwaterfall.club",
      icon: "fas fa-user-circle"
    }
  ];
  return (
    <div className="nhi-custom">
      {links.map((l, i) => (
        <Link key={i} {...l} />
      ))}
    </div>
  );
};

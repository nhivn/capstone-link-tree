import React from "react";
import Link from "./Link";

export default () => {
  const links = [
    {
      title: "GitHub",
      subtitle:
        "Check out our GitHub repository to see our project boards, code and spike reports.",
      url: "https://github.com/",
      icon: "fab fa-github"
    },
    {
      title: "Presentation video",
      subtitle:
        "Check out our GitHub repository to see our project boards, code and spike reports.",
      url: "https://youtube.com/",
      icon: "fab fa-youtube"
    },
    {
      title: "GitHub",
      subtitle:
        "Check out our GitHub repository to see our project boards, code and spike reports.",
      url: "https://github.com/",
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

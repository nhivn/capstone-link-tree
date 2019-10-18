import React from "react";

export default ({ title, subtitle, url, icon }) => (
  <div className="card">
    <a href={url} target="_blank">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <span className="icon is-medium has-text-dark">
              <i className={icon + " fa-2x"} aria-hidden="true"></i>
            </span>
          </div>
          <div className="media-content">
            <p className="title is-5">{title}</p>
            <p className="subtitle is-7">{subtitle}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

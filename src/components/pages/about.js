import React from "react";
import profilePic from "../../../static/assets/images/bio/mypic.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        <p>Hi, my name is Darren Derks and I’m a software developer who’s passionate about all thing's computers and computer software. I recently just finished an excelled full stack software engineer program at Bottega University where I gained skills in <b>REACT</b>, <b>JavaScript</b>, <b>Python</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, and <b>Sass</b>.</p>

        <p>I’m a developer, because I’m inspired by the idea of making software that makes life easier or more enjoyable for people. Put simply, I love to learn and this portfolio and the projects contained inside are a great example of that. Not only did I use all the skills listed above but I also used other things I chose to learn myself like <b>hooks</b>, <b>Speechly</b>, <b>machine learning</b>, etc.</p>

        <p>I’m currently looking for an opportunity to work with a JavaScript framework but also open to learn any stack that is needed. I’m a quick learner and able to adapt to whatever stack is used. Ultimately, I’d like to be the most valuable developer to any team I become a part of.</p>

        <p>When I’m not busy building apps or learning the latest coding tricks, you can find me checking out whatever festival is in town, playing video games and eating about anything that is not liver.</p>

        <p>If you’d like to learn more about what makes me tick feel free to visit my <b>CONTACT</b> section.</p>
      </div>
    </div>
  );
}

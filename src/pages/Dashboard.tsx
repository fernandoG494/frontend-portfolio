import { useContext } from "react";
import { PlaceThemeContext } from "../context/ThemeContext";

import "../styles/Dashboard.scss";

const Dashboard = () => {
  const themeContext = useContext(PlaceThemeContext);

  return (
    <div style={{ backgroundColor: "blue" }}>
      <h2>Welcome!</h2>
      <p>
        <div>
          Hello! I’m Fernando, a passionate Fullstack JavaScript web developer
          with a knack for front-end technologies. Welcome to my portfolio!
        </div>
        <div>
          Here, you can explore some of the projects I've worked on, primarily
          focused on creating dynamic and robust web applications both on the
          frontend and backend.
        </div>
        <div>
          With four years of experience in the tech industry, I've had the
          opportunity to collaborate with both small teams and large
          corporations, taking on roles as a software developer and tester.
        </div>
        My journey has led me to specialize in various aspects of web
        development, including security analysis and implementing cutting-edge
        solutions. Currently, I’m a Software Engineer at Softtek Inc. in
        Aguascalientes, México. My role involves developing secure coding
        solutions, reviewing vulnerabilities, and ensuring the robustness of
        applications built with React, Angular, Node, and Nest. I've also worked
        on exciting projects for companies like Walmart, Viasat, and AeroMéxico,
        where I've honed my skills in front-end technologies and testing. I hold
        a degree in Computer Systems Engineering from UPIIZ - IPN, where I
        delved into artificial intelligence and game development using Unity. My
        passion for continuous learning drives me to pursue certifications in
        AWS and Azure, and to stay updated with the latest in technology trends.
        Beyond coding, I have a strong interest in cybersecurity. I’ve been an
        ethical hacker and instructor, participating in numerous hacking
        communities and competitions. My dedication to this field is reflected
        in my rankings on platforms like HackTheBox and TryHackMe. I am
        committed to mentoring other developers and fostering a collaborative
        team environment. I believe in building strong relationships and
        understanding the complete project lifecycle beyond just development. In
        my portfolio, you’ll find projects that showcase my skills in various
        technologies such as React, Angular, Node, MongoDB, Firebase, and more.
        Each project reflects my commitment to quality, security, and
        innovation. Feel free to browse through and get in touch if you have any
        questions or would like to collaborate! Thank you for visiting my
        portfolio!
      </p>
    </div>
  );
};

export default Dashboard;

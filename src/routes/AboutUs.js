import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col px-6">
      <h1 className="text-xl font-semibold my-4">AboutUs</h1>
      <p>
        This project aims to provide a robust platform for users seeking car
        repair services, ensuring ease of access, transparency in pricing, and
        reliability in service. By leveraging modern web technologies and a
        well-structured team, the project aspires to deliver a high-quality
        product that meets the diverse needs of car owners.
      </p>
      <div className="mt-11">
        <h1 className="text-2xl font-semibold">Core Team</h1>
        <ul className="flex flex-wrap">
          <li className="mx-4">
            <h1 className="text-blue-400 font-bold">Gowtham</h1>
            <p>Role: Lead Devloper</p>
          </li>
          <li className="mx-4">
            <h1 className="text-blue-400 font-bold">Praveen</h1>
            <p>Role: UI/UX Designer</p>
          </li>
          <li className="mx-4">
            <h1 className="text-blue-400 font-bold">Tarun</h1>
            <p>Role : SDE</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

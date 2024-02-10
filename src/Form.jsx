import React from "react";
import html2pdf from "html2pdf.js";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the HTML element to be converted to PDF
    const element = document.getElementById("content");

    // Configure the PDF options
    const opt = {
      margin: 0,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Call the html2pdf library to convert HTML to PDF
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div
      id="content"
      className="flex flex-col items-center justify-center overflow-scroll flex-nowrap whitespace-nowrap w-full overflow-x-scroll scrollbar-hidden no-scrollbar pl-64 md:pl-0"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <fieldset>
          <legend className="text-lg font-semibold mb-4">
            Harvest Details
          </legend>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="FarmerName">Farmer Name:</label>
              <input
                type="text"
                id="FarmerName"
                name="FarmerName"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="AgentName">Agent Name:</label>
              <input
                type="text"
                id="AgentName"
                name="AgentName"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <table className="border-2 border-black border-solid  text-center">
              <thead className="">
                <tr>
                  <th>SL No.</th>
                  <th>PARTICULARS</th>
                  <th>COUNT</th>
                  <th>KGS.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    1
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    Vannamei
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    2
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    Vannamei-PD
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    3
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    Vannamei-Sl
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    4
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    Vannamei-Vibrio
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                  <td className="p-1 md:p-6 border-2 border-black border-solid  text-center">
                    <input type="number"></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="VehicleNo">Vehicle No:</label>
              <input
                type="text"
                id="VehicleNo"
                name="VehicleNo"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="Boxes">Material boxed:</label>
              <input
                type="number"
                id="Boxes"
                name="Boxes"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="Ice">Ice boxes:</label>
              <input
                type="number"
                id="Ice"
                name="Ice"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="Area">Area:</label>
              <input
                type="text"
                id="Area"
                name="Area"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="Area">City:</label>
              <input
                type="text"
                id="Area"
                name="Area"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>

            <div className="flex flex-row space-x-2 items-center">
              <label htmlFor="HarvestType">Type of Harvest</label>
              <input
                type="text"
                id="HarvestType"
                name="HarvestType"
                className="w-1/3 border-solid border-2 border-black"
              />
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-10 border-2 border-black border-solid rounded text-2xl px-4 mb-5"
        >
          Download Pdf
        </button>
      </form>
    </div>
  );
}

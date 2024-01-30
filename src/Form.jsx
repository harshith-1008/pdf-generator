import React from "react";
import jsPDF from 'jspdf';

export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        generatePDF(data);
    };

    const generatePDF = (data) => {
      const doc = new jsPDF();
      let y = 20;
  
      // Add title
      doc.setFontSize(20);
      doc.text("Harvest Details", 105, y, { align: "center" });
  
      // Reset y position for content
      y = 40;
  
      // Add form data to PDF
      Object.entries(data).forEach(([key, value]) => {
          doc.setFontSize(12);
          doc.text(20, y, `${key}: ${value}`);
          y += 10;
      });
  
      // Save PDF
      doc.save("harvest_details.pdf");
        // Save PDF as base64-encoded data URL
        // const pdfBase64 = doc.output('dataurlstring');

        // // Create share button for WhatsApp
        // const shareWhatsApp = () => {
        //     const message = 'Check out my form details:';
        //     const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}&media=${encodeURIComponent(pdfBase64)}`;
        //     console.log('WhatsApp URL:', whatsappUrl);
        //     window.open(whatsappUrl);
        // };

        // // Call shareWhatsApp function
        // shareWhatsApp();
    };


    return(
    <form onSubmit={handleSubmit} className="p-10 bg-yellow-50">
      <fieldset>
        <legend className="text-lg font-semibold mb-4">Harvest Details</legend>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="date">Date---</label>
            <input type="date" id="date" name="date" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="field">Field</label>
            <input type="text" id="field" name="field" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="area">Area</label>
            <input type="text" id="area" name="area" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="agentName">Agent Name</label>
            <input type="text" id="agentName" name="agentName" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="supervisors">Supervisors</label>
            <input type="text" id="supervisors" name="supervisors" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="farmerName">Farmer Name</label>
            <input type="text" id="farmerName" name="farmerName" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="harvestType">Type of Harvest</label>
            <input type="text" id="harvestType" name="harvestType" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="countTable">Count-table</label>
            <input type="number" id="countTable" name="countTable" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="kgs">Kgs</label>
            <input type="number" id="kgs" nmae="kgs" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate">Rate (per kg)</label>
            <input type="number" id="rate" name="rate" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="totalAmount">Total Amount</label>
            <input type="number" id="totalAmount" name="totalAmount" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="vehicleNo">Vehicle No</label>
            <input type="text" id="vehicleNo" name="vehicleNo" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="boxes">No of Boxes</label>
            <input type="number" id="boxes" name="boxes" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ice">ICE</label>
            <input type="number" id="ice" name="ice" className="w-1/3 border-solid border-2 border-black"  />
          </div>
          <div className="flex flex-col">
            <label htmlFor="boys">Boys</label>
            <input type="number" id="boys" name="boyes" className="w-1/3 border-solid border-2 border-black"  />
          </div>
        </div>
      </fieldset>
      <button type="submit" className="mt-10 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </form>
  );
}

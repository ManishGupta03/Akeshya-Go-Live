import React from "react";

function Footer() {
  return (
    <div id="footer" className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; Copyright <b>Akeshya</b>. All Rights Reserved
          </div>
          <div>
            <div className="flex space-x-10 text-sm">
              <a href="./Terms and conditions.pdf">Terms and conditions</a>

              <a href="./Refund policy.pdf">Refund policy</a>

              <a href="./Privacy policy.pdf">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

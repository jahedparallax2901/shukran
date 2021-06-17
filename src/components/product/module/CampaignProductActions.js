import React from "react";
import { Button } from "react-bootstrap";
import { FaEye, FaHeart } from "react-icons/fa";
import { MdReplay } from "react-icons/md";

const CampaignProductActions = () => {
  return (
    <div className="campaign-actions">
      <Button>ADD TO CART</Button>
      <Button>
        {" "}
        <FaHeart />{" "}
      </Button>
      <Button>
        {" "}
        <FaEye />{" "}
      </Button>
    </div>
  );
};

export default CampaignProductActions;

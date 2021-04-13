import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { IoIosGlobe } from "react-icons/io";
import { MdCropRotate } from "react-icons/md";

const WidgetProductFeatures = () => {
  return (
    <aside className="widget widget_product widget_features">
      <p>
        <i>
          <IoIosGlobe />
        </i>{" "}
        Shipping worldwide
      </p>
      <p>
        <i>
          <MdCropRotate />
        </i>
        Free 7-day return if eligible, so easy
      </p>
      <p>
        <i>
          <CgNotes />
        </i>
        Supplier give bills for this product.
      </p>
      <p>
        <i>
          <AiOutlineCreditCard />
        </i>
        Pay online or when receiving goods
      </p>
    </aside>
  );
};

export default WidgetProductFeatures;

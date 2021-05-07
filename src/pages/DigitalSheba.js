import React, { useEffect } from "react";
import { CgSearchLoading } from "react-icons/cg";
import { SiGooglesearchconsole } from "react-icons/si";
import StatusBlock from "../components/common/StatusBlock";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";

const DigitalSheba = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ContainerMarketPlace3>
      <StatusBlock
        icon={<SiGooglesearchconsole />}
        title={"This feature comming soon!"}
        content={
          "This feature is under development. We will notifu you if it is done"
        }
        redirectUrl={"/"}
        urlText={"Go to home"}
      />
    </ContainerMarketPlace3>
  );
}

export default DigitalSheba;
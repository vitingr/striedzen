import React from "react";
import Popup from "../BasePopup/Popup";

interface RemovePopupProps {
  showState: any;
  setShowState: any
}

const RemovePopup = ({ showState, setShowState }: RemovePopupProps) => {
  return (
    <Popup
      title="Remover Produto"
      description="Edite os produtos para atrair novos clientes e valorizar o produto"
      setShowState={setShowState}
      showState={showState}
    >
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
        }}
      ></form>
    </Popup>
  );
};

export default RemovePopup;

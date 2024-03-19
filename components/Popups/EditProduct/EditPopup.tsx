import React from "react";
import Popup from "../BasePopup/Popup";

interface EditPopupProps {
  showState: any;
  setShowState: any
}

const EditPopup = ({ showState, setShowState }: EditPopupProps) => {
  return (
    <Popup
      title="Editar Produto"
      description="Edite os produtos para atrair novos clientes e valorizar o produto"
      showState={showState}
      setShowState={setShowState}
    >
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
        }}
      ></form>
    </Popup>
  );
};

export default EditPopup;

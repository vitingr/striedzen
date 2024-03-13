import React from "react";
import Popup from "../BasePopup/Popup";

const EditPopup = ({ showState }: { showState: any }) => {
  return (
    <Popup
      title="Editar Produto"
      description="Edite os produtos para atrair novos clientes e valorizar o produto"
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

export default EditPopup;

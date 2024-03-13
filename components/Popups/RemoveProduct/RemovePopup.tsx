import React from "react";
import Popup from "../BasePopup/Popup";

const RemovePopup = ({ showState }: { showState: any }) => {
  return (
    <Popup
      title="Remover Produto"
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

export default RemovePopup;

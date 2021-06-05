import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Swal from "sweetalert2";
import { ModalContainer } from "../../assets/ModalStyles";
import { api } from "../../services/api";



interface ProfessionData {
  name: string;
  register: string;
  phone: string;
  cellphone: string;
  email: string;
  specialtie: string;
}

interface ProfessionModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ProfessionsModal = ({ state, setState }: ProfessionModalProps) => {
  const [formDataContent, setFormDataContent] = useState<ProfessionData>(
    {} as ProfessionData
  );

  const handleModalClose = () => {
    setState(false);
  };

  return (
    <ModalContainer className={state ? "show" : ""}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Cadastro de Especialidade</h4>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <form>
          <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setFormDataContent({
                    ...formDataContent,
                    name: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button type="button">Salvar nova Especialidade</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ProfessionsModal;

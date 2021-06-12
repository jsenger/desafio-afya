import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Swal from "sweetalert2";
import { ProfessionsModalContainer } from "./styles";
import { api } from "../../services/api";
import { logout } from "../../services/logout";
import { Profession } from "../../types";

interface ProfessionModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ProfessionsModal = ({ state, setState }: ProfessionModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profession, setProfession] = useState<Profession>({} as Profession);

  const handleModalClose = () => {
    setState(false);
  };

  const professionSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      e.preventDefault();

      if (form.checkValidity()) {
        setIsLoading(true);

        api
          .post("professions", profession, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("@tokenVitality")}`,
            },
          })
          .then((response) => {
            Swal.fire({
              title: "Sucesso!",
              text: "Especialidade cadastrada com sucesso.",
              icon: "success",
              confirmButtonText: "Fechar",
              confirmButtonColor: "#004AAD",
            }).then(() => {
              handleModalClose();
              form.reset();
            });
          })
          .catch((err) => {
            let errorMessage = "";

            if (err.response.data.message === "Invalid JWT token") {
              logout();
            } else if (
              err.response.data.message ===
              "Profession already booked with this name"
            ) {
              errorMessage = "Especialidade já cadastrada.";
            } else {
              errorMessage = "Dados incorretos.";
            }

            Swal.fire({
              title: "Ops!",
              text: errorMessage,
              icon: "error",
              confirmButtonText: "Fechar",
              confirmButtonColor: "#ff312e",
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        Swal.fire({
          title: "Ops!",
          text: "Verifique se todos os campos estão preenchidos corretamente.",
          icon: "error",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#ff312e",
        });
      }
    },
    [profession]
  );

  return (
    <ProfessionsModalContainer className={state ? "show" : ""}>
      <form className="modal-content" onSubmit={professionSubmit}>
        <div className="modal-header">
          <h4>Cadastro de Especialidade</h4>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              disabled={isLoading}
              required
              onChange={(e) =>
                setProfession({
                  name: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="modal-footer">
          <button type="submit">
            {isLoading ? "Salvando..." : "Salvar nova Especialidade"}
          </button>
        </div>
      </form>
    </ProfessionsModalContainer>
  );
};

export default ProfessionsModal;

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import Swal from "sweetalert2";
import InputMask from "react-input-mask";

import { ScheduleContainer } from "./styles";

interface ScheduleModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ScheduleModal = ({ state, setState }: ScheduleModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModalClose = () => {
    setState(false);
  };

  return (
    <ScheduleContainer className={state ? "show" : ""}>
      <form className="modal-content" noValidate>
        <div className="modal-header">
          <h4>Agendamento</h4>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Paciente:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              disabled={isLoading}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-sm-4">
              <label htmlFor="date">Data de atendimento:</label>
              <input
                className="form-control"
                type="date"
                name="date"
                id="date"
                disabled={isLoading}
                required
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="time">Hora de atendimento:</label>
              <input
                className="form-control"
                type="time"
                name="time"
                id="time"
                disabled={isLoading}
                required
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="amount">Valor:</label>
              <input
                className="form-control"
                type="number"
                name="amount"
                id="amount"
                disabled={isLoading}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <label htmlFor="status">Status:</label>
              <select
                className="form-control"
                name="status"
                id="status"
                disabled={isLoading}
                required
              >
                <option value="Agendado">Agendado</option>
                <option value="Realizado">Realizado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="specialists">Especialista:</label>
              <select
                className="form-control"
                name="specialists"
                id="specialists"
                disabled={isLoading}
                required
              >
                <option value="cardiologista">Cardiologista</option>
                <option value="Neurologista">Neurologista</option>
                <option value="oftalmologista">Oftalmologista</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <label htmlFor="description">Descrição:</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            disabled={isLoading}
            required
          />
        </div>
        <div className="modal-footer">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Salvando..." : "Salvar atendimento"}
          </button>
        </div>
      </form>
    </ScheduleContainer>
  );
};

export default ScheduleModal;

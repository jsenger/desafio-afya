import { Dispatch, SetStateAction } from 'react';
import InputMask from 'react-input-mask';


interface Address {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

interface AddressFormProps {
  address: Address;
  setAddress: Dispatch<SetStateAction<Address>>;
  isLoading: boolean;
}

const AddressForm = ({ address, setAddress, isLoading }: AddressFormProps) => {
  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="cep">CEP:</label>
          <InputMask
            mask="99999-999"
            className="form-control"
            type="text"
            name="cep"
            id="cep"
            disabled={isLoading}
            onChange={e =>
              setAddress({
                ...address,
                cep: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group col-md-8">
          <label htmlFor="street">Logradouro:</label>
          <input
            className="form-control"
            type="text"
            name="street"
            id="street"
            disabled={isLoading}
            onChange={e =>
              setAddress({
                ...address,
                street: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="number">Número:</label>
          <input
            className="form-control"
            type="number"
            name="number"
            id="number"
            min="1"
            disabled={isLoading}
            onChange={e =>
              setAddress({
                ...address,
                number: Number(e.target.value),
              })
            }
          />
        </div>
        <div className="form-group col-md-8">
          <label htmlFor="neighborhood">Bairro:</label>
          <input
            className="form-control"
            type="text"
            name="neighborhood"
            id="neighborhood"
            disabled={isLoading}
            onChange={e =>
              setAddress({
                ...address,
                neighborhood: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="city">Cidade:</label>
          <input
            className="form-control"
            type="text"
            name="city"
            id="city"
            disabled={isLoading}
            onChange={e =>
              setAddress({
                ...address,
                city: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="state">Estado:</label>
          <select
            className="form-control"
            name="state"
            defaultValue={''}
            disabled={isLoading}
            onChange={e =>
              setAddress({
                ...address,
                state: e.target.value,
              })
            }
          >
            <option value="" disabled></option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AddressForm;

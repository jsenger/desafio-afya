import { Dispatch, SetStateAction } from 'react';

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
}

const AddressForm = ({ address, setAddress }: AddressFormProps) => {
  return (
    <>
      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        name="cep"
        id="cep"
        onChange={e =>
          setAddress({
            ...address,
            cep: e.target.value,
          })
        }
      />

      <label htmlFor="street">Logradouro:</label>
      <input
        type="text"
        name="street"
        id="street"
        onChange={e =>
          setAddress({
            ...address,
            street: e.target.value,
          })
        }
      />

      <label htmlFor="number">Número:</label>
      <input
        type="number"
        name="number"
        id="number"
        onChange={e =>
          setAddress({
            ...address,
            number: Number(e.target.value),
          })
        }
      />

      <label htmlFor="neighborhood">Bairro:</label>
      <input
        type="text"
        name="neighborhood"
        id="neighborhood"
        onChange={e =>
          setAddress({
            ...address,
            neighborhood: e.target.value,
          })
        }
      />

      <label htmlFor="city">Cidade:</label>
      <input
        type="text"
        name="city"
        id="city"
        onChange={e =>
          setAddress({
            ...address,
            city: e.target.value,
          })
        }
      />

      <label htmlFor="state">Estado:</label>
      <select
        name="state"
        value={""}
        onChange={e =>
          setAddress({
            ...address,
            state: e.target.value,
          })
        }
      >
        <option value="" disabled></option>
        <option value="AC" key="AC">AC</option>
        <option value="AL" key="AL">AL</option>
        <option value="AP" key="AP">AP</option>
        <option value="AM" key="AM">AM</option>
        <option value="BA" key="BA">BA</option>
        <option value="CE" key="CE">CE</option>
        <option value="DF" key="DF">DF</option>
        <option value="ES" key="ES">ES</option>
        <option value="GO" key="GO">GO</option>
        <option value="MA" key="MA">MA</option>
        <option value="MT" key="MT">MT</option>
        <option value="MS" key="MS">MS</option>
        <option value="MG" key="MG">MG</option>
        <option value="PA" key="PA">PA</option>
        <option value="PB" key="PB">PB</option>
        <option value="PR" key="PR">PR</option>
        <option value="PE" key="PE">PE</option>
        <option value="PI" key="PI">PI</option>
        <option value="RJ" key="RJ">RJ</option>
        <option value="RN" key="RN">RN</option>
        <option value="RS" key="RS">RS</option>
        <option value="RO" key="RO">RO</option>
        <option value="RR" key="RR">RR</option>
        <option value="SC" key="SC">SC</option>
        <option value="SP" key="SP">SP</option>
        <option value="SE" key="SE">SE</option>
        <option value="TO" key="TO">TO</option>
      </select>
    </>
  );
};

export default AddressForm;

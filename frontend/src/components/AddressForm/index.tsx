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
    </>
  );
};

export default AddressForm;

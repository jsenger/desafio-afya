import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import { viaCepApi } from '../../services/api';
import { Address } from '../../types';

interface AddressFormProps {
  address: Address;
  setAddress: Dispatch<SetStateAction<Address>>;
  isLoading: boolean;
}


const AddressForm = ({ address, setAddress, isLoading }: AddressFormProps) => {

  const [ cep, setCep ] = useState<string>('');
  const [ isLoadingCep, setIsLoadingCep ] = useState<boolean>(false);
 useEffect(() => {
  if(cep.length === 8) {
    setIsLoadingCep(true)
    viaCepApi.get(`${cep}/json`)
  .then(response => {
    setAddress({
      ...address,
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf
    })
  })
  .catch(err => {
    setAddress({
      ...address,
      street: "",
      neighborhood: "",
      city: "",
      state: ""
    })
    Swal.fire({
      title: 'Ops!',
              text: 'Verifique se o Cep digitado está correto!',
              icon: 'error',
              confirmButtonText: 'Fechar',
              confirmButtonColor: '#ff312e'
    }).finally(() => setIsLoadingCep(false))
  }
  )}
 }, [cep])


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
            required
            pattern="^[0-9]{5}-[0-9]{3}$"
            disabled={isLoading}
            onChange={e =>
              {
                setCep(e.target.value.replace(/-|_/g, ""))
                console.log(cep)
                setAddress({
                ...address,
                cep: e.target.value,
              })}
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
            required
            value={address.street}
            disabled={isLoading && isLoadingCep}
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
            required
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
            required
            value={address.neighborhood}
            disabled={isLoading && isLoadingCep}
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
            required
            value={address.city}
            disabled={isLoading && isLoadingCep}
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
            required
            name="state"
            defaultValue={''}
            value={address.state}
            disabled={isLoading && isLoadingCep}
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

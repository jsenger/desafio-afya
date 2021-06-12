export interface Address {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Client {
  id?: string;
  name: string;
  cpf: string;
  phone: string;
  cellphone: string;
  blood_type: string;
  email: string;
  address: Address;
  new: boolean;
}

export interface Profession {
  id?: string;
  name: string;
}

export interface Specialist {
  name: string;
  register: string;
  phone: string;
  cellphone: string;
  email: string;
  profession_name: string;
  address: Address;
}

export interface Appointment {
  new?: boolean;
  id?: string;
  date: string;
  amount: number;
  status: string;
  specialist_id: string;
  client_id: string;
  client?: {
    name: string;
    cpf: string;
  };
  specialist?: {
    name: string;
    profession?: {
      name: string;
    }
  }
  description?: string;
}

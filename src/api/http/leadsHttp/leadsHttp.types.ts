export interface LeadsResponse {
  success: boolean;
  error_message?: string;
}

export interface LeadsServiceForm {
  form: 'shortServiceForm';
  name: string;
  phone: string;
  services_list: string;
}

export interface LeadsCalculationForm {
  form: 'fullServiceForm';
  name: string;
  phone: string;
  services_list: string;
  car: string;
}

export interface LeadsCallbackForm {
  form: 'callbackForm';
  name: string;
  phone: string;
}

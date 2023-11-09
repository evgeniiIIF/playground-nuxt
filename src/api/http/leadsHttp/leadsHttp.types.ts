export interface LeadsResponse {
  success: boolean;
  error_message?: string;
}

export interface LeadsServiceForm {
  name: string;
  phone: string;
  services_list: string;
}

export interface LeadsCalculationForm {
  name: string;
  phone: string;
  services_list: string;
  car: string;
}

export interface LeadsCallbackForm {
  name: string;
  phone: string;
}

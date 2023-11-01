import type {ServicesAllItemChild} from "@/store/servicesAll/servicesAll.types";

const setChecked = (service: ServicesAllItemChild, checkedServices?: ServicesAllItemChild[]) => !!checkedServices?.find((s) => s.id === service.id);

export { setChecked }

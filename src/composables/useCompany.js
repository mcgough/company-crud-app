import { ref, readonly } from '@vue/composition-api';

let company;

function setCompany(data) {
  company.value = data;
}

export default function useCompany() {
  if (!company) company = ref({});
  return [readonly(company), setCompany];
}

import { ref } from '@vue/composition-api';
import CompanyService from '../services/CompanyService';

let companies;

function setCompanies(data) {
  companies.value = data;
}

function fetchCompanies() {
  CompanyService.getAll().then(setCompanies);
}

export default function useCompanies() {
  if (!companies) companies = ref([]);

  return {
    companies,
    fetchCompanies,
  };
}

<template>
  <div>
    <h2>{{ company.name }}</h2>
    <div>
      <h4>Domain: {{ company.domain }}</h4>
      <h4>Id: {{ company.id }}</h4>
      <h4>Number of Employees: {{ company.numberOfEmployees }}</h4>
      <h4>Subscriptions per Employee: {{ company.subscriptionsPerEmployee }}</h4>
      <h4>Total Subscriptions: {{ totalSubscriptions }}</h4>
    </div>
    <employee-count-input :current="company.numberOfEmployees" @submit="updateEmployeeCount" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/composition-api';
import useRouter from '../composables/useRouter';
import useCompany from '../composables/useCompany';
import CompanyService from '../services/CompanyService';
import EmployeeCountInput from '../components/EmployeeCountInput.vue';

export default {
  components: { EmployeeCountInput },
  setup(_, ctx) {
    const { route } = useRouter(ctx);
    const [company, setCompany] = useCompany();

    const totalSubscriptions = computed(
      () => company.value.numberOfEmployees * company.value.subscriptionsPerEmployee
    );

    function getSetCompany() {
      CompanyService.getById(parseInt(route.params.id, 10)).then(setCompany);
    }
    function updateEmployeeCount(numberOfEmployees) {
      setCompany({ ...company.value, numberOfEmployees });
    }

    onMounted(getSetCompany);

    return {
      company,
      totalSubscriptions,
      updateEmployeeCount,
    };
  },
};
</script>

<style></style>

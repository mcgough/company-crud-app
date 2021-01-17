<template>
  <div>
    <h2>Edit Details</h2>
    <form @submit.prevent="onSubmit" class="is-flex">
      <input v-model="name" type="text" />
      <input v-model="domain" type="text" />
      <input v-model="numberOfEmployees" type="number" />
      <input v-model="subscriptionsPerEmployee" type="number" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { onMounted, toRefs } from '@vue/composition-api';
import useRouter from '../composables/useRouter';
import useCompany from '../composables/useCompany';
import CompanyService from '../services/CompanyService';

export default {
  setup(_, ctx) {
    const { route } = useRouter(ctx);
    const [company, setCompany] = useCompany();
    const { name, domain, numberOfEmployees, subscriptionsPerEmployee } = toRefs(company.value);

    function getSetCompany() {
      CompanyService.getById(parseInt(route.params.id, 10)).then(setCompany);
    }

    function onSubmit() {
      alert(`
        Name: ${name.value}
        Domain: ${domain.value}
        Employee Count: ${numberOfEmployees.value}
        Subscriptions per Employee: ${subscriptionsPerEmployee.value}
      `);
    }

    onMounted(getSetCompany);

    return {
      company,
      name,
      domain,
      numberOfEmployees,
      subscriptionsPerEmployee,
      onSubmit,
    };
  },
};
</script>

<style></style>

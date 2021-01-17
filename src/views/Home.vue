<template>
  <div>
    <ul v-if="companies">
      <li v-for="company in companies" :key="company.id">
        {{ company.id }} -
        <router-link :to="`company/${company.id}`">{{ company.name }}</router-link> |
        <router-link :to="`edit/${company.id}`">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import useCompanies from '@/composables/useCompanies';

export default {
  name: 'home',
  setup() {
    const { companies, fetchCompanies } = useCompanies();

    fetchCompanies();

    return {
      companies,
    };
  },
};
</script>

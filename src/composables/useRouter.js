export default function useRouter(ctx) {
  const route = ctx.root.$route;

  return {
    route,
  };
}

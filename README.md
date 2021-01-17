# 4 hr Code Challendge

#### Dependences Added
* `@vue/composition-api`
* `lodash.flowRight`

#### TODO
* Styling
* Break out shared functionality - Edit and Company views
* Reactive reference to `route`

#### Looking Back
* I thought that bringing in `@vue/composition-api` would have saved me some time, since I'd been working with it in depth lately. However, I found myself spinning my wheels trying to roll my own `useRouter` hook, which ideally would've given me a reactive reference to `route`. I also thought about updating the versions of Vue and Vue-Router to get around this, but wasn't sure if that was within the scope of the acceptance criteria. I probably should've just stuck with the `options` api.

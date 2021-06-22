# Tigger Entries

```javascript
FlowRouter.triggers.enter([isLoggedIn], {
  only: ["add-product", "edit-post", "admin"],
});
function isLoggedIn() {
  if (!Meteor.userId()) FlowRouter.go("/home");
}
```

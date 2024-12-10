// Assuming `rule` is an object that may or may not have a `selectors` property

if (rule.selectors) {
  // Execute this block if `rule.selectors` exists and is truthy

  // Example logic inside the if block:
  // Access `rule.selectors` and perform operations
  const selectors = rule.selectors;
  console.log('Selectors exist:', selectors);

  // You can add more logic here based on `selectors`
} else {
  // Execute this block if `rule.selectors` does not exist or is falsy

  console.log('No selectors found in rule');
  // Handle the case where `selectors` is not present, if needed
}

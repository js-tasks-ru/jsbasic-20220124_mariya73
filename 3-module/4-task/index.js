function showSalary(users, age) {
  const newArrUsers = users
    .filter(function (user) {
      return user.age <= age;
    })
    .map(function (user) {
      return `${user.name}` + ', ' + `${user.balance}`;
    });
  return newArrUsers.join('\n');
}
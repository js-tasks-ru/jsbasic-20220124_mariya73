function sumSalary(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    if (Number.isInteger(salary)) {
      totalSalary += salary;
    }
  }
  return totalSalary;
}
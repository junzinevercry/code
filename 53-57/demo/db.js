const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    id:i,
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    work: `London Park no. ${i}`,
  });
}

module.exports = {users:data}
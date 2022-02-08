function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  function getListContent() {
    let result = [];
    let list = friends.map(item => item.firstName + ' ' + item.lastName);

    for (let i = 0; i < list.length; i++) {
      let li = document.createElement('li');
      li.append(list[i]);
      result.push(li);
    }

    return result;
  }
  ul.append(...getListContent());
  return ul;
}
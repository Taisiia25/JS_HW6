// Exercise 1
console.log('Exercise 1')
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 


const arr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr, index) => arr.splice(1, index);

removeUser(arr, 1);
console.log(arr) /// ['Vasya', 'Alexey']

// Exercise 2
console.log('Exercise 2')

// Создать функцию которая вернет все ключи обьекта переданного параметром

const obj = { name: 'Vasya', age: 1};

const getAllKeys = (obj) => Object.keys(obj);

console.log(getAllKeys(obj)); /// ["name", "age"]

// Exercise 3
console.log('Exercise 3')

// Создать функцию которая вернет все значения объекта переданного параметром
const obj1 = { name: 'Vasya', age: 1};

const getAllValues = (obj1) => Object.values(obj1);

console.log(getAllValues(obj1)); /// ["Vasya", 1]

// Exercise 4
console.log('Exercise 4')

// Содать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым параметром - id любого 
// кондидата в массиве condidateArr. Функция должна будет вставить кандидата переданного через 
// первый параметр в массив перед кондидатом у которого id равно тому что передали во-втором параметре


const insertIntoarr = (candidate, id) => {
    const index = condidateArr.findIndex((item) => item._id === id)
    
    condidateArr.splice(index, 0, candidate);
  
    return condidateArr
};


// Exercise 5
console.log('Exercise 5')

// Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. 
// Добавить метод с именем state который вернет шатат в котором живает наш кондидат.
// Информация о штате находится в свойстве address и это третья запись после запятой.

class Condidate {
    constructor(condidate) {
        Object.assign(this, condidate);
    }

    state() {
        const state = this.address.split(", ").slice(2,  3);
        return state.join();
    }
};

const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state()); /// Colorado

// Exercise 6
console.log('Exercise 6')

// Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. 
// Если фирмы повторяются в массиве, то удалить дубликаты. 
// Все так же используем массив candidateArr

function getCompanyNames ()  {
    const companiesArr = condidateArr.map(obj => obj.company);
    console.log(companiesArr)
    const result = condidateArr.filter(
      (item, index) => companiesArr.indexOf(item.company) === index);
  
    return result;
  
};

console.log(getCompanyNames());


// Exercise 7
console.log('Exercise 7')

// Создать функцию которая выведет мне массив id всех кондидатов, 
// которые были зарагестрированны в том же году что и год указанный в параметре.

function getUsersByYear (year)  {
    return condidateArr
      .filter((item) => item.registered.indexOf(year) > -1)
      .map((item) => item._id)
  
  };
  
console.log(getUsersByYear(2019));

// Exercise 8
console.log('Exercise 8')

// Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по 
// кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, 
// Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
// Все так же используем массив candidateArr

function getCondidatesByUnreadMsg (count)  {
    return condidateArr
      .filter((item) => item.greeting.indexOf(count) > -1)
  };
  
console.log(getCondidatesByUnreadMsg(8));


// Exercise 9
console.log('Exercise 9')

// Создать функцию которая вернет массив по свойству gender.
// Все так же используем массив candidateArr

const getCondidatesByGender = (gender) => {

   return condidateArr.filter((obj) => obj.gender === gender);
};

console.log(getCondidatesByGender('male')); /// [Condidate, Condidate ...]

// Exercise 10
console.log('Exercise 10')

// Создать функцию reduce, join самому 
// как на занятии создавали forEach, map, find, filter и т.д.

//join

let array = ['1', '2', '3', '4'];

Array.prototype.cJoin = function (array)  {
    let str = '';
  
    array.forEach((item) => {
      str += item
    })
  
    return str;
};

console.log(array.cJoin(array));

// reduce()

Array.prototype.cReduce = function (array, callback, initVal)  {
  var sum = initVal;

  array.forEach((item) => {
    sum = callback(sum, item);
  });
  
  return sum;  
}

console.log(array.cReduce([1, 2, 3], function(total, number) {
  return total - number;
}, 10));
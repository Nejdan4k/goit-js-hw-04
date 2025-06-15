// Функція перевіряє, чи помістяться всі товари в контейнер
function isEnoughCapacity(products, containerSize) {
  // Обчислюємо суму значень усіх товарів
  const totalQuantity = Object.values(products).reduce((sum, value) => sum + value, 0);
  // Порівнюємо з розміром контейнера
  return totalQuantity <= containerSize;
}

// Тестові виклики
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

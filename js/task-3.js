// Об'єкт профілю з методами
const profile = {
  username: "Jacob",
  playTime: 300,

  // Метод повертає інфу про профіль
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },

  // Метод змінює ім'я користувача
  changeUsername(newName) {
    this.username = newName;
  },

  // Метод додає годин до playTime
  updatePlayTime(hours) {
    this.playTime += hours;
  },
};

// Тестові виклики
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

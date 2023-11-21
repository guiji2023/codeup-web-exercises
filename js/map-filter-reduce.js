const users = [
  {
    id: 1,
    name: "ryan",
    email: "ryan@codeup.com",
    languages: ["clojure", "javascript"],
    yearsOfExperience: 5,
  },
  {
    id: 2,
    name: "luis",
    email: "luis@codeup.com",
    languages: ["java", "scala", "php"],
    yearsOfExperience: 6,
  },
  {
    id: 3,
    name: "zach",
    email: "zach@codeup.com",
    languages: ["javascript", "bash"],
    yearsOfExperience: 7,
  },
  {
    id: 4,
    name: "fernando",
    email: "fernando@codeup.com",
    languages: ["java", "php", "sql"],
    yearsOfExperience: 8,
  },
  {
    id: 5,
    name: "justin",
    email: "justin@codeup.com",
    languages: ["html", "css", "javascript", "php"],
    yearsOfExperience: 9,
  },
];

(() => {
  //Use .filter to create an array of user objects where each user object has at least 3 languages in the languages arr
  const usersWithOver3languages = users.filter((user) => {
    return user.languages.length > 2;
  });
  console.log(usersWithOver3languages);

  //Use .map to create an array of strings where each element is a user's email address
  const emailArrays = users.map((user) => {
    return user.email;
  });
  console.log(emailArrays);

  //Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

  const totalYearsOfExperience = users.reduce((accumulator, user) => {
    return accumulator + user.yearsOfExperience;
  }, 0);

  console.log(totalYearsOfExperience);

  const averageYearsOfExperience = totalYearsOfExperience / users.length;
  console.log(averageYearsOfExperience);

  //Use .reduce to get the longest email from the list of users.

  const longestEmailUser = users.reduce((accumulator, user) => {
    if (accumulator.length > user.email.length) {
      return accumulator;
    } else {
      return user.email;
    }
  }, users[0].email);

  //Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

  const names = users.reduce((accumulator, user, index) => {
    if (index === users.length - 1) {
      return accumulator + ", " + user.name + ".";
    }

    return user.name + ", " + accumulator;
  }, "");

  console.log(names);

  //Use .reduce to get the unique list of languages from the list of users.

  // get the whole list of languages from the list of users

  // set allow push all elements but only unique elements are passed through.
  let languages = users.reduce((accumulator, user) => {
    for (let language of user.languages) {
      accumulator.add(language);
    }
    return accumulator;
  }, new Set([]));

  console.log(languages);
})();

const hours = document.querySelectorAll('.hours');
const previousTime = document.querySelectorAll('.previous');
const daily = document.getElementById('daily');
const title = document.getElementById('title');
const activity = document.querySelectorAll('.option-icon');
const timeLine = document.querySelectorAll('.timeline');

// Fetching data from the JSON file and storing in a variable
async function getTime() {
  const response = await fetch('./data.json');
  const dataArray = await response.json();
  return dataArray;
}

// Getting the dailydata and passing it to each of the cards
const dailyData = async () => {
  const jsonData = await getTime();
  try {
    // looping through the hours array
    hours.forEach((item, index) => {
      hours[
        index
      ].textContent = `${jsonData[index].timeframes['daily'].current}hrs`;

      previousTime[
        index
      ].textContent = `${jsonData[index].timeframes['daily'].previous}hrs`;

      let currentActivity = hours[index].textContent;
      let previousActivity = previousTime[index].textContent;

      return currentActivity, previousActivity;
    });
  } catch (error) {
    console.log('error', error);
  }
};

// Getting the weeklydata and passing it to each of the cards
const weeklyData = async () => {
  const jsonData = await getTime();
  try {
    hours.forEach((item, index) => {
      hours[
        index
      ].textContent = `${jsonData[index].timeframes['weekly'].current}hrs`;

      previousTime[
        index
      ].textContent = `${jsonData[index].timeframes['weekly'].previous}hrs`;

      let currentActivity = hours[index].textContent;
      let previousActivity = previousTime[index].textContent;

      return currentActivity, previousActivity;
    });
  } catch (error) {
    console.log('error', error);
  }
};
// Getting the monthlydata and passing it to each of the cards
const monthlyData = async () => {
  const jsonData = await getTime();
  try {
    hours.forEach((item, index) => {
      hours[
        index
      ].textContent = `${jsonData[index].timeframes['monthly'].current}hrs`;

      previousTime[
        index
      ].textContent = `${jsonData[index].timeframes['monthly'].previous}hrs`;

      let currentActivity = hours[index].textContent;
      let previousActivity = previousTime[index].textContent;

      return currentActivity, previousActivity;
    });
  } catch (error) {
    console.log('error', error);
  }
};
// Passing the data to dom when clicked the button
daily.addEventListener('click', dailyData);
weekly.addEventListener('click', weeklyData);
monthly.addEventListener('click', monthlyData);

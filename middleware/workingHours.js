const workingHours = (req, res, next) => {
  const now = new Date();

  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  const isWeekDay = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekDay && isWorkingHour) {
    next();
  } else {
    res.send(`
      <h1>🎮 Store Closed</h1>
      <p>Our Gamer PC Shop is open Monday to Friday, from 9:00 to 17:00</p>
    `);
  }
};

module.exports = workingHours;
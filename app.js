

  const rangeChange = (num) =>{
    const customToggle = document.getElementById(`custom-toggle-${num}`);
    const spanElements = document.getElementById(`span-${num}`);
    const value = parseInt(customToggle.value);
    switch (value){
      case 1:
        customToggle.classList.remove('tgl-off', 'tgl-def');
        customToggle.classList.add('tgl-on');
        spanElements.textContent = 'In Office';
        break;
      case 2:
        customToggle.classList.remove('tgl-on', 'tgl-off');
        customToggle.classList.add('tgl-def');
        spanElements.textContent = 'Break';
        break;
      case 3:
        customToggle.classList.remove('tgl-def', 'tgl-on');
        customToggle.classList.add('tgl-off');
        spanElements.textContent = 'Out of Office';
        break;
    }
  }

const updateTime = () => {
  const date = new Date();
  const time = document.getElementById('time');
  const hour = date.getHours();
  console.log(hour);
  const minute = date.getMinutes();
  if (hour < 12){
    time.innerText = `${hour}:${minute >= 10 ? minute : `0${minute}`}AM`;
  }else if(hour >= 12){
    time.innerText = `${hour === 12? hour:hour-12}:${minute >= 10 ? minute : `0${minute}`}PM`;
  }
}

updateTime();
setInterval(updateTime, 2000);



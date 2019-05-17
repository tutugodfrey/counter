const electron = require('electron');
const ipc = electron.ipcRenderer;

document.getElementById('start').addEventListener('click', _ => {
  const countSize = document.getElementById('count-size');
  const value = parseInt(countSize.value, 10);
  countSize.value = null;
  ipc.send('countdown-start', value)
});

ipc.on('countdown', (event, count) => {
  document.getElementById('count').innerHTML = count;
})
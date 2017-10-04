const secondHand = document.querySelector('.second-hand')
const mindHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function timeDegrees (time, interval) {
  interval = (typeof interval !== 'undefined') ? interval : 60
  return ((time / interval) * 360) + 90
}

function rotateHand (hand, degrees) {
  hand.style.transform = `rotate(${degrees}deg)`
}

function setDate () {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = timeDegrees(seconds)
  rotateHand(secondHand, secondsDegrees)

  const minutes = now.getMinutes()
  const minutesDegrees = timeDegrees(minutes)
  rotateHand(mindHand, minutesDegrees)

  const hours = now.getHours()
  const hoursDegrees = timeDegrees(hours, 12)
  rotateHand(hourHand, hoursDegrees)
}

setInterval(setDate, 1000)

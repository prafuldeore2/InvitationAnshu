import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const targetDate = new Date('February 4, 2024 00:00:00').getTime()
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime())

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRemainingTime(calculateRemainingTime())
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [])

  function calculateRemainingTime() {
    const currentDate = new Date().getTime()
    const timeDifference = targetDate - currentDate

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      )
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      return `${days} days ${hours}h ${minutes}m ${seconds}s`
    } else {
      return 'Countdown Ended!'
    }
  }

  return (
    <div className="countdown-container">
      <h1>Countdown to February 4, 2023: {remainingTime}</h1>
    </div>
  )
}

export default CountdownTimer
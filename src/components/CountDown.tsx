import { useEffect, useState } from "react"

function getRemainingTime(targetDate: Date) {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  const seconds = Math.floor((distance / 1000) % 60)
  const minutes = Math.floor((distance / 1000 / 60) % 60)
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))

  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  const target = new Date("2025-07-10T00:00:00")
  const [timeLeft, setTimeLeft] = useState(getRemainingTime(target))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" text-white fixed m-[5px] z-[999] rounded-sm bg-black p-3 border-purple-200 border-2">
      <div className="text-sm tracking-widest">
        <b> Limited Time Offer </b> - <text className="line-through text-gray-500 italic">₹300</text> <text className="font-bold text-green-500">₹199</text><br/> valid for {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>
    </div>
  )
}

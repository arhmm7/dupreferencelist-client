import Countdown from "@/components/CountDown"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

function Pricing() {
  return (
    <>
    <Countdown/>
    <div className="p-4 flex justify-center items-center min-h-[90vh] bg-background text-foreground">
      <Card className="max-w-sm w-full border border-border rounded-2xl bg-muted shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-normal">Special Offer</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Unlock your DU Preference List
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-5">
          <div className="text-center">
            <div className="text-sm text-muted-foreground line-through">₹300</div>
            <div className="text-6xl font-bold text-primary">₹199</div>
            <div className="mt-1 px-3 py-1 text-green-400 bg-green-900/20 text-xs font-semibold rounded-full animate-pulse">
              Limited Time Discount
            </div>
          </div>

          <Link to="/dashboard" className="w-full">
            <Button className="w-full px-8 py-4 text-md rounded-xl">
              Generate My List
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground mt-2 italic">
            One-time payment. Instant access.
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

export default Pricing

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-shadow-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-shadow-green/20 border-t-shadow-green rounded-full animate-spin" />
        <p className="text-shadow-text-light text-sm">Loading...</p>
      </div>
    </div>
  )
}

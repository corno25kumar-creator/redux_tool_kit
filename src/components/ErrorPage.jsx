
function ErrorPage({ message }) {
  return (
    <p className="text-center text-red-500 mt-10 text-lg font-medium">
      Error: {message}
    </p>
  )
}

export default ErrorPage

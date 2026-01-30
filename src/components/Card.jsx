
function Card({user}) {
  return (
     <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col gap-2 bg-white">
      <h2 className="font-semibold text-lg text-indigo-600">{user.name}</h2>
      <p className="text-gray-700">Username: {user.username}</p>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-500 text-sm">Website: {user.website}</p>
    </div>
  )
}

export default Card

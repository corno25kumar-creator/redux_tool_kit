import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../store/features/counter/counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[320px] text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Redux Toolkit Counter
        </h1>

        <p className="text-5xl font-bold text-indigo-600 mb-6">
          {count}
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter

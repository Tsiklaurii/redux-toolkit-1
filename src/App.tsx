import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import './scss/main.scss'
import { decrement, increment } from "./store/users/user.slice"
import { fetchUsers } from "./store/users/actions"

const App = () => {
  const { count, error, isLoading, users } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h1>Users</h1>
      {users.map(({ id, email }) =>
        <div key={id}>
          <h3>{email}</h3>
        </div>
      )}
      {isLoading && <h1>Loading ... </h1>}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default App
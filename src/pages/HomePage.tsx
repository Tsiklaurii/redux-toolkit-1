import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchUsers } from "../store/users/actions"
import { decrement, increment } from "../store/users/user.slice"

const HomePage = () => {
    const { count, error, isLoading, users } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <>
            <h1>Counter</h1>
            <div className="counter">{count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <h1>Users</h1>
            {users.map(({ id, email, name }) =>
                <div key={id}>
                    <h3>{name} - {email}</h3>
                </div>
            )}
            {isLoading && <h1>Loading ... </h1>}
            {error && <h1>{error}</h1>}
        </>
    )
}

export default HomePage
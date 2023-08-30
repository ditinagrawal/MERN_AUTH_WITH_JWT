

const Panel = () => {

  const username = localStorage.getItem('username')

  return (
    <div className="mycontainer">
        <h1 className="fs-1 fw-normal text-capitalize">Welcome, {username}</h1>
    </div>
  )
}

export default Panel
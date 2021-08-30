function DemoArray() {
    const myLists = ['Usha', 'Krupali', 'Vedant', 'Komal'];
    const nameList = [{ id: 1, name: 'Kumar' }, { id: 2, name: 'Manan' }];

    return (
        <>
            <div>
                <h1>
                    Example of react map loop
                </h1>
                {
                    myLists.map(names => (
                        <li>{names}</li>
                    ))
                }
                <br></br>
                <table border="3">
                {
                    nameList.map(users => (
                            <tr key={users.id}>
                                <td>{users.id} </td>
                                <td>{users.name}</td>
                            </tr>
                    ))
                }
                </table>
            </div>

        </>
    )
}

export default DemoArray;
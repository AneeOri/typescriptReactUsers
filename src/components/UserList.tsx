import { SortBy, type User } from "../types.d"

interface Props {
    changeSorting : (sort : SortBy) => void
    deleteUser: (email: string) => void
    showColors: boolean
    users: User[]
}

export function UsersList({ changeSorting, deleteUser, showColors, users} : Props){
    return(
        <table width='100%'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th onClick={() => {changeSorting(SortBy.NAME)}}>Nombre</th>
                    <th onClick={() => {changeSorting(SortBy.LAST)}}>Apellido</th>
                    <th onClick={() => {changeSorting(SortBy.COUNTRY)}}>Pais</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        const backgroundColor = index % 2 === 0 ? '#6e7571' : '#555'
                        const color= showColors ? backgroundColor: 'transparent'
                      //  console.log("  " + index);

                        return(
                            <tr key={user.email} style={{backgroundColor: color}}>
                                <td>
                                    <img src={user.picture.thumbnail}/>
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                    {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                                <td> 
                                  <button
                                   onClick={() => {
                                    deleteUser(user.email)
                                   }}
                                  >Borrar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

//table, thead, tbody <--- son la clave
// tr --> row
// td --> celd
// th --> header celd
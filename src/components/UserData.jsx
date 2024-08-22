import React from 'react'

const UserData = ({ users }) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const { id, name, email, username, address, phone, website, company } = curUser;
                    return (
                        <tr key={id} class="bg-gray-50 border-b">
                            <td class="px-4 py-3 text-gray-700">{id}</td>
                            <td class="px-4 py-3 text-gray-700">{name}</td>
                            <td class="px-4 py-3 text-gray-700">{email}</td>
                            <td class="px-4 py-3 text-gray-700">{username}</td>
                            <td class="px-4 py-3 text-gray-700">{address.city} , {address.street} , {address.zipcode}</td>
                            <td class="px-4 py-3 text-gray-700">{phone}</td>
                            <td class="px-4 py-3 text-gray-700">{website}</td>
                            <td class="px-4 py-3 text-gray-700">{company.name} , {company.bs}</td>

                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData

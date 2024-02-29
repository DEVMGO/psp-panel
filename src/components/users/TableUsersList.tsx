import React from 'react'
import { ResUserList } from '@/services/list/types'
import UserItem from './UserItem'

interface Props {
  list: ResUserList
}

const TableUsersList = (props: Props) => {
  return (
    <div className="w-full flex items-start justify-start flex-col rounded-xl overflow-hidden">
      <div className="p-4">
        <h4 className="text-xl text-gray-700 font-semibold">Users</h4>
      </div>
      <div className="w-full flex items-start justify-start flex-col border border-gray-300 rounded-xl overflow-hidden">
        {props.list.length > 0 ? props.list.map((item, index: number) => (
          <UserItem
            key={index + 'users-list'}
            index={index}
            name={item.name}
            email={item.email}
            phone={item.phone}
            companyName={item.company.name}
          />
        ))
          :
          (
            <div className='w-full flex items-center justify-center p-6 bg-blue-100'>
              <h1 className='text-2xl text-gray-700 font-bold'>There is no user</h1>
            </div>
          )}
      </div>
    </div>
  )
}

export default TableUsersList
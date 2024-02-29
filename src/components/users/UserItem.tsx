interface Props {
    index: number,
    name: string
    companyName: string
    phone: string
    email: string
}
const UserItem = (props: Props) => {
  return (
    <div className="w-full h-14 flex items-center justify-start odd:bg-blue-100 even:bg-gray-100">
      <div className="min-w-16 h-full flex items-center justify-center">
        <p className="w-full text-center text-base text-gray-700 font-medium border-r-2 border-gray-700">{props.index + 1}</p>
      </div>
      <div className="w-full flex items-center justify-start gap-6 px-5">
        <div className="w-1/4">
          <p className="truncate text-base text-gray-600 font-bold">{props.name}</p>
        </div>
        <div className="w-1/4">
          <p className="truncate text-base text-gray-600 font-medium">{props.companyName}</p>
        </div>
        <div className="w-1/4">
          <p className="truncate text-base text-gray-600 font-medium">{props.phone}</p>
        </div>
        <div className="w-1/4">
          <p className="truncate text-base text-gray-600 font-medium">{props.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserItem
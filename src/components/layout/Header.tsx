import Link from 'next/link'
import { getCookie } from 'cookies-next';
import { UserIcon } from "@heroicons/react/24/solid";
import { ListBulletIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';

const Header = () => {
  const token = getCookie('access', {})
  const router = useRouter()
  const pathname = router.pathname

  const menu = [
    {
      title: "List",
      route: "/list",
      condition: true,
      icon: <ListBulletIcon className={`size-6 ${pathname.includes("list") ? "text-blue-500" : "text-gray-800"} group-hover:text-blue-500 group-hover:animate-bounce`} />,
    },
    {
      title: "Setting",
      route: "/setting",
      condition: token,
      icon: <Cog6ToothIcon className={`size-6 ${pathname.includes("setting") ? "text-blue-500" : "text-gray-800"} group-hover:text-blue-500 group-hover:animate-spin`} />,
    },
  ]

  return (
    <div className='w-full h-20 bg-gray-50 border-b border-gray-300 lg:px-24 px-12 flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        {menu.map((item, index) => (
          <Link
            key={index}
            href={!!item.condition ? item.route : ""}
            className={`text-lg ${pathname.includes(item.route) ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 font-semibold flex items-center gap-1 group`}
          >
            {item.icon} {item.title}
          </Link>
        ))}
      </div>
      <div className='size-14 bg-blue-200 border border-gray-200 rounded-full overflow-hidden flex items-center justify-center'>
        <UserIcon className="size-10 text-gray-800" />
      </div>
    </div>
  )
}

export default Header
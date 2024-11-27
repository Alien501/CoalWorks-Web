import Header from '@/components/custom/header'
import Sidebar from '@/components/custom/sidebar'
import Dash from '@/components/custom/dashboard'

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto ">
          <Dash />
        </main>
      </div>
    </div>
  )
}

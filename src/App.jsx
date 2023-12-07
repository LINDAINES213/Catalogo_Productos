import { RiMenu3Fill, RiUser3Line, RiAddLine, RiLightbulbLine } from 'react-icons/ri'
import Sidebar from './components/shared/Sidebar'

function App() {

  return (
      <div className='bg-[#262837] w-full min-h-screen'>
        <Sidebar/>
        {/* Menu Movil */}
        <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-white p-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
          <button>
            <RiUser3Line/>
          </button>
          <button>
            <RiAddLine/>
          </button>
          <button>
            <RiLightbulbLine/>
          </button>
          <button>
            <RiMenu3Fill/>
          </button>
        </nav>
      </div>
  )
}

export default App

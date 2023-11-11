export default function Navbar () {
    return <div className="bg-white shadow-sm px-10 py- flex justify-between items-center h-[60px]">
        <div className="flex gap-4 text-md cursor-pointer text-gray-500">
            <span className="hover:text-sky-400">FOOD</span>
            <span className="hover:text-sky-400">TRAVEL</span>
            <span className="hover:text-sky-400">FASHION</span>
        </div>
    </div>
}
import { LogOut, User, FileSignature } from "lucide-react"

const Navbar = () => {
    return (
        <div className="fixed w-screen h-16 bg-slate-900 z-10 px-8 md:px-16 border-b border-slate-700">
            <div className="flex h-full justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <span className="bg-slate-700 rounded-sm p-2">
                        <FileSignature color="#fff" size={24} />
                    </span>
                    <h1 className="text-white font-extrabold uppercase text-xl">Dev-Log</h1>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <span className="bg-slate-700 rounded-full p-2">
                        <User color="#fff" size={24} />
                    </span>
                    <LogOut color="#fff" size={24} />
                </div>
            </div>
        </div>
    )
}

export default Navbar